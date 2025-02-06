// mi salvo in una costante l'array dei post
const dataPosts = require('../data/posts');

// index 
// GET visualizzo tutti gli elementi posts/
function index (req, res) {
    // res.send('Lista dei post');
    res.json(dataPosts);
    
}

// show
// GET visualizzo un unico elemento posts/:id
function show (req, res) {
    // res.send('Dettagli del post con codice numero ' + req.params.id);
    
    // salviamo in una costante il valore dell'id, forzandolo in un numero
    const id = parseInt(req.params.id);
    
    
    // cerco attraverso il metodo find la proprietà id dell'oggetto dell'array
    const postId = dataPosts.find( postId => postId.id === id);
    
    // restituisco il formato JSON
    res.json(postId)
};


// store
// POST creo un nuovo elemento posts/
function store (req, res) {
    res.send('Creazione nuovo post');
    
}


// update
// PUT modifico l'intero elemento posts/:id
function update (req, res) {
    res.send('Modifica del post con codice numero ' + req.params.id);
}

// modify
//  PATCH modifico parzialmente l'elemento posts/:id
function modify(req, res) {
    res.send('Modifica parziale del post  con codice numero ' + req.params.id);
}


// delete
//  DELETE rimuovo un elemento posts/:id
function destroy (req, res) {
    res.send('Eliminazione del post  con codice numero ' + req.params.id);
}


module.exports = {index, show, store, update, modify, destroy}
