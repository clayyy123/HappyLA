const mongoose = require('mongoose');
const barSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: { type: String },
  address: { type: String },
  city: { type: String },
  zip: { type: Number },
  food: { type: Boolean },
  alk: { type: Boolean },
  late: { type: Boolean },
  hh: [String]
});

const Bar = mongoose.model('Bar', barSchema);
module.exports = Bar;
