//document.getElementById("logbutton").addEventListener ('click', function()) {
    //if document.getElementById("logbutton") = true
//aca va la funcion de crear el pop upp con alerta de mail enviado// 

function login() {
    var usuario, password;
    usuario = document.getElementById("usuario").value ;
    password = document.getElementById("password").value ;

    if (usuario == "lucio" && password == "1234") {
        window.location = "ejemplo.html";
    } else {
        window.location = "usuario.html";
    }

}


