const express = require('express');
const { signIn } = require('../handlers/signIn');

const router = new express.Router();

router
  .route('/')
  .post(signIn);

exports.signInRouter = router;
