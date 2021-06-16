const user = "feria";
const pass = "123";

function login(event) {


    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    if ((usuario == user) && (password == pass)) {
      
        document.getElementById("mensaje").innerHTML = "Bienvenido a la Feria"; 
        document.getElementById("mensaje").style.opacity=1;
        document.getElementById("mensaje").style.position="relative";
        document.getElementById("mensaje").style.background="var(--green)";

        
    }
    else {
       
        document.getElementById("mensaje").innerHTML = "Usuario i/o contraseña incorrectos"; 
        document.getElementById("mensaje").style.opacity=1;
        document.getElementById("mensaje").style.position="relative";
        document.getElementById("mensaje").style.background="red";

    }

    
}

