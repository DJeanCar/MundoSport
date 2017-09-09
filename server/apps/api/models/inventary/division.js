import mongoose from '../../../../config/mongoose';

const divisionSchema = new mongoose.Schema({
  name: { type: String },
  status: { type: Boolean, default: true },
},
{
  timestamps: true,
});

export default mongoose.model('division', divisionSchema);
