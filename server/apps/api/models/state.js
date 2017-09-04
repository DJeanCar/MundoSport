import mongoose from '../../../config/mongoose';
import { Schema } from 'mongoose';

const stateSchema = new mongoose.Schema({
	country: { type: Schema.Types.ObjectId, ref: 'country' },
  name: { type: String },
  capital: { type: String },
},
{
  timestamps: true,
});

export default mongoose.model('state', stateSchema);
