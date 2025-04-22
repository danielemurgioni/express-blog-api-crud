//importo i data dei posts
const postsData = require("../data/posts_D.js");

// definisco la funzione index
function index(req, res){
    //restituisco sottoforma di file json
    res.json(postsData);
};

// definisco la funzione show
function show(req, res){
    //recupero l'id dall'url
    const id = parseInt(req.params.id);
    //cerchiamo il post tramite l'id
    const post = postsData.find(post => post.id === id);
    //restituisco sottoforma di file json
    res.json(post);
};

// definisco la funzione store
function store(req, res){
    res.send("Inserimento nuovo post")
};

// definisco la funzione update
function update(req, res){
    res.send(`Modifica totale del post: ${req.params.id}`)
};

// definisco la funzione modify
function modify(req, res){
    res.send(`Modifica parziale del post: ${req.params.id}`)
};

// definisco la funzione destroy
function destroy(req, res){
    //recupero l'id dall'url
    const id = parseInt(req.params.id);
    //cerchiamo il post tramite l'id
    const post = postsData.find(post => post.id === id);
    //elimino quel post
    postsData.splice(postsData.indexOf(post), 1);
    
    //mostro quale l'id del post cancellato
    res.send(`Cancellazione del post: ${req.params.id}`);
    //mostro la lista aggiornata nel terminale
    console.log(postsData);
};

//esporto i metodi come proprietà di un oggetto
module.exports = {index, show, store, update, modify, destroy}