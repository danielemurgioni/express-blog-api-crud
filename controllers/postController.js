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
    // visualizzo sul terminale il contenuto del nuovo post
    console.log(req.body)

    //Creiamo un nuovo id incrementando l'ultimo id
    const newID = postsData[postsData.length - 1].id + 1;
    console.log(newID);

    //Creiamo un nuovo oggetto
    const newPost = {
        id: newID,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    };

    //aggiungiamo il nuovo post all'array di oggetti postsData
    postsData.push(newPost);
    // verifico nel terminale
    console.log(postsData);

    //status per il post creato
    res.status(201);
    //mostro il nuovo post su postman in formato json
    res.json(newPost);
};

// definisco la funzione update
function update(req, res){
    //recupero l'id dall'url
    const id = parseInt(req.params.id);

    //cerco l'id del post da aggiornare
    const post = postsData.find(post => post.id === id);

    //aggiornamento del post
    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    //mostro il post modificato su postman in formato json
    res.json(post);
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
    
    //mostro la lista aggiornata nel terminale
    console.log(postsData);

    //controlla se il post è ancora presente
    res.sendStatus(204);
};

//esporto i metodi come proprietà di un oggetto
module.exports = {index, show, store, update, modify, destroy}