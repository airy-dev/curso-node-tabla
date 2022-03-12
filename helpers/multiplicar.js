const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar, hasta ) => {

    try {

        let salida = '';
        let consola = '';
    
        for (let index = 1; index <= hasta; index++) {
            salida += `${base} X ${index} = ${base * index}\n`;
            consola += `${base} ${ 'X'.green } ${index} ${'='.green} ${base * index}\n`;
        }

        if(listar){
            console.log('=================================='.green);
            console.log('              TABLA DEL '.green, colors.blue(base));
            console.log('=================================='.green);
        
            console.log(consola);            
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        //console.log(`tabla-${base}.txt creado`); 
        return `tabla-${base}.txt creado`;

    } catch (error) {
        throw error;
    }
}

module.exports = { crearArchivo };