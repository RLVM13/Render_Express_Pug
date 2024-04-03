
const fetchFilm = require('../public/js/fetch');

// READ
const getFilm = async (req, res) => {
        try {
            const titulo = req.params.title; //
            // NO QUEREMOS QUE SAQUE LOS CAMPOS "ID" NI "V" QUE SON CAMPOS QUE VIENEN POR DEFECTO
            let film = await fetchFilm(titulo); //{}
            res.status(200).json(film); // Respuesta de la API para 1 producto
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(400).json({msj:`ERROR: ${error.stack}`});
        }
}

module.exports = {
    getFilm
};