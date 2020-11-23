const express = require('express');
const router = express.Router();
const helloService = require('./hello');
const healthcheckService = require('./health-check');
const basePath = '/v1';

router.use((req, res, next) => {
    console.log("Called: ", req.path);
    next();
})

router.use(basePath, helloService);
router.use(basePath, healthcheckService);

module.exports = router