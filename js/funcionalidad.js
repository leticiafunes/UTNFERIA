/*Toggle*/

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector ('.nav-menu');
const menufilter = document.querySelector('#mobile-filter-menu');
const menuLinksfilter= document.querySelector ('.nav-filter-menu');


menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
   
});



menufilter.addEventListener('click', function() {
  menufilter.classList.toggle('is-active');
  menuLinksfilter.classList.toggle('active');

});






/*Carrito*/


let cantidad_productos_carrito;
let carrito_con_productos;
let total;
let monto_total;

leerStorage();


function mostrarCantidad () {

  let cantidad = document.getElementById("label-cant-productos");
  cantidad.innerHTML =  "Cant. Prod: " +  cantidad_productos_carrito + " - Total: $ " + total;
}

mostrarCantidad ();



function agregarProducto (id_producto, producto_nombre, producto_precio) {
 
  const producto = traer_producto (id_producto);
 
  
  if (producto) {

    producto.cantidad ++;
   
    
  }
  else {

    const producto_nuevo = {
      id_producto : id_producto,
      nombre: producto_nombre,
      precio: producto_precio,
      cantidad: 1
    }

    if (carrito_con_productos) {

      carrito_con_productos.push (producto_nuevo);
    } 
    else {
      carrito_con_productos=[];
      carrito_con_productos.push (producto_nuevo);
    }
  
  }

  cantidad_productos_carrito++;
 
  const precio = parseInt(producto_precio);
 
  monto_total = monto_total +  precio;

  localStorage.setItem ("carrito_storage", JSON.stringify(carrito_con_productos));
  localStorage.setItem ("cant_productos_storage", cantidad_productos_carrito.toString());
  localStorage.setItem ("total_storage", monto_total.toString());
  const cant_produ= document.getElementById("label-cant-productos");

  cant_produ.innerHTML =  "Cant. Prod: " +  cantidad_productos_carrito + " - Total: " + monto_total;
  
}



function traer_producto (id_prod) {
  let producto;
  if (carrito_con_productos) {
     producto = carrito_con_productos.find (item => {
        return item.id_producto === id_prod; 
   });
  }
  else {
    producto = null;
  }

  return producto;
 

}

function actualizarStorage () {

  
  localStorage.setItem ("carrito_storage", JSON.stringify(carrito));
  localStorage.setItem ("cant_productos_storage", cant_productos.toString());
  localStorage.setItem ("total_storage", monto_total.toString());


}

/*Cuando aun no agrega artículos al carrito*/ 
/*Si sigue comprando luego de ir a la página del carrito retorno el valor*/ 


function leerStorage (carrito) {

  cantidad_productos_carrito = JSON.parse(localStorage.getItem ("cant_productos_storage"));
  carrito_con_productos = JSON.parse(localStorage.getItem ("carrito_storage"));
  total = JSON.parse(localStorage.getItem ("total_storage"));
  
  if (!(cantidad_productos_carrito)) {
    cantidad_productos_carrito = 0;
  }
  if (!( carrito_con_productos)) {
    carrito_con_productos = [];
  }
  if (!(total)) {
    total = 0;
    monto_total = parseInt(total);
  }
}

