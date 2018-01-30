const express = require('express');
const { signUp } = require('../handlers/signUp');

const router = new express.Router();

router
  .route('/')
  .post(signUp);

exports.signUpRouter = router;
