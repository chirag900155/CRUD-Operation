import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    phone: String,
    email: String
});

// Apply the auto-increment plugin to your schema
autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');

userSchema.index({ username: 1 }, { unique: true });

const User = mongoose.model('user', userSchema);

export default User;