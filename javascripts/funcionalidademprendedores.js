
const iconobuscar= document.querySelector ('#icono-buscar');
const emprendedores = document.querySelectorAll ('.emprendedor-tarjeta');
const buscar= document.querySelector ('#input-buscar');




buscar.addEventListener("focus", function() {
  buscar.style.outline="none";
  buscar.style.border = "thin solid orange";

 });



 buscar.addEventListener("blur", function() {

  buscar.style.border = "thin solid gray";

 });
 
 buscar.addEventListener("keyup", function() {
 
  filtrar ();

 });


iconobuscar.addEventListener("click", function() {
 
  filtrar ();

 });




const openEls = document.querySelectorAll("[data-open]");

const isVisible = "is-visible";

for(const el of openEls) {

    el.addEventListener("click", function() {
      
     //this es el elemento en el que hice click. 
     //El dataset es lo que tengo en data-open="modal1". Data-open es palabra reservada
      const modalId = this.dataset.open;  
     //Le agrego al elemento ue abre con open la clase visible
     document.getElementById(modalId).classList.add(isVisible);
    });
  }


/*boton cerrar del form modal*/

const closeEls = document.querySelectorAll("[data-close]");
for (const el of closeEls) {
  el.addEventListener("click", function() {
   document.querySelector(".modal.is-visible").classList.remove(isVisible);  //vuelve invisible la clase modal
  });
}


/*click afuera del form modal*/

document.addEventListener("click", e => {
     //e.target :  es una referencia al objeto en el cual se lanzó el evento.
     //Dispara el click porque es clase modal.. y modal es una clase fixed anclada a las 4 esquinas. 
     //Por eso al hacer click afuera devuelve esa clase.
    if (e.target == document.querySelector(".modal.is-visible")) {
      document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }

  });

  /*escape para cerrar el form modal*/

  document.addEventListener("keyup", e => {
    if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
      document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
  });




function filtrar () {
 
  
    for (let emprendedor of emprendedores) {
      
      emprendedor.classList.add('oculto');
      console.log ('Emprendedor: ' + emprendedor);
      let rubro = emprendedor.children[2].innerText.toLowerCase();
      
      if (rubro.indexOf (buscar.value) !== -1) {
        emprendedor.classList.remove('oculto');
       }
   
   
    }
   
   }


 /*Botón que lleva arriba de la pantalla*/

 $(document).ready(function () {  

 $('.ir-arriba').click(function(){
  $('body, html').animate({
  scrollTop: '0px'
  }, 300);
 });

 $(window).scroll(function(){
 if( $(this).scrollTop() > 0 ){
  $('.ir-arriba').slideDown(300);
  } else {
   $('.ir-arriba').slideUp(300);
  }
  });


})
   
