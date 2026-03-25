const express = require('express'); const router = express.Router();
router.all('/:service/*', (req, res) => { res.json({ message: 'Proxy stub', service: req.params.service, path: req.params[0], method: req.method }); });
module.exports = router;
