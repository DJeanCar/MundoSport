import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/MundoSport', { useMongoClient: true });

export default mongoose;
