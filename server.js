
const express = require('express')
const hbs = require("hbs");

const app = express();

app.use(express.static('assets')); 
app.set("view engine", "hbs")


app.get('/', (req, res) => {
    res.render('calculadora'); 
});

/* app.post('/', (req, res) => {
exportacion de bd
})
 */

app.listen(3000, () => {
    console.log(`Servidor corriendo en http://localhost:3000`);
});