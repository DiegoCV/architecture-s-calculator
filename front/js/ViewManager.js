/*
              -------Creado por-------
             \(x.x )/ Anarchy \( x.x)/
              ------------------------
 */

//    ¿Sabías que Anarchy se generó a sí mismo?  \\

var rutaBack = '../back/controller/Router.php';

/** Valida los campos requeridos en un formulario
 * Returns flag Devuelve true si el form cuenta con los datos mÃ­nimos requeridos
 */
function validarForm(idForm){
	var form=$('#'+idForm)[0];
	for (var i = 0; i < form.length; i++) {
		var input = form[i];
		if(input.required && input.value==""){
			return false;
		}
	}
	return true;
}

////////// ALQUILER \\\\\\\\\\
function preAlquilerInsert(idForm){
     //Haga aquÃ­ las validaciones necesarias antes de enviar el formulario.
	if(validarForm(idForm)){
 	var formData=$('#'+idForm).serialize();
     formData["ruta"]="AlquilerInsert";
 	enviar(formData, rutaBack ,postAlquilerInsert);
 	}else{
 		alert("Debe llenar los campos requeridos");
 	}
}

 function postAlquilerInsert(result,state){
     //Maneje aquÃ­ la respuesta del servidor.
     //Consideramos buena prÃ¡ctica no manejar cÃ³digo HTML antes de este punto.
 		if(state=="success"){
                     if(result=="true"){            
 			alert("Alquiler registrado con Ã©xito");
                     }else{
                        alert("Hubo un errror en la inserciÃ³n ( u.u)\n"+result);
                     } 		}else{
 			alert("Hubo un errror interno ( u.u)\n"+result);
 		}
}

function preAlquilerList(container){
     //Solicite informaciÃ³n del servidor
     cargaContenido(container,'AlquilerList.html'); 
     var formData = {};
     formData["ruta"]="AlquilerList";
 	enviar(formData, rutaBack ,postAlquilerList); 
}

 function postAlquilerList(result,state){
     //Maneje aquÃ­ la respuesta del servidor.
     if(state=="success"){
         var json=JSON.parse(result);
         if(json[0].msg=="exito"){

            for(var i=1; i < Object.keys(json).length; i++) {   
                var Alquiler = json[i];
                //----------------- Para una tabla -----------------------
                document.getElementById("AlquilerList").appendChild(createTR(Alquiler));
                //-------- Para otras opciones ver htmlBuilder.js ---------
            }
         }else{
            alert(json[0].msg);
         }
     }else{
         alert("Hubo un errror interno ( u.u)\n"+result);
     }
}

////////// CLIENTE \\\\\\\\\\
function preClienteInsert(idForm){
     //Haga aquÃ­ las validaciones necesarias antes de enviar el formulario.
	if(validarForm(idForm)){
 	var formData=$('#'+idForm).serialize();
     formData["ruta"]="ClienteInsert";
 	enviar(formData, rutaBack ,postClienteInsert);
 	}else{
 		alert("Debe llenar los campos requeridos");
 	}
}

 function postClienteInsert(result,state){
     //Maneje aquÃ­ la respuesta del servidor.
     //Consideramos buena prÃ¡ctica no manejar cÃ³digo HTML antes de este punto.
 		if(state=="success"){
                     if(result=="true"){            
 			alert("Cliente registrado con Ã©xito");
                     }else{
                        alert("Hubo un errror en la inserciÃ³n ( u.u)\n"+result);
                     } 		}else{
 			alert("Hubo un errror interno ( u.u)\n"+result);
 		}
}

function preClienteList(container){
     //Solicite informaciÃ³n del servidor
     cargaContenido(container,'ClienteList.html'); 
     var formData = {};
     formData["ruta"]="ClienteList";
 	enviar(formData, rutaBack ,postClienteList); 
}

 function postClienteList(result,state){
     //Maneje aquÃ­ la respuesta del servidor.
     if(state=="success"){
         var json=JSON.parse(result);
         if(json[0].msg=="exito"){

            for(var i=1; i < Object.keys(json).length; i++) {   
                var Cliente = json[i];
                
                Cliente.viewHrefB = 'mostrarTodo("' + Cliente.idcliente + '");';
                Cliente.deleteHrefB = 'mostrarEliminar("' + Cliente.idcliente + '");';
                //----------------- Para una tabla -----------------------
                document.getElementById("ClienteList").appendChild(createTR(Cliente));
                //-------- Para otras opciones ver htmlBuilder.js ---------
            }
         }else{
            alert(json[0].msg);
         }
     }else{
         alert("Hubo un errror interno ( u.u)\n"+result);
     }
}

////////// FACTURA \\\\\\\\\\
function preFacturaInsert(idForm){
     //Haga aquÃ­ las validaciones necesarias antes de enviar el formulario.
	if(validarForm(idForm)){
 	var formData=$('#'+idForm).serialize();
     formData["ruta"]="FacturaInsert";
 	enviar(formData, rutaBack ,postFacturaInsert);
 	}else{
 		alert("Debe llenar los campos requeridos");
 	}
}

 function postFacturaInsert(result,state){
     //Maneje aquÃ­ la respuesta del servidor.
     //Consideramos buena prÃ¡ctica no manejar cÃ³digo HTML antes de este punto.
 		if(state=="success"){
                     if(result=="true"){            
 			alert("Factura registrado con Ã©xito");
                     }else{
                        alert("Hubo un errror en la inserciÃ³n ( u.u)\n"+result);
                     } 		}else{
 			alert("Hubo un errror interno ( u.u)\n"+result);
 		}
}

function preFacturaList(container){
     //Solicite informaciÃ³n del servidor
     cargaContenido(container,'FacturaList.html'); 
     var formData = {};
     formData["ruta"]="FacturaList";
 	enviar(formData, rutaBack ,postFacturaList); 
}

 function postFacturaList(result,state){
     //Maneje aquÃ­ la respuesta del servidor.
     if(state=="success"){
         var json=JSON.parse(result);
         if(json[0].msg=="exito"){

            for(var i=1; i < Object.keys(json).length; i++) {   
                var Factura = json[i];
                //----------------- Para una tabla -----------------------
                document.getElementById("FacturaList").appendChild(createTR(Factura));
                //-------- Para otras opciones ver htmlBuilder.js ---------
            }
         }else{
            alert(json[0].msg);
         }
     }else{
         alert("Hubo un errror interno ( u.u)\n"+result);
     }
}

////////// LIBRO_DIARIO \\\\\\\\\\
function preLibro_diarioInsert(idForm){
     //Haga aquÃ­ las validaciones necesarias antes de enviar el formulario.
	if(validarForm(idForm)){
 	var formData=$('#'+idForm).serialize();
     formData["ruta"]="Libro_diarioInsert";
 	enviar(formData, rutaBack ,postLibro_diarioInsert);
 	}else{
 		alert("Debe llenar los campos requeridos");
 	}
}

 function postLibro_diarioInsert(result,state){
     //Maneje aquÃ­ la respuesta del servidor.
     //Consideramos buena prÃ¡ctica no manejar cÃ³digo HTML antes de este punto.
 		if(state=="success"){
                     if(result=="true"){            
 			alert("Libro_diario registrado con Ã©xito");
                     }else{
                        alert("Hubo un errror en la inserciÃ³n ( u.u)\n"+result);
                     } 		}else{
 			alert("Hubo un errror interno ( u.u)\n"+result);
 		}
}

function preLibro_diarioList(container){
     //Solicite informaciÃ³n del servidor
     cargaContenido(container,'Libro_diarioList.html'); 
     var formData = {};
     formData["ruta"]="Libro_diarioList";
 	enviar(formData, rutaBack ,postLibro_diarioList); 
}

 function postLibro_diarioList(result,state){
     //Maneje aquÃ­ la respuesta del servidor.
     if(state=="success"){
         var json=JSON.parse(result);
         if(json[0].msg=="exito"){

            for(var i=1; i < Object.keys(json).length; i++) {   
                var Libro_diario = json[i];
                //----------------- Para una tabla -----------------------
                document.getElementById("Libro_diarioList").appendChild(createTR(Libro_diario));
                //-------- Para otras opciones ver htmlBuilder.js ---------
            }
         }else{
            alert(json[0].msg);
         }
     }else{
         alert("Hubo un errror interno ( u.u)\n"+result);
     }
}

