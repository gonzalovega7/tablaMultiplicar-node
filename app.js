// con el .argv al final, le estamos diciendo que del archivo yargs.js solo extraiga argv y no TODO (en este caso no hay mucho)
const argv = require('./config/yargs').argv;
const colors = require('colors');



// destructuracion
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];



switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}

console.log(argv);

// console.log(argv.base);
// console.log('Limite ', argv.limite);




// let parametro = argv[2];
// let base = parametro.split('=')[1];