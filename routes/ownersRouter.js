const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("hay from owners router");
});

module.exports = router;