import mongoose from '../../../../config/mongoose';

const sizeSchema = new mongoose.Schema({
  name: { type: String },
  status: { type: Boolean, default: true },
},
{
  timestamps: true,
});

export default mongoose.model('size', sizeSchema);
