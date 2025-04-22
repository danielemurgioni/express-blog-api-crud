// importo express
const express = require("express");

// importo la classe router
const routers = express.Router();

//index
routers.get("/", (req, res)=>{
    res.send("Lista dei post")
})

//show
routers.get("/:id", (req, res)=>{
    res.send(`Dettaglio del post: ${req.params.id}`)
})

//store
routers.post("/", (req, res)=>{
    res.send("Inserimento nuovo post")
})

//update
routers.put("/:id", (req, res)=>{
    res.send(`Modifica totale del post: ${req.params.id}`)
})

//modify    
routers.patch("/:id", (req, res)=>{
    res.send(`Modifica parziale del post: ${req.params.id}`)
})

//destroy
routers.delete("/:id", (req, res)=>{
    res.send(`Cancellazione del post: ${req.params.id}`)
})

module.exports = routers;