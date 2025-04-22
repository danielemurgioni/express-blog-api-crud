// definisco la funzione index
function index(req, res){
    res.send("Lista dei post")
};

// definisco la funzione show
function show(req, res){
    res.send(`Dettaglio del post: ${req.params.id}`)
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
    res.send(`Cancellazione del post: ${req.params.id}`)
};

//esporto i metodi come proprietà di un oggetto
module.exports = {index, show, store, update, modify, destroy}