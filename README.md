# SingleSignOnNodeMongo

The goal of this project is to create a stable single sign-on service for use in DDD environments with Node and MongoDB.

# Documentation

## Getting Started

If you want to deploy quickly requires [Docker](https://www.docker.com/) installed.

### Run docker

_To build a docker image you simple have to run:_

```
$ ./run-docker.sh
```

### Scripts

```bash
npm start # run
npm test # run testing
```

### Endpoints

- Sign In: http://localhost:3588/signin
```
curl -X POST \
  http://localhost:3588/signin \
  -H 'content-type: application/json' \
  -H 'x-auth-secret: authSecret' \
  -d '{
  	"username": "test",
  	"password": "test"
  }'
```
- Sign Up: http://localhost:3588/signup
```
curl -X POST \
  http://localhost:3588/signup \
  -H 'content-type: application/json' \
  -H 'x-auth-secret: authSecret' \
  -d '{
  	"username": "test",
  	"password": "test"
  }'
```

## Technologies / Libraries

- [Node](https://nodejs.org/) - JS runtime environment
- [npm](https://www.npmjs.com/) - package manager
- [ESLint](http://eslint.org/) - linter
- [Cryptojs](https://github.com/brix/crypto-js) - To encrypt info
- [Express](http://expressjs.com/) - Web framework for Node.js
- [JWT Simple](https://github.com/hokaccha/node-jwt-simple) - JSON Web Token for Node.js
- [Moment.js](https://momentjs.com/) - Parse, validate, manipulate, and display dates and times in JavaScript.
- [Mongodb](https://www.mongodb.com/) - MongoDB driver for Node.js
- [Winston](https://github.com/winstonjs/winston) - A multi-transport async logging library for Node.js
- [Proxyquire](https://github.com/thlorenz/proxyquire) - Allow overriding dependencies during testing for Node.js
- [Sinon](http://sinonjs.org/) - Standalone test spies, stubs and mocks for JavaScript.
- [Tape](http://eslint.org/) - Test harness for Node.js


## Timeline / TODOS
* [x] Write README file
* [x] Create structure
* [x] Write Sign In Feature
* [x] Write Sign Up Feature
* [ ] Add Session control
* [ ] Write unit tests
* [ ] Write integration tests
