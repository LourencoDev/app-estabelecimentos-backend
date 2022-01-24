"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _AuthController = require('../controllers/AuthController');
var _authorize = require('../middlewares/authorize'); var _authorize2 = _interopRequireDefault(_authorize);

const router = _express.Router.call(void 0, );
router.post('/register', _AuthController.AuthController.register);
router.post('/login', _AuthController.AuthController.login);
router.post('/', _authorize2.default.authenticate, _AuthController.AuthController.home);
router.get('/', (req, res) => {
  return res.status(200).json({ message: 'OKAY' });
});

exports. default = router;