const express = require ('express');
const app = express();


app.get('/',(req,res) => {
    const name = req.query.nombre;
    if (name === undefined || name === null) return res.send('<h1>Hola desconocido!</h1>');
    return res.send(`<h1>Hola ${name}!</h1>`);
});

app.get('*', (req,res) => {
    res.send('<h1>Hola desconocido!</h1>')
});

app.listen (3000, () => console.log('lisrening on port 3000'))