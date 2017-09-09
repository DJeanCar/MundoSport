import mongoose from '../../../../config/mongoose';

const colorSchema = new mongoose.Schema({
  name: { type: String },
  status: { type: Boolean, default: true },
},
{
  timestamps: true,
});

export default mongoose.model('color', colorSchema);
