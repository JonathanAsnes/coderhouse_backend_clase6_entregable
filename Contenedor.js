const fs = require('fs');

class Contenedor {
    constructor(nombredelarchivo) {
        this.nombredelarchivo = nombredelarchivo;
        this.arreglo = [];
    }
    //Generar el ID
    async generateId() {
        try {
            this.arreglo = await this.getAll() || [];
            let maxId = this.arreglo.length;
            
            this.arreglo.map(elemento => {
                elemento.id > maxId ? maxId = elemento.id : maxId
            })
            return maxId + 1;
        }   catch (error) {
            console.log(error);
        }
    }
    //Guarda un objeto
    async save(objetoguardado) {
        try {
            const readFile = await this.getAll();
            if (!readFile) {
                objetoguardado.id = await this.generateId();
                this.arreglo.push(objetoguardado);
                fs.promises.writeFile(this.nombredelarchivo, JSON.stringify(this.arreglo, null, 2));
                return objetoguardado.id;
            }
            this.arreglo = readFile;
            objetoguardado.id = await this.generateId();
            this.arreglo.push(objetoguardado);
            fs.promises.writeFile(this.nombredelarchivo, JSON.stringify(this.arreglo, null, 2));
            return objetoguardado.id;
        }   catch (error) {
            console.log(error);
        }
    }
    
    //Devuelve un array con los objetos presentes en el archivo
    async getAll() {
        try {
            const arreglo = await fs.promises.readFile(this.nombredelarchivo, 'utf-8');
            const arregloParsed = JSON.parse(arreglo);
            console.log(`Obteniendo toda la lista de celulares:`);
            return arregloParsed;
        }   catch (error) {
            console.log(error);
        }
    }
        //Devuelve el objeto con el ID buscado
            async getById(id) {
        try {
            this.arreglo = await this.getAll();
            const busqueda = this.arreglo.find(elemento => elemento.id === Number(id));
            console.log(`El Celular es:`, busqueda);
            return busqueda ? busqueda : null;
    }       catch (error) {
            console.log(error);
    }
}

    //Elimina del archivo el objeto con el ID buscado
    async deleteById(id) {
        try {
            this.arreglo = await this.getAll();
            this.arreglo = this.arreglo.filter(el => el.id != Number(id));
            fs.promises.writeFile(this.nombredelarchivo, JSON.stringify(this.arreglo, null, 2));
            console.log(`Eliminando celular definido`);
        }   catch (error) {
            console.log(error);
        }
    }
    //Elimina todos los objetos guardados en el archivo
    async deleteAll() {
        try {
            this.arreglo = await this.getAll();
            this.arreglo = [];
            fs.promises.writeFile(this.nombredelarchivo, JSON.stringify(this.arreglo, null, 2));
            console.log(`Eliminando todos los celulares de la lista`);
            } catch (error) {
            console.log(error);
        }
    }
}
module.exports = Contenedor;