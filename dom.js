// DOM
// Ejercicio 1
// 1) Formulario con campos: Nombre, apellido y edad
// 2) Boton de enviar formulario: eventos Submit
// 3)Mostrar datos por pantalla


// Ejercicio 2

// Al formulario anterior agregarle un input para ingresar un producto, precio y fecha de entrega
// Luego mostrar por pantalla un mensaje coherente en el que figure toda la información ingresada.

// Ejercicio 3

// Crear un convertidor de valores (por ejemplo de pesos a dolares, Centimetros a metros, por ejemplo)


// Ejercicio 4

// Crear un formulario para ingresar datos de un viaje (Destino, cantidad de personas, cantidad de km, precio de la nafta, consumo del auto en km/l, costo de la noche de estadia por persona , cantidad de dias que desea viajar)

// Por pantalla mostrar los resultados del viaje seleccionado. Utilizar funciones para cada cálculo por separado (si desean, pueden imrimir cada resultado individualmente)



//Primer ejercicio
const form = document.getElementById('formulario').addEventListener('submit', function(e){
const nombre = document.getElementById('nombre').value
const apellido = document.getElementById('apellido').value
const edad = document.getElementById('edad').value;
const productos = document.getElementById('productos').value;
const precio = document.getElementById('Precio').value;
const fecha = document.getElementById('fecha').value;
e.preventDefault();
const container = document.querySelector('.contenido');


  
const p = document.createElement('p')
// const name = document.createElement('h4')
// const surname = document.createElement('h4')
// const age = document.createElement('h4')
// const product = document.createElement('h4')
// const price = document.createElement('h4')
// const date = document.createElement('h4')

p.innerHTML = `Nombre:${nombre}, Apellido:${apellido}, Edad:${edad}, Productos:${productos}, Precio:${precio}, Fecha:${fecha}`;

container.appendChild(p);
})

//Ejercicio 3
const form2 = document.getElementById('formuu').addEventListener('submit', function(a){
    const pesos = Number (document.getElementById('pesos').value);
    const peso = (pesos*280)
    a.preventDefault();
    const cuenta = document.querySelector('.calculo')
    const calculos = document.createElement('p')
    calculos.innerHTML=`La conversion de pesos a dolares es:${peso}`
    console.log(calculos)
    cuenta.appendChild(calculos)
})

//Ejercicio 4
const form3 = document.getElementById('formu3').addEventListener('submit', function (f) {

    const destino = document.getElementById('destino').value
    const personas = Number(document.getElementById('personas').value)
    const km = Number(document.getElementById('km').value)
    const nafta = Number(document.getElementById('nafta').value)
    const consumo = Number(document.getElementById('consumo').value)
    const noche = Number(document.getElementById('noche').value)
    const dias = Number(document.getElementById('dias').value)
    f.preventDefault();

    const nose = document.querySelector('.viajes');

    const viaje = document.createElement('viaje')
    viaje.innerHTML = ` El destino es: ${destino}, La Cantidad de Personas: ${personas}, Los Km son: ${km}, El Precio de la Nafta: ${nafta}, Precio por noche (x persona): ${noche}, Dias de Viaje: ${dias}`;

    let combustibles = gastoNafta(km, consumo, nafta);
    let estadias = gastoNoches(personas, noche, dias);

    gastoNafta.innerHTML = `El gasto en nafta es: $` + combustibles
    gastoNoches.innerHTML = `El gasto por noche: $` + estadias

    nose.appendChild(viaje)
});

//Funciones
function gastoNafta(km, consumo, nafta){
    let distancia = km / consumo;
    let result = distancia * nafta;

    return result;
}

function gastoNoches(personas, costo, dias){
    result = (personas * costo) * dias;

    return result;
}