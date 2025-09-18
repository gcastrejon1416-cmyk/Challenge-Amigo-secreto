// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// 1. Array para almacenar los nombres
let amigos = [];

// 2. Función para agregar amigos
function agregarAmigo() {
  let input = document.getElementById("amigo"); // tomamos el campo de texto
  let nombre = input.value; // obtenemos el valor

  // Validar que no esté vacío
  if (nombre === "") {
    alert("inserte un nombre, por favor .");
    return;
  }

  // Guardar en el array
  amigos[amigos.length] = nombre;

  // Limpiar el campo de texto
  input.value = "";

  // Mostrar la lista actualizada
  mostrarLista();
}

// 3. Función para mostrar la lista de amigos
function mostrarLista() {
  let lista = document.getElementById("listaAmigos");

  // Limpiar lista antes de dibujar
  lista.innerHTML = "";

  // Recorrer el array y agregar cada nombre como <li>
  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += "<li>" + amigos[i] + "</li>";
  }
}

// 4. Función para sortear un amigo secreto
function sortearAmigo() {
  // Validar que haya amigos
  if (amigos.length === 0) {
    alert("No hay amigos para sortear");
    return;
  }

  // Seleccionar índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener nombre correspondiente
  let nombreSorteado = amigos[indiceAleatorio];

  // Mostrar resultado en pantalla
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "<li>El amigo secreto es: " + nombreSorteado + "</li>";
}
