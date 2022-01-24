"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');



const router = _express.Router.call(void 0, );
// router.post('/register', AuthController.register);
// router.post('/login', AuthController.login);
// router.post('/', Authorize.authenticate, AuthController.home);
router.get('/', (req, res) => {
  return res.status(200).json({ message: 'OK' });
});

exports. default = router;