/* ==========================================================================
   NOVA TECHNOLOGIES - BACKEND SERVER MAIN (server.js)
   ========================================================================== */
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Cargar variables de entorno del archivo .env
dotenv.config();

// Conectar a la base de datos de MongoDB Atlas
connectDB();

const app = express();

// Middlewares globales
app.use(express.json());
app.use(cors());

// Rutas de la API
app.use('/api/auth', require('./routes/authRoutes'));

// Ruta de prueba raíz
app.get('/', (req, res) => {
  res.send('API de Nova Technologies funcionando correctamente 🚀');
});

// Definir puerto del servidor
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 Servidor corriendo en el puerto ${PORT}`);
});