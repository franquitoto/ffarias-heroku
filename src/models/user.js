import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import { number } from 'yargs';

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true},
  age: { type: Number, required: true},
  celphone: { type: String, required: true},
  admin: {type: Boolean, default: false},
});
UserSchema.pre('save', async function (next) {
  const user = this;
  const hash = await bcrypt.hash(user.password, 10);

  this.password = hash;
  next();
});

UserSchema.methods.isValidPassword = async function (password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);
  return compare;
};

export const UserModel = model('user', UserSchema);
