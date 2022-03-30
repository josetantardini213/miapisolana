const express = require('express')
var web3 = require('@solana/web3.js');
var splToken = require('@solana/spl-token');
const app = express()

app.get("/solana", function(req, res) {



});
app.listen(3000, () => {
    console.log("El servidor esta escuchando peticiones en puerto 3000");

});