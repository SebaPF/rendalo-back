const express = require('express');
const conectarDB = require('./config/db');
const morgan = require('morgan');
const cors = require('cors');

require('dotenv').config({
    path: 'variables.env'
})

const app = express();
app.use(morgan('dev'));

conectarDB();

app.use(cors());

app.use(express.json({ extended: true }));

app.use("/api", require("./routes/prueba"));

const port = process.env.PORT || 4000;

app.listen(port, '0.0.0.0', () => {
    console.log(`app running on ... ${port}`);
});

module.exports = app;