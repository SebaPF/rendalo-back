const mongoose = require('mongoose');

const pruebaScheama = new mongoose.Schema(
    {
      nombre: {
        type: String,
        trim: true,
        required: true,
      },
      
      empresa: {
        type: String,
        trim: true,
      },

      comentarios: {
          type: String,
      }
    },
    {
      timestamps: true
    }
  );
  module.exports = mongoose.model('Prueba', pruebaScheama);
