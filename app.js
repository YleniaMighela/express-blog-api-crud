// console.log("ciao");
const express = require('express')
const app = express()
const port = 3000

// salvo i file delle rotte in una costante per importarli
const postsRouter = require('./routers/postsRouter');

// importo il middleware di gestione errore del server
const errorServer = require("./middlewares/errorServer");







// definisco la cartella per i file statici
app.use(express.static('public'));

// registro il body-parser 
app.use(express.json());


// definsco la prima rotta con un semplice messaggio
app.get('/', (req, res) => {

    res.send("Server del mio blog")
})



//  invoco la rotta
app.use("/posts", postsRouter)


// utilizzo middleware di gestione errore server
app.use(errorServer);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    });