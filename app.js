// // requireds
// const fs = require('fs');
// // const fs = require('express');
// // const fs = require('./fs');

// let base = 4;
// let data = '';

// for (let i = 1; i < 11; i++) {
//     data += `${ base } * ${ i } = ${ base * i }\n`;
// }

// // fs.writeFile('tabla-2.txt', data, (err) => {
// //     if (err) throw err;
// //     console.log('El archivo tabla-2.txt ha sido creado!');
// // });

// //se puede asignar un nombre de archivo que no sea fijo
// fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${ base }.txt ha sido creado!`);
// });

const argv = require('./config/yargs').argv;

const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite)
            .catch(e => console.log(e));
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            //.then(archivo => console.log('Archivo creado: ', colors.green(archivo)))
            .then(archivo => console.log(`Archivo creado: ${ archivo.green }`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}


// let base = 1;

// console.log(process.argv);
// let argv2 = process.argv;

// console.log('Limite', argv.limite);


// let parametro = argv[2];
// let base = parametro.split('=')[1]

// console.log(base);

// crearArchivo(base)
//     .then(archivo => console.log(`Arhcivo creado: ${ archivo }`))
//     .catch(e => console.log(e));