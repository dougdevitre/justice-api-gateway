const log = [];
function auditTrail(req, res, next) { log.push({ timestamp: new Date().toISOString(), method: req.method, path: req.path, ip: req.ip }); if (log.length > 5000) log.shift(); next(); }
function getLog() { return log; }
module.exports = { auditTrail, getLog };
