const mongoose = require('mongoose');
const barSchema = new mongoose.Schema({
  name: { type: String },
  location: { type: String },
  food: { type: Boolean },
  alk: { type: Boolean },
  late: { type: Boolean },
  everyday: { type: Boolean },
  weekdayOnly: { type: Boolean },
  weekendOnly: { type: Boolean },
  onlyHours: { type: String },
  0: { type: String },
  1: { type: String },
  2: { type: String },
  3: { type: String },
  4: { type: String },
  5: { type: String },
  6: { type: String }
});

const Bar = mongoose.model('Bar', barSchema);
module.exports = Bar;
