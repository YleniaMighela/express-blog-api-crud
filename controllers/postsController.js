// mi salvo in una costante l'array dei post
const dataPosts = require('../data/posts');

// index 
// GET visualizzo tutti gli elementi posts/
function index (req, res) {
    // res.send('Lista dei post');
    
    // gestione errore del Server
    // variabile;
    
    
    // inizialmente il posts filtrato sarà uguale a quello dell'array originale
    let filteredPosts = dataPosts;
    // successivamente se la richiesta contiene un filtro, filtriamo i post attraverso la proprietà tag
    if (req.query.tags) {
        filteredPosts = dataPosts.filter(
            post => post.tags.includes(req.query.tags)                                         
        );
    }    
    // restituiamo la variabile filteredPosts
    res.json(filteredPosts);    
    
    
    
}

// show
// GET visualizzo un unico elemento posts/:id
function show (req, res) {
    // res.send('Dettagli del post con codice numero ' + req.params.id);
    
    // salviamo in una costante il valore dell'id, forzandolo in un numero
    const id = parseInt(req.params.id);
    
    
    // cerco attraverso il metodo find la proprietà id dell'oggetto dell'array
    const postId = dataPosts.find( postId => postId.id === id);
    
    // Facciamo il controllo
    if (!postId) {
        
        // ritorno lo stato di errore 404, non trovato
        res.status(404);
        
        // ritorno un messaggio di errore (formato json)
        return res.json({
            error: "Not Found",
            message: "Pizza non trovata"
        })
    }
    
    // restituisco il formato JSON
    res.json(postId)
};


// store
// POST creo un nuovo elemento posts/
function store (req, res) {
    // console.log(req.body);
    // res.send('Creazione nuovo post');
    
    // Creo un nuovo id incrementando l'ultimo id presente dell'array
    const newId = dataPosts[dataPosts.length - 1].id + 1;
    
    // Creo un nuovo oggetto posts
    const newPosts = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }
    
    // Aggiungo il nuovo post all'array
    dataPosts.push(newPosts);
    
    // controlliamo
    console.log(dataPosts);
    
    // Restituisco lo status corretto e l'oggetto appena creato
    res.status(201);
    res.json(newPosts);
}  





// update
// PUT modifico l'intero elemento posts/:id
function update (req, res) {
    // res.send('Modifica del post con codice numero ' + req.params.id);
    
    // salviamo in una costante il valore dell'id, forzandolo in un numero
    const id = parseInt(req.params.id);
    
    
    // cerco attraverso il metodo find la proprietà id dell'oggetto dell'array
    const postId = dataPosts.find( postId => postId.id === id);
    
    // Facciamo il controllo
    if (!postId) {
        
        // ritorno lo stato di errore 404, non trovato
        res.status(404);
        
        // ritorno un messaggio di errore (formato json)
        return res.json({
            error: "Not Found",
            message: "Pizza non trovata"
        })
    }
    
    // aggiorno i valori 
    postId.title = req.body.title;
    postId.content =  req.body.content;
    postId.image =  req.body.image;
    postId.tags =  req.body.tags;
    
    
    // stampo in console
    console.log(dataPosts);
    
    
    // restituisco in formato JSON
    res.json(postId);
    
    
    
}

// modify
//  PATCH modifico parzialmente l'elemento posts/:id
function modify(req, res) {
    // res.send('Modifica parziale del post  con codice numero ' + req.params.id);
    
    
    // salviamo in una costante il valore dell'id, forzandolo in un numero
    const id = parseInt(req.params.id);
    
    
    // cerco attraverso il metodo find la proprietà id dell'oggetto dell'array
    const postId = dataPosts.find( postId => postId.id === id);
    
    // Facciamo il controllo
    if (!postId) {
        
        // ritorno lo stato di errore 404, non trovato
        res.status(404);
        
        // ritorno un messaggio di errore (formato json)
        return res.json({
            error: "Not Found",
            message: "Pizza non trovata"
        })
    }
    
    
    //  modifico il titolo del post trovato
    if (req.body.title) {
        postId.title = req.body.title;
    } else {
        postId.title = postId.title;
    }
    
    // stampo in console
    console.log(dataPosts);
    // restituisco in formato JSON
    res.json(postId);
    
}


// delete
//  DELETE rimuovo un elemento posts/:id
function destroy (req, res) {
    // res.send('Eliminazione del post  con codice numero ' + req.params.id);
    
    // salviamo in una costante il valore dell'id, forzandolo in un numero
    const id = parseInt(req.params.id);
    
    
    // cerco attraverso il metodo find la proprietà id dell'oggetto dell'array
    const postId = dataPosts.find( postId => postId.id === id);
    
    // Facciamo il controllo
    if (!postId) {
        
        // ritorno lo stato di errore 404, non trovato
        res.status(404);
        
        // ritorno un messaggio di errore (formato json)
        return res.json({
            error: "Not Found",
            message: "Pizza non trovata"
        })
    }
    
    
    // attraverso il metodo splice elimino l'elemento indicato
    dataPosts.splice(dataPosts.indexOf(postId), 1);
    
    
    // ritorno della risposta su postman della cancellazione avvenuta
    res.sendStatus(204);
    
    
    // controllo sul terminale l'array aggiornata
    console.log(dataPosts);
    
    
}


module.exports = {index, show, store, update, modify, destroy}
