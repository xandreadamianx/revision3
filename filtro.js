// Array de productos, los organizamos bien por sus características. Intenté hacer una carpeta para los zapatos pero no me funcionó y los mantuve aquí
const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" },
];

// Seleccionamos los elementos de HTML que vamos a ocupar
const listaDeProductos = document.getElementById("lista-de-productos");
const inputBusqueda = document.getElementById("input-busqueda");
const botonFiltrar = document.getElementById("boton-filtrar");

// Función para ver los zapatos de la lista
function displayProductos(lista) {
  listaDeProductos.innerHTML = ""; // Limpiamos la lista antes de renderizar
  
  // Aquí vamos a iterar cada producto
  lista.forEach(producto => {
    const productoDiv = document.createElement("div");
    productoDiv.classList.add("producto");

    const titulo = document.createElement("p");
    titulo.classList.add("titulo");
    titulo.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute("src", producto.img);
    imagen.setAttribute("alt", producto.nombre);

    // Añadimos el título y la imagen al contenedor de producto
    productoDiv.appendChild(titulo);
    productoDiv.appendChild(imagen);
    listaDeProductos.appendChild(productoDiv);
  });
}

// Función de filtrado que toma el texto ingresado y devuelve productos coincidentes
function filtrarProductos() {
  const texto = inputBusqueda.value.toLowerCase(); // Convertimos el texto a minúsculas
  const productosFiltrados = productos.filter(
    item => item.tipo.includes(texto) || item.color.includes(texto)
  );
  displayProductos(productosFiltrados); // Mostramos los productos filtrados
}

// Arreglamos el event listener para el botón de filtrar
botonFiltrar.addEventListener("click", filtrarProductos);

// Aquí la lista completa de productos al cargar la página
displayProductos(productos);