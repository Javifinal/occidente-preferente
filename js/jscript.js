function limpiarForm() {
	document.getElementById("frmContacto").reset();
}

function validarForm() {
	// Asociamos cada control del formulario de la pagina html a una variable
	var formulario = document.getElementById("frmContacto");
	var asunto = document.getElementById("asunto");
	var nombre = document.getElementById("nombre");
	var emailFrom = document.getElementById("email");
	var fechaEnvio = new Date();
	var comentario = document.getElementById("comentario");
	
	var verificar = true;
	var respueta  = true;
	var fechaFormateada = "01/01/2014";
	var mensaje = "";
	var strHref = "";
	var snarkconf = confirm;

	var expRegNombre =/^[a-zA-ZÑñÁáÉéÍíÓóÚú\s]+$/;
	var expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

	
	if(!nombre.value) {
		alert("El campo nombre es requerido");
		nombre.focus();
		verificar = false;
	} else if (!expRegNombre.exec(nombre.value)) {
		alert("El campo nombre solo acepta letras y espacios en blanco");
		nombre.focus();
		verificar = false;
	}  else if (!emailFrom.value) {
		alert("El campo email es requerido");
		emailFrom.focus();
		verificar = false;
	}  else if (!expRegEmail.exec(emailFrom.value)) {
		alert("El campo email no es valido");
		emailFrom.focus();
		verificar = false;
	}  else if (!asunto.value) {
		alert("El campo asunto es requerido");
		asunto.focus();
		verificar = false;
	}  else if (!comentario.value) {
		alert("El campo comentario es requerido");
		comentario.focus();
		verificar = false;
	}

	if (verificar==true) {
		respueta = snarkconf("¿Esta seguro de querer enviar un mensaje?");
		if (respueta==true) {
			//mensaje += f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear() + "\n";

			mensaje += "Asunto: " + asunto.value + "\n";
			mensaje += "Enviado por: " + nombre.value + "; " 
			mensaje += fechaFormateada + "\n";
			mensaje += "Email de contacto: " + emailFrom.value + "\n";
			mensaje += "Comentario: " + comentario.value + "\n";
			strHref += "mailto:ascendia.javier@gmail.com";
			//cc   = "?cc=";
			//cco  = "&bcc=";
			strHref += "&subject=" + asunto.value;
			strHref += "&body=" + mensaje;

			//{parent.location.href = strHref;}
			console.log(strHref);
			alert("El mensaje ha sido enviado!!");
			document.frmContacto.submit();

		} else {
			alert("El mensaje no ha sido enviado!!");
		}
	}
}

window.onload = function() {

	var botonLimpiar = document.getElementById("limpiar");
	botonLimpiar.onclick = limpiarForm;

	var botonEnviar = document.getElementById("enviar");
	botonEnviar.onclick = validarForm;
}
