
let cantidad_productos_carrito;
let carrito_con_productos;
let monto_total;

leerStorage();


function leerStorage () {

  cantidad_productos_carrito = JSON.parse(localStorage.getItem ("cant_productos_storage"));
  carrito_con_productos = JSON.parse(localStorage.getItem ("carrito_storage"));
  monto_total = JSON.parse(localStorage.getItem ("total_storage"));

  
  if (!(cantidad_productos_carrito)) {
    cantidad_productos_carrito = 0;
  }
  if (!( carrito_con_productos)) {
    carrito_con_productos = [];
  }
  if (!(monto_total)) {
      monto_total = 0;
  }
}

mostrarProductosCarrito();

function mostrarProductosCarrito () {

 
  const contenedorProductos = document.getElementById("listado-productos");
  

  if (carrito_con_productos) {
      
      let listado = 'Productos del Carrito: ' + cantidad_productos_carrito  + "<br>";
      

      carrito_con_productos.forEach(function(elementoCarrito){
      listado += elementoCarrito.cantidad + " - "  + elementoCarrito.nombre + ' ' + ': $ ' + elementoCarrito.precio + "<br>";
  
      });
      
      contenedorProductos.innerHTML =   listado;
      console.log ('Carritoooo: ' + listado);
     
     
  }
  else {
    contenedorProductos.innerHTML = 'No  hay productos';
       
  }


  const label_total = document.getElementById("total");
  label_total.innerHTML = "Total pedido: $ " + monto_total ;

  const label_total_arriba = document.getElementById("totalarriba");
  label_total_arriba.innerHTML = "Total pedido: $ " + monto_total ;

}



function grabarPedido () {
  var resultado = window.confirm('Está seguro que quiere grabar este pedido?');
  if (resultado === true) {
    const usuario= "Leticia Funes";
    let pedidos=" ";
    pedidos = JSON.parse(localStorage.getItem ("pedidos_storage"));
              

    console.log ('pedidos: ' + pedidos);
    let timeNow = new Date();
    
    // Queremos que la hora se muestre siempre con 2 dígitos. Para eso, hacemos lo siguiente:
    // Usamos un ternario para saber si el número de digitos es menor que 2
    let hours = timeNow.getHours().toString().length < 2 ? "0" + timeNow.getHours() : timeNow.getHours();
    let minutes = timeNow.getMinutes().toString().length < 2 ? "0" + timeNow.getMinutes() : timeNow.getMinutes();
    let seconds = timeNow.getSeconds().toString().length < 2 ? "0" + timeNow.getSeconds() : timeNow.getSeconds();
    
    //  Concatenando variables | Usando ES5 
    // let mainTime = hours + ":" + minutes + ":" + seconds;
     //  Concatenando variables | Usando ES6: Template Strings (Template literals) 
    let mainTime = `${hours}:${minutes}:${seconds}`;


  
    const pedido_nuevo = {
      id_usuario : 1,
      id_pedido : timeNow+mainTime,
      cant_productos: cantidad_productos_carrito,
      carrito: carrito_con_productos,
      total_pedido: monto_total
    } 

    
    if (!(pedidos)) {
      pedidos = [];
    }
      
    pedidos.push(pedido_nuevo);
    localStorage.setItem ("pedidos_storage", JSON.stringify(pedidos));


    limpiarStorage ();


  } 
}

function limpiarStorage () {
  
  carrito_con_productos  = null;
  const cantidad_productos = 0;
  monto_total=0;

  localStorage.setItem ("carrito_storage", JSON.stringify(carrito_con_productos));
  localStorage.setItem ("cant_productos_storage", JSON.stringify(cantidad_productos));
  localStorage.setItem ("total_storage", JSON.stringify(0));

 
  const label_total = document.getElementById("total");
  label_total.innerHTML = "Total pedido: $ " + monto_total ;

  const label_total_arriba = document.getElementById("totalarriba");
  label_total_arriba.innerHTML = "Total pedido: $ " + monto_total ;
  
  mostrarProductosCarrito();

}




