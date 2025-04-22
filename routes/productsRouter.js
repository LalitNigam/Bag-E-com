const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("hay from products router");
});

module.exports = router;