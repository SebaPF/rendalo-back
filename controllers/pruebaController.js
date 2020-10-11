const Prueba = require('../models/Prueba');

exports.obtenerPruebas = async (req, res) => {
    try {
        const pruebas = await Prueba.find({});
        res.json({ pruebas }); // Devuelve 'status(200)' //
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.crearPrueba = async (req, res) => {
    try {
       const { nombre, empresa, comentarios} = req.body;

        const prueba = new Prueba({
            nombre: nombre,
            empresa: empresa,
            comentarios: comentarios
        });        

        const nuevaPrueba = await prueba.save();
        res.status(201).send({ message: 'Prueba creada correctamente...', data: nuevaPrueba }); // Devuelve 'status(201)' //

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}