const express = require('express');
const router = express.Router();

router.get('/ping', (req, res) => {
    console.log(req.path);
    setTimeout(() => {
        if (!req.timedout) {
            res.json({
                pong: true,
            })
        }

    }, 6000);
})

module.exports = router;