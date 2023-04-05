const http = require("http");
const data = require("./utils/data")

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const { url } = req;
    if(url.includes("/rickandmorty/character")){
        const parts = url.split('/');
        const idString = parts[parts.length - 1];
        const id = parseInt(idString);

        const character = data.find((char) => char.id === id)
        console.log(character)
        if (character) {
            const json = JSON.stringify(character); 
            res.writeHead(200, { "Content-Type": 'application/json' });
            return res.end(json)
        } else {
            res.writeHead(404,{ "Content-Type": 'application/json' })
            return res.end(JSON.stringify({ error: "Character not found" }))
        }
    }

}).listen(3001, 'localhost');