/* ==========================================================================
   NOVA TECHNOLOGIES - MODELO DE USUARIO (Mongoose)
   ========================================================================== */
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['client', 'tech', 'admin'], 
    default: 'client' 
  },
  phone: { type: String, default: '' },
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);