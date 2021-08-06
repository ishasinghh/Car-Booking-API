const express = require('express');
const registerApi = require('./register');
const loginApi = require('./login');
const getUserByIdApi = require('./getUser');
const cabBook = require('./cabBook');
const getCab = require('./getCabs');

const router = express.Router();

router.use(registerApi);
router.use(loginApi);
router.use(getUserByIdApi);
router.use(cabBook);
router.use(getCab);

module.exports = router;
