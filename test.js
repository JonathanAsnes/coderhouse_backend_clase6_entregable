const Contenedor = require('./Contenedor.js');
console.clear();

const productos = new Contenedor('productos.txt');

//Pruebo el método save
const item1 = {
     titulo: 'Xiaomi Redmi 9A Dual SIM 32 GB gris granito 2 GB RAM',
     precio: 29999,
     imagen: 'https://http2.mlstatic.com/D_NQ_NP_981867-MLA48770610134_012022-V.webp'
};

const item2 = {
    titulo: 'Xiaomi Redmi 10 Dual SIM 64 GB carbon gray 4 GB RAM',
    precio: 49999,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_729373-MLA48591993422_122021-V.webp'
};

const item3 = {
    titulo: 'Xiaomi Redmi Note 10 5G Dual SIM 128 GB gris grafito 4 GB RAM',
    precio: 59999,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_966955-MLA48579050616_122021-V.webp'
};

setTimeout(() => {productos.save(item1)}, 500);
setTimeout(() => {productos.save(item2)}, 1000);
setTimeout(() => {productos.save(item3)}, 1500);


//Pruebo el método getAll
//setTimeout(() => {productos.getAll()}, 2000);

//Pruebo el método getById
//setTimeout(() => {productos.getById(3)}, 2500);

//Pruebo el método deleteById
//setTimeout(() => {productos.deleteById(2)}, 3000);

//Pruebo el método deleteAll
//setTimeout(() => {productos.deleteAll()}, 3500);