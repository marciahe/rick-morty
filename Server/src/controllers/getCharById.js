const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = (req, res) => {
    const {id} = req.params;

    axios.get(`${URL}${id}`)
        .then((response) => {
            const { id, name, gender, species, origin, image, status } = response.data;
            res.status(200).json({ id, name, gender, species, origin, image, status });
        })
        .catch((error) => {
            if (error.response.status === 404) {
                res.status(404).send('Not found')
            } else {
                res.status(500).send(error.message);
            }
        });
}

module.exports = getCharById;