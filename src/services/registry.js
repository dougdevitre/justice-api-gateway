class ServiceRegistry {
  constructor() { this.services = new Map(); }
  register(name, url, meta = {}) { this.services.set(name, { url, ...meta, registeredAt: new Date().toISOString() }); }
  discover(name) { return this.services.get(name) || null; }
  list() { return Object.fromEntries(this.services); }
}
module.exports = { ServiceRegistry };
