import mongoose from '../../../config/mongoose';

const countrySchema = new mongoose.Schema({
  name: { type: String },
  code: { type: String },
},
{
  timestamps: true,
});

export default mongoose.model('country', countrySchema);
