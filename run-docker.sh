#!/usr/bin/env bash

set -a
source services.envar

extraNet=$(docker network ls -f name=extra-net -q)

if [[ -z $extraNet ]]; then
  echo "Creating development network"
  docker network create extra-net
fi

echo "Launching DBs containers..."
docker-compose -f docker-compose-dbs.yml up -d --build

echo "Checking Mongo..."
until docker exec -ti $(docker ps -q -f name=authmicroservice_mongo_1) /bin/bash -c "echo 'db.stats().ok' | mongo localhost:27017/test --quiet > /dev/null" == "1"; do
  echo "."
  sleep 1
done
echo "Mongo OK"

echo "Building Auth Ms container..."
docker-compose build

echo "Launching Auth Ms container..."
NODE_ENV=${NODE_ENV} \
docker-compose -f docker-compose.yml up -d
