
let myFavorites = [];

const postFav = (req, res) => {
    const { id, name, status, species, gender, origin, image } = req.body;
    const character = { id, name, status, species, gender, origin, image };
    myFavorites.push(character);
    return res
        .status(200)
        .json(myFavorites);
}

const deleteFav = (req, res) => {
    const { id } = req.params;
    try {
        if (!id) {
            return res.status(404).json({ message: "Id not found" });
        }
        const newFavorites = myFavorites.filter((char) => char.id !== Number(id));
        myFavorites = newFavorites;
        res.status(200).json(myFavorites);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

module.exports = {postFav, deleteFav}