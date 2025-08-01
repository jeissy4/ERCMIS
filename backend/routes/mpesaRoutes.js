const express = require('express');
const router = express.Router();
const { initiateSTKPush, handleCallback } = require('../controllers/mpesaController');

router.post('/stkpush', initiateSTKPush);
router.post('/callback', handleCallback);

module.exports = router;