////////// PRODUCTO \\\\\\\\\\
function preProductoInsert(idForm){
     //Haga aquÃ­ las validaciones necesarias antes de enviar el formulario.
	if(validarForm(idForm)){
 	var formData=$('#'+idForm).serialize();
     formData["ruta"]="ProductoInsert";
 	enviar(formData, rutaBack ,postProductoInsert);
 	}else{
 		alert("Debe llenar los campos requeridos");
 	}
}

 function postProductoInsert(result,state){
     //Maneje aquÃ­ la respuesta del servidor.
     //Consideramos buena prÃ¡ctica no manejar cÃ³digo HTML antes de este punto.
 		if(state=="success"){
                     if(result=="true"){            
 			alert("Producto registrado con Ã©xito");
                     }else{
                        alert("Hubo un errror en la inserciÃ³n ( u.u)\n"+result);
                     } 		}else{
 			alert("Hubo un errror interno ( u.u)\n"+result);
 		}
}

function preProductoList(container){
     //Solicite informaciÃ³n del servidor
     cargaContenido(container,'ProductoList.html'); 
     var formData = {};
     formData["ruta"]="ProductoList";
 	enviar(formData, rutaBack ,postProductoList); 
}

 function postProductoList(result,state){
     //Maneje aquÃ­ la respuesta del servidor.
     if(state=="success"){
         var json=JSON.parse(result);
         if(json[0].msg=="exito"){

            for(var i=1; i < Object.keys(json).length; i++) {   
                var Producto = json[i];
                 Producto.viewHrefB = 'mostrarTodo("' + Producto.idprod + '");';
                Producto.deleteHrefB = 'mostrarEliminar("' + Producto.idprod + '");';
                //----------------- Para una tabla -----------------------
                document.getElementById("ProductosList_2").appendChild(createTR(Producto));
                //-------- Para otras opciones ver htmlBuilder.js ---------
            }
         }else{
            alert(json[0].msg);
         }
     }else{
         alert("Hubo un errror interno ( u.u)\n"+result);
     }
}

////////// TRANSPORTE \\\\\\\\\\
function preTransporteInsert(idForm){
     //Haga aquÃ­ las validaciones necesarias antes de enviar el formulario.
	if(validarForm(idForm)){
 	var formData=$('#'+idForm).serialize();
     formData["ruta"]="TransporteInsert";
 	enviar(formData, rutaBack ,postTransporteInsert);
 	}else{
 		alert("Debe llenar los campos requeridos");
 	}
}

 function postTransporteInsert(result,state){
     //Maneje aquÃ­ la respuesta del servidor.
     //Consideramos buena prÃ¡ctica no manejar cÃ³digo HTML antes de este punto.
 		if(state=="success"){
                     if(result=="true"){            
 			alert("Transporte registrado con Ã©xito");
                     }else{
                        alert("Hubo un errror en la inserciÃ³n ( u.u)\n"+result);
                     } 		}else{
 			alert("Hubo un errror interno ( u.u)\n"+result);
 		}
}

function preTransporteList(container){
     //Solicite informaciÃ³n del servidor
     cargaContenido(container,'TransporteList.html'); 
     var formData = {};
     formData["ruta"]="TransporteList";
 	enviar(formData, rutaBack ,postTransporteList); 
}

 function postTransporteList(result,state){
     //Maneje aquÃ­ la respuesta del servidor.
     if(state=="success"){
         var json=JSON.parse(result);
         if(json[0].msg=="exito"){

            for(var i=1; i < Object.keys(json).length; i++) {   
                var Transporte = json[i];
                //----------------- Para una tabla -----------------------
                document.getElementById("TransporteList").appendChild(createTR(Transporte));
                //-------- Para otras opciones ver htmlBuilder.js ---------
            }
         }else{
            alert(json[0].msg);
         }
     }else{
         alert("Hubo un errror interno ( u.u)\n"+result);
     }
}

//That`s all folks!