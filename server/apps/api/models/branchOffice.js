import mongoose from '../../../config/mongoose';
import { Schema } from 'mongoose';

const branchOffice = new mongoose.Schema({
	country: { type: Schema.Types.ObjectId, ref: 'country' },
	state: { type: Schema.Types.ObjectId, ref: 'state' },
	city: { type: Schema.Types.ObjectId, ref: 'city' },
  name: { type: String },
  address: { type: String },
},
{
  timestamps: true,
});

export default mongoose.model('branchoffice', branchOffice);
