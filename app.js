//importo express
const express = require("express");
//assegno una funzione a una variabile
const app = express();
//assegno la porta
const port = 3000;

//importo e imposto la rotta per le operazioni CRUD di post
const postsRouter = require("./routers/posts");
app.use("/posts", postsRouter);

// rotta madre
app.get("/", (req, res)=>{
    res.send("Server del mio blog");
});

//asset statico
app.use(express.static("public"));

//il server rimane in ascolto
app.listen(port, ()=>{
    console.log(`Il server è in ascolto alla porta ${port}`);
});