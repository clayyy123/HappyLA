const mongoose = require('mongoose');
const barSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: { type: String },
  food: { type: Boolean },
  alk: { type: Boolean },
  late: { type: Boolean },
  hh: [String],
  0: [Number],
  1: [Number],
  2: [Number],
  3: [Number],
  4: [Number],
  5: [Number],
  6: [Number]
});

const Bar = mongoose.model('Bar', barSchema);
module.exports = Bar;
