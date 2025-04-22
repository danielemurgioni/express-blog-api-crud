// importo express
const express = require("express");

// importo la classe router
const routers = express.Router();

// importo il controller
const postController = require("../controllers/postController.js");

//index
routers.get("/", postController.index);

//show
routers.get("/:id", postController.show);

//store
routers.post("/", postController.store);

//update
routers.put("/:id", postController.update);

//modify    
routers.patch("/:id", postController.modify);

//destroy
routers.delete("/:id", postController.destroy);

module.exports = routers;