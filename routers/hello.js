const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {
    if (req.query.error) {
        // Intentionally call a nonexistent function to trigger an error
        /* eslint-disable-next-line no-undef */
        noSuchFunction();
    }
    console.log(req.query);
    const name = req.query.name || 'stranger';

    res.json({
        message: `freshworks says hello, ${name}!`,
    });
})

module.exports = router;