import mongoose from '../../../config/mongoose';
import { Schema } from 'mongoose';

const city = new mongoose.Schema({
	country: { type: Schema.Types.ObjectId, ref: 'country' },
	state: { type: Schema.Types.ObjectId, ref: 'state' },
  name: { type: String },
  zipCode: { type: String },
},
{
  timestamps: true,
});

export default mongoose.model('city', city);
