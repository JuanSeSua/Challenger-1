// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// AMIGO SECRETO
 
let numeroSecreto = 0;
let listaAmigoSecreto = [];
let numeroMaximo = 100;

// Función para agregar amigos al array y mostrar la lista
function agregarAmigo() {
    // Obtener el nombre ingresado
    let amigo = document.getElementById("amigo").value.trim();

    // Verificar si el nombre está vacío
    if (!amigo) {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el amigo al array
    listaAmigoSecreto.push(amigo);

    // Limpiar el input
    document.getElementById("amigo").value = '';

    // Mostrar la lista de amigos en el HTML
    mostrarListaAmigos();
}

// Función para mostrar la lista de amigos en el HTML
function mostrarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpiar la lista actual antes de actualizar
    listaAmigos.innerHTML = '';

    // Agregar cada amigo a la lista en el HTML usando un bucle tradicional
    for (let i = 0; i < listaAmigoSecreto.length; i++) {
        const li = document.createElement("li");
        li.textContent = listaAmigoSecreto[i];
        listaAmigos.appendChild(li);
    }
}

// Función para sortear amigo secreto
function sortearAmigo() {
    if (listaAmigoSecreto.length < 2) {
        alert("Necesitas al menos 2 amigos para sortear.");
        return;
    }

    // Crear una copia del array de amigos para el sorteo
    let listaAmigosPorSortear = [...listaAmigoSecreto];

    // Array para almacenar los resultados del sorteo
    let resultados = [];

    // Realizar el sorteo
    for (let i = 0; i < listaAmigoSecreto.length; i++) {
        // Obtener un amigo aleatorio y eliminarlo del array para evitar repeticiones
        let indexAleatorio = Math.floor(Math.random() * listaAmigosPorSortear.length);
        let amigoSecreto = listaAmigosPorSortear.splice(indexAleatorio, 1)[0];

        // Almacenar el resultado del sorteo
        resultados.push(listaAmigoSecreto[i] + " -> " + amigoSecreto);
    }

    // Mostrar los resultados en el HTML
    mostrarResultados(resultados);
}

// Función para mostrar los resultados del sorteo
function mostrarResultados(resultados) {
    const resultadoDiv = document.getElementById("resultado");

    // Limpiar resultados previos
    resultadoDiv.innerHTML = '';

    // Agregar cada resultado al HTML usando un bucle tradicional
    for (let i = 0; i < resultados.length; i++) {
        const li = document.createElement("li");
        li.textContent = resultados[i];
        resultadoDiv.appendChild(li);
    }
}