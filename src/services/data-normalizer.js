class DataNormalizer {
  normalize(data, schema) { const result = {}; for (const [key, mapping] of Object.entries(schema)) { result[key] = data[mapping] || data[key] || null; } return result; }
  denormalize(data, schema) { const result = {}; for (const [key, mapping] of Object.entries(schema)) { result[mapping] = data[key]; } return result; }
}
module.exports = { DataNormalizer };
