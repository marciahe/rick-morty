const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req, res) => {
    try {
        // const {id} = req.params;
        const char = await axios.get(`${URL}${req.params.id}`)
        const { id, name, gender, species, origin, image, status } = char.data;
        res.status(200).json({ id, name, gender, species, origin, image, status });
    } catch (error) {
        if (error.response.status === 404) {
            res.status(404).send('Not found')
        } else {
            res.status(500).send(error.message);
        }
    }

}


module.exports = getCharById;