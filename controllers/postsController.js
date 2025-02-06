
// index 
// GET visualizzo tutti gli elementi posts/
function index (req, res) {
    res.send('Lista dei post');
 
}

// show
// GET visualizzo un unico elemento posts/:id
function show (req, res) {
    res.send('Dettagli del post con codice numero ' + req.params.id);
}


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
