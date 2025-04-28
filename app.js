//importo express
const express = require("express");
//assegno una funzione a una variabile
const app = express();
//assegno la porta
const port = 3000;

// indico ad express di trattare i body di delle richieste come json
app.use(express.json());

//asset statico
app.use(express.static("public"));

// importo le funzioni middleware

// middleware per gli errori
const errorsHandler = require('./middlewares/errorsHandler.js');
// middleware per le rotte non trovate
const notFound = require('./middlewares/notFound.js');

// utilizzo le funzioni middleware
app.use(errorsHandler);

app.use(notFound);

//importo e imposto la rotta per le operazioni CRUD di routers/posts
const postsRouter = require("./routers/posts_R.js");
app.use("/posts", postsRouter);

// rotta madre
app.get("/", (req, res)=>{
    res.send("Server del mio blog");
});

//il server rimane in ascolto
app.listen(port, ()=>{
    console.log(`Il server è in ascolto alla porta ${port}`);
});