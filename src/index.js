const express = require('express'); const cors = require('cors'); const helmet = require('helmet'); require('dotenv').config();
const { rateLimiter } = require('./middleware/rate-limiter'); const { auditTrail } = require('./middleware/audit-trail');
const app = express(); app.use(helmet()); app.use(cors()); app.use(express.json()); app.use(rateLimiter); app.use(auditTrail);
app.get('/health', (_, res) => res.json({ status: 'ok', service: 'justice-api-gateway' }));
app.use('/api', require('./routes/proxy'));
app.listen(process.env.PORT || 4000, () => console.log('🔗 Justice API Gateway running on port ' + (process.env.PORT || 4000)));
module.exports = app;
