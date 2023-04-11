
let myFavorites = [];

const postFav = (req, res) => {
    const newFav = req.body;
    myFavorites.push(newFav);

    return res
        .status(200)
        .json(myFavorites);
}

const deleteFav = (req, res) => {
    const deleteFav = parseInt(req.params.id);
    myFavorites.filter((char) => {char.id !== deleteFav})

    return res
        .status(200)
        .json(myFavorites);
}



module.exports = {postFav, deleteFav}