const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  deliveries: [
    {
      deliveryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Delivery'
      },
      orderedItems:{
        type: [
          {
              name: String,
              price: Number,
              quantity: Number,
              weight: Number
          }
        ]
      },
      deliveryAddress: {
        type: String,
      },
      deliveryDate: {
        type: Date,
      },
      deliveryService: {
        type: String,
      },
      deliveryStatus: {
        type: String,
      }
    }
  ],
  role: { type: String, enum: ['buyer', 'seller', 'admin'], required: true },
});

userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }
  next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  const user = this;
  return bcrypt.compare(candidatePassword, user.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
