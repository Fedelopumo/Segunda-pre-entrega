class Juegos {

    constructor(titulo, desarrollador, anio, genero, valoracion, id) {
        this.titulo = titulo;
        this.desarrollador = desarrollador;
        this.anio = parseInt(anio);
        this.genero = genero;
        this.valoracion = parseInt(valoracion);
        this.id = id;
    }

    asignarId(array) {
        this.id = array.length;
    }

    valorar(valoracion) {
        this.valoracion = valoracion;
    }


}

const juegos = [
    new Juegos('Valheim', 'Iron Gate AB', 2021, 'Mundo abierto', 8, 1),
    new Juegos('Valorant', 'Riot Games', 2020, 'Shooter', 9, 2),
    new Juegos('The Witcher 3: Wild Hunt', 'CD Projekt RED', 2015, 'Mundo abierto', 9, 3),
    new Juegos('The Elder Scrolls V: Skyrim', 'Bethesda Game Studios', 2011, 'RPG', 8, 4),
    new Juegos('Red Dead Redemption 2', 'Rockstar Games', 2019, 'Aventura de acción', 9, 5),
    new Juegos('Minecraft', 'Mojang', 2011, 'Construcción', 7, 6),
    new Juegos('Diablo III', 'Blizzard Entertainment', 2012, 'RPG', 8, 7)
]

console.log(Juegos);



let continuar = true;

while (continuar) {
    let ingreso = prompt('Ingresa los datos del juego: titulo, desarrollador, año, género, puntaje de 1 a 10, separados por una barra diagonal (/). Ingresa X para finalizar');

    if (ingreso.toUpperCase() == 'X') {
        continuar = false;
        break;
    }

    let datos = ingreso.split('/');
    const Juegos = new Libro(datos[0], datos[1], datos[2], datos[3], datos[4]);

    juegos.push(Juegos);

    juegos.asignarId(Juegos);

    console.log(Juegos)
}


let criterio = prompt('Elegí el criterio deseado:\n1 - Título (A a Z) \n2 - Título (Z a A)\n3 - Mejor a peor puntuado \n4 - Fecha de publicación (Más viejo a más nuevo)');

function ordenar(criterio, array) {
    let arrayOrdenado = array.slice(0);


    switch (criterio) {
        case '1':
            let nombreAscendente = arrayOrdenado.sort((a, b) => a.titulo.localeCompare(b.titulo));
            return nombreAscendente;
        case '2':
            let nombreDescendente = arrayOrdenado.sort((a, b) => b.titulo.localeCompare(a.titulo));
            return nombreDescendente;
        case '3':
            return arrayOrdenado.sort((a, b) => b.valoracion - a.valoracion);
        case '4':
            return arrayOrdenado.sort((a, b) => a.anio - b.anio);
        default:
            alert('No es un criterio válido');
            break;
    }
}



function crearStringResultado(array) {
    let info = '';

    array.forEach(elemento => {
        info += 'Título: ' + elemento.titulo + '\nDesarrollador: ' + elemento.desarrollador + '\nAño de publicación: ' + elemento.anio + '\nValoración: ' + elemento.valoracion + ' puntos.\n\n'
    })

    return info;
}



alert(crearStringResultado(ordenar(criterio, juegos)));




let desarrolladorElegido = prompt('Escribí el nombre del desarrollador para que te mostremos sus libros');

const filtrado = libros.filter((libro) => libro.desarrollador.toLowerCase().includes(desarrolladorElegido.toLowerCase()))




if (filtrado.length == 0) {
    alert('Lo sentimos. No encontramos coincidencias en nuestro catálogo');
} else {
    const imprimible = filtrado.map((libro) => libro.titulo);
    alert('Los juegos de nuestro catálogo, de desarrolladores que coinciden parcial o totalmente con esta búsqueda, son:\n- ' + imprimible.join('\n- '));
}


