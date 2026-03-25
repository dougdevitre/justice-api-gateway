class EventBus {
  constructor() { this.subscribers = new Map(); }
  subscribe(event, callback) { if (!this.subscribers.has(event)) this.subscribers.set(event, []); this.subscribers.get(event).push(callback); }
  publish(event, data) { (this.subscribers.get(event) || []).forEach(cb => cb(data)); }
  unsubscribe(event, callback) { const subs = this.subscribers.get(event); if (subs) this.subscribers.set(event, subs.filter(cb => cb !== callback)); }
}
module.exports = { EventBus };
