const Contenedor = require('./Contenedor.js');
const express = require('express');

const puerto = 8080;
const app = express();
const servidor = app.listen(process.env.PORT || puerto, () => console.log(`Server listening on PORT ${puerto}`));
servidor.on('error', err => console.log(`Error: ${err}`));

const productos = new Contenedor('productos.txt');

app.get('/productos', async (req, res) => {
    const mostrarProductos = await productos.getAll();
    res.send(mostrarProductos);
})

app.get('/productoRandom', async (req, res) => {
    const p = await productos.getAll();
    const numeroRandom = Math.floor(Math.random() * p.length);
    res.send(p[numeroRandom]);
})