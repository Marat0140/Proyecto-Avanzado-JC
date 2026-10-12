/* ==========================================================================
   NOVA TECHNOLOGIES - CONFIGURACIÓN DE BASE DE DATOS (MongoDB)
   ========================================================================== */
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // Opciones de conexión modernas para Mongoose
    });
    console.log(`✅ MongoDB Conectado con éxito: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error al conectar a MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;