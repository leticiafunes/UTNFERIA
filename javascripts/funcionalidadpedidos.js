
/*Toggle*/

const menu_mobile = document.querySelector('#mobile-menu');
const menuLinks_mobile = document.querySelector ('.nav-menu');


menu_mobile.addEventListener('click', function() {
    menu_mobile.classList.toggle('is-active');
    menuLinks_mobile.classList.toggle('active');
   
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

 
  const contenedorPedidos = document.getElementById("listadopedidos");
  const totalPedidos = document.getElementById("totalpedidos");
  const contenedorPedidos2 = document.getElementById("listado-pedidos");

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


      contenedorPedidos.value = listado;
      totalPedidos.value = total;
      
      contenedorPedidos2.innerHTML = listado;
      monto_total_pedidos = total;

    
  }
  else {

    console.log ('No hay pedidos');
    contenedorPedidos2.innerHTML = '- Aún no hay pedidos -';
       
  }


  
  const label_total = document.getElementById("total");
  label_total.innerHTML = "Total pedidos: $ " + monto_total_pedidos ;

  const label_total_arriba = document.getElementById("totalarriba");
  label_total_arriba.value = "Total pedidos: $ " + monto_total_pedidos ;

}


function enviarMail() {

  localStorage.setItem ("pedidos_storage", null);
  localStorage.setItem ("carrito_storage", JSON.stringify(null));
  localStorage.setItem ("cant_productos_storage", JSON.stringify(0));
  localStorage.setItem ("total_storage", JSON.stringify(0));
  window.location.reload(); 
  alert ("El mail con la lista de pedidos ha sido enviado al administrador del sistema");
  
}



