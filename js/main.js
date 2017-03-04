function validateForm(){
	/* Escribe tú código aquí */
var nombre = document.getElementById("name");
var apellido = document.getElementById("lastname");
var correo = document.getElementById("input-email");
var contrasena = document.getElementById("input-password");
var combo = document.getElementById("combo").selectedIndex;

if(nombre.value == "" || /[0-9]/.test(nombre.value)  ){
  alert("Vuelva a escribir su nombre");
}

if(nombre.value.charAt(0).toUpperCase() != nombre.value.charAt(0) ){
  alert("Escribir la primera letra de tu nombre en mayuscula");
}
if(apellido.value == "" || /[0-9]/.test(apellido.value)){
  alert("Escriba su apellido");
}
if(apellido.value.charAt(0).toUpperCase() != apellido.value.charAt(0) ){
    alert("Escribir la primera letra de tu apellido en mayuscula");
}

if(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/.test(correo.value)){

}else if(correo.value == ""){
  alert("Escribir correo");
}else{
  alert("La dirección de correo es incorrecta ");
}
if(contrasena.value == "password"|| contrasena.value == "123456" || contrasena.value == "098754"){
  alert("Ingresa otra contraseña");
}else if(/.{6,}/.test(contrasena.value)){

}else{
  alert("Ingresa una contraseña mayor de 6 digitos");
}
if( combo == null || combo == 0 ) {
  alert('No hay opción seleccionada');
}


}
