const http = require("http");
const fetch = require("node-fetch");
require("dotenv").config();

//create a server object
http.createServer(async(req, res) => {
    const response = await fetch(process.env.REACT_APP_GIPHY_URL + process.env.REACT_APP_GIPHY_TOKEN);
    const body = await response.json();
    
    res.writeHead(200, {'Content-Type':'application/json'})
    res.write(JSON.stringify(body));
    res.end();
}).listen(3000);