
/*Toggle*/

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector ('.nav-menu');


menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
   
});



let cantidad_pedidos;
let pedidos;
let monto_total_pedidos;

leerStorage();


function leerStorage () {

  pedidos = JSON.parse(localStorage.getItem ("pedidos_storage"));
  
  
  if (!(pedidos)) {
    cantidad_pedidos = 0;
    monto_total_pedidos = 0;
  }
  
  
}

mostrarPedidos();

function mostrarPedidos () {

 
  const contenedorPedidos = document.getElementById("listado-pedidos");
  

  if (pedidos) {
      
      let listado = "";
      let cantidad=0;
      let total=0;
     
      pedidos.forEach(function(pedido){
        listado += " - Cant. productos: " + pedido.cant_productos + " - Monto del Pedido: "  +  pedido.total_pedido + "<br>";
        cantidad += 1; 
        total += pedido.total_pedido; 
      });
      
      listado = 'Pedidos: ' +  cantidad  + "<br>" + listado;
      contenedorPedidos.innerHTML =   listado;
      monto_total_pedidos = total;
    
  }
  else {
    contenedorPedidos.innerHTML = 'Aún no hay productos';
       
  }


  
  const label_total = document.getElementById("total");
  label_total.innerHTML = "Total pedido: $ " + monto_total_pedidos ;

  const label_total_arriba = document.getElementById("totalarriba");
  label_total_arriba.innerHTML = "Total pedido: $ " + monto_total_pedidos ;

}






