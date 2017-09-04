import mongoose from '../../config/mongoose';
import { Schema } from 'mongoose';

const userSchema = new mongoose.Schema({

  email: { type: String },
  password: { type: String },

},
{
  timestamps: true,
});

export default mongoose.model('user', userSchema);