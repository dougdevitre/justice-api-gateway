const rateLimit = require('express-rate-limit');
const rateLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: parseInt(process.env.RATE_LIMIT_MAX || '100'), message: { error: 'Too many requests' } });
module.exports = { rateLimiter };
