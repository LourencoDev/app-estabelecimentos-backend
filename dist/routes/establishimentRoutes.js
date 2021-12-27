"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');

const router = _express.Router.call(void 0, );

router.get('/', (req, res) => {
  return res.status(200).json({ message: 'Olá!' });
});

exports. default = router;