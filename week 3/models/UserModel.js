import { Schema, model, Types } from 'mongoose';

// Cart schema
const cartSchema = new Schema({
  product: {
    type: Types.ObjectId,
    ref: "Product" // Ensure this matches your product model name
  },
  count: {
    type: Number,
    default: 1
  }
});

// User schema
const userSchema = new Schema({
  username: { type: String, required: [true, "username is mandatory"], minlength: 8 },
  password: { type: String, required: [true, "password is mandatory"], minlength: 8 },
  email:    { type: String, required: [true, "email is mandatory"], unique: true },
  age:      { type: Number },
  cart:     [cartSchema]
}, 
{ 
  versionKey: false,
  timestamps: true
});

// Generate UserModel
export const userModel = model("User", userSchema);