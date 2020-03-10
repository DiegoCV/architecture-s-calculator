/*
 -------Creado por-------
 \(x.x )/ Anarchy \( x.x)/
 ------------------------
 */

//    ¿Documentaqué?  \\

var rutaBack = '../back/controller/Router.php';

/** Valida los campos requeridos en un formulario
 * Returns flag Devuelve true si el form cuenta con los datos mÃ­nimos requeridos
 */
function validarForm(idForm) {
    var form = $('#' + idForm)[0];
    for (var i = 0; i < form.length; i++) {
        var input = form[i];
        if (input.required && input.value == "") {
            return false;
        }
    }
    return true;
}

////////// ADMINISTRADORS \\\\\\\\\\
function preAdministradorsInsert(idForm) {
    //Haga aquÃ­ las validaciones necesarias antes de enviar el formulario.
    if (validarForm(idForm)) {
        var formData = $('#' + idForm).serialize();
        formData["ruta"] = "AdministradorsInsert";
        enviar(formData, rutaBack, postAdministradorsInsert);
    } else {
        alert("Debe llenar los campos requeridos");
    }
}

function postAdministradorsInsert(result, state) {
    //Maneje aquÃ­ la respuesta del servidor.
    //Consideramos buena prÃ¡ctica no manejar cÃ³digo HTML antes de este punto.
    if (state == "success") {
        if (result == "true") {
            alert("Administradors registrado con Ã©xito");
        } else {
            alert("Hubo un errror en la inserciÃ³n ( u.u)\n" + result);
        }
    } else {
        alert("Hubo un errror interno ( u.u)\n" + result);
    }
}

function preAdministradorsList(container) {
    //Solicite informaciÃ³n del servidor
    cargaContenido(container, 'AdministradorsList.html');
    var formData = {};
    formData["ruta"] = "AdministradorsList";
    enviar(formData, rutaBack, postAdministradorsList);
}

function postAdministradorsList(result, state) {
    //Maneje aquÃ­ la respuesta del servidor.
    if (state == "success") {
        var json = JSON.parse(result);
        if (json[0].msg == "exito") {

            for (var i = 1; i < Object.keys(json).length; i++) {
                var Administradors = json[i];
                Administradors.viewHrefB = 'mostrarTodo("' + Administradors.id + '");';
                Administradors.updateHrefB = 'mostrarActualizar("' + Administradors.id + '");';
                //----------------- Para una tabla -----------------------
                document.getElementById("AdministradorsList").appendChild(createTR(Administradors));
                //-------- Para otras opciones ver htmlBuilder.js ---------
            }
        } else {
            alert(json[0].msg);
        }
    } else {
        alert("Hubo un errror interno ( u.u)\n" + result);
    }
}

////////// CITAS \\\\\\\\\\
function preCitasInsert(idForm) {
    //Haga aquÃ­ las validaciones necesarias antes de enviar el formulario.
    if (validarForm(idForm)) {
        var formData = $('#' + idForm).serialize();
        formData["ruta"] = "CitasInsert";
        enviar(formData, rutaBack, postCitasInsert);
    } else {
        alert("Debe llenar los campos requeridos");
    }
}

function postCitasInsert(result, state) {
    //Maneje aquÃ­ la respuesta del servidor.
    //Consideramos buena prÃ¡ctica no manejar cÃ³digo HTML antes de este punto.
    if (state == "success") {
        if (result == "true") {
            alert("Citas registrado con Ã©xito");
        } else {
            alert("Hubo un errror en la inserciÃ³n ( u.u)\n" + result);
        }
    } else {
        alert("Hubo un errror interno ( u.u)\n" + result);
    }
}

function preCitasList(container) {
    //Solicite informaciÃ³n del servidor
    cargaContenido(container, 'CitasList.html');
    var formData = {};
    formData["ruta"] = "CitasList";
    enviar(formData, rutaBack, postCitasList);
}

function postCitasList(result, state) {
    //Maneje aquÃ­ la respuesta del servidor.
    if (state == "success") {
        var json = JSON.parse(result);
        if (json[0].msg == "exito") {

            for (var i = 1; i < Object.keys(json).length; i++) {
                var Citas = json[i];
                //----------------- Para una tabla -----------------------
                document.getElementById("CitasList").appendChild(createTR(Citas));
                //-------- Para otras opciones ver htmlBuilder.js ---------
            }
        } else {
            alert(json[0].msg);
        }
    } else {
        alert("Hubo un errror interno ( u.u)\n" + result);
    }
}

////////// CLIENTE_VEHICULOS \\\\\\\\\\
function preCliente_vehiculosInsert(idForm) {
    //Haga aquÃ­ las validaciones necesarias antes de enviar el formulario.
    if (validarForm(idForm)) {
        var formData = $('#' + idForm).serialize();
        formData["ruta"] = "Cliente_vehiculosInsert";
        enviar(formData, rutaBack, postCliente_vehiculosInsert);
    } else {
        alert("Debe llenar los campos requeridos");
    }
}

function postCliente_vehiculosInsert(result, state) {
    //Maneje aquÃ­ la respuesta del servidor.
    //Consideramos buena prÃ¡ctica no manejar cÃ³digo HTML antes de este punto.
    if (state == "success") {
        if (result == "true") {
            alert("Cliente_vehiculos registrado con Ã©xito");
        } else {
            alert("Hubo un errror en la inserciÃ³n ( u.u)\n" + result);
        }
    } else {
        alert("Hubo un errror interno ( u.u)\n" + result);
    }
}

function preCliente_vehiculosList(container) {
    //Solicite informaciÃ³n del servidor
    cargaContenido(container, 'Cliente_vehiculosList.html');
    var formData = {};
    formData["ruta"] = "Cliente_vehiculosList";
    enviar(formData, rutaBack, postCliente_vehiculosList);
}

function postCliente_vehiculosList(result, state) {
    //Maneje aquÃ­ la respuesta del servidor.
    if (state == "success") {
        var json = JSON.parse(result);
        if (json[0].msg == "exito") {

            for (var i = 1; i < Object.keys(json).length; i++) {
                var Cliente_vehiculos = json[i];
                //----------------- Para una tabla -----------------------
                document.getElementById("Cliente_vehiculosList").appendChild(createTR(Cliente_vehiculos));
                //-------- Para otras opciones ver htmlBuilder.js ---------
            }
        } else {
            alert(json[0].msg);
        }
    } else {
        alert("Hubo un errror interno ( u.u)\n" + result);
    }
}

////////// CLIENTES \\\\\\\\\\
function preClientesInsert(idForm) {
    //Haga aquÃ­ las validaciones necesarias antes de enviar el formulario.
    if (validarForm(idForm)) {
        var formData = $('#' + idForm).serialize();
        formData["ruta"] = "ClientesInsert";
        enviar(formData, rutaBack, postClientesInsert);
    } else {
        alert("Debe llenar los campos requeridos");
    }
}

function postClientesInsert(result, state) {
    //Maneje aquÃ­ la respuesta del servidor.
    //Consideramos buena prÃ¡ctica no manejar cÃ³digo HTML antes de este punto.
    if (state == "success") {
        if (result == "true") {
            alert("Clientes registrado con Ã©xito");
        } else {
            alert("Hubo un errror en la inserciÃ³n ( u.u)\n" + result);
        }
    } else {
        alert("Hubo un errror interno ( u.u)\n" + result);
    }
}

function preClientesList(container) {
    //Solicite informaciÃ³n del servidor
    cargaContenido(container, 'ClientesList.html');
    var formData = {};
    formData["ruta"] = "ClientesList";
    enviar(formData, rutaBack, postClientesList);
}

function postClientesList(result, state) {
    //Maneje aquÃ­ la respuesta del servidor.
    if (state == "success") {
        var json = JSON.parse(result);
        if (json[0].msg == "exito") {

            for (var i = 1; i < Object.keys(json).length; i++) {
                var Clientes = json[i];
                Clientes.viewHrefB = 'mostrarTodo("' + Clientes.id + '");';
                Clientes.deleteHrefB = 'mostrarEliminar("' + Clientes.id + '");';
                //----------------- Para una tabla -----------------------
                document.getElementById("ClientesList").appendChild(createTR(Clientes));
                //-------- Para otras opciones ver htmlBuilder.js ---------
            }
        } else {
            alert(json[0].msg);
        }
    } else {
        alert("Hubo un errror interno ( u.u)\n" + result);
    }

}


////////// COMPONENTES \\\\\\\\\\
function preComponentesInsert(idForm) {
    //Haga aquÃ­ las validaciones necesarias antes de enviar el formulario.
    if (validarForm(idForm)) {
        var formData = $('#' + idForm).serialize();
        formData["ruta"] = "ComponentesInsert";
        enviar(formData, rutaBack, postComponentesInsert);
    } else {
        alert("Debe llenar los campos requeridos");
    }
}

function postComponentesInsert(result, state) {
    //Maneje aquÃ­ la respuesta del servidor.
    //Consideramos buena prÃ¡ctica no manejar cÃ³digo HTML antes de este punto.
    if (state == "success") {
        if (result == "true") {
            alert("Componentes registrado con Ã©xito");
        } else {
            alert("Hubo un errror en la inserciÃ³n ( u.u)\n" + result);
        }
    } else {
        alert("Hubo un errror interno ( u.u)\n" + result);
    }
}

function preComponentesList(container) {
    //Solicite informaciÃ³n del servidor
    cargaContenido(container, 'ComponentesList.html');
    var formData = {};
    formData["ruta"] = "ComponentesList";
    enviar(formData, rutaBack, postComponentesList);
}

function postComponentesList(result, state) {
    //Maneje aquÃ­ la respuesta del servidor.
    if (state == "success") {
        var json = JSON.parse(result);
        if (json[0].msg == "exito") {

            for (var i = 1; i < Object.keys(json).length; i++) {
                var Componentes = json[i];
                //----------------- Para una tabla -----------------------
                document.getElementById("ComponentesList").appendChild(createTR(Componentes));
                //-------- Para otras opciones ver htmlBuilder.js ---------
            }
        } else {
            alert(json[0].msg);
        }
    } else {
        alert("Hubo un errror interno ( u.u)\n" + result);
    }
}

////////// COMPRAS \\\\\\\\\\
function preComprasInsert(idForm) {
    //Haga aquÃ­ las validaciones necesarias antes de enviar el formulario.
    if (validarForm(idForm)) {
        var formData = $('#' + idForm).serialize();
        formData["ruta"] = "ComprasInsert";
        enviar(formData, rutaBack, postComprasInsert);
    } else {
        alert("Debe llenar los campos requeridos");
    }
}

function postComprasInsert(result, state) {
    //Maneje aquÃ­ la respuesta del servidor.
    //Consideramos buena prÃ¡ctica no manejar cÃ³digo HTML antes de este punto.
    if (state == "success") {
        if (result == "true") {
            alert("Compras registrado con Ã©xito");
        } else {
            alert("Hubo un errror en la inserciÃ³n ( u.u)\n" + result);
        }
    } else {
        alert("Hubo un errror interno ( u.u)\n" + result);
    }
}

function preComprasList(container) {
    //Solicite informaciÃ³n del servidor
    cargaContenido(container, 'ComprasList.html');
    var formData = {};
    formData["ruta"] = "ComprasList";
    enviar(formData, rutaBack, postComprasList);
}

function postComprasList(result, state) {
    //Maneje aquÃ­ la respuesta del servidor.
    if (state == "success") {
        var json = JSON.parse(result);
        if (json[0].msg == "exito") {

            for (var i = 1; i < Object.keys(json).length; i++) {
                var Compras = json[i];
                //----------------- Para una tabla -----------------------
                document.getElementById("ComprasList").appendChild(createTR(Compras));
                //-------- Para otras opciones ver htmlBuilder.js ---------
            }
        } else {
            alert(json[0].msg);
        }
    } else {
        alert("Hubo un errror interno ( u.u)\n" + result);
    }
}

////////// FACTURAS \\\\\\\\\\
function preFacturasInsert(idForm) {
    //Haga aquÃ­ las validaciones necesarias antes de enviar el formulario.
    if (validarForm(idForm)) {
        var formData = $('#' + idForm).serialize();
        formData["ruta"] = "FacturasInsert";
        enviar(formData, rutaBack, postFacturasInsert);
    } else {
        alert("Debe llenar los campos requeridos");
    }
}

function postFacturasInsert(result, state) {
    //Maneje aquÃ­ la respuesta del servidor.
    //Consideramos buena prÃ¡ctica no manejar cÃ³digo HTML antes de este punto.
    if (state == "success") {
        if (result == "true") {
            alert("Facturas registrado con Ã©xito");
        } else {
            alert("Hubo un errror en la inserciÃ³n ( u.u)\n" + result);
        }
    } else {
        alert("Hubo un errror interno ( u.u)\n" + result);
    }
}

function preFacturasList(container) {
    //Solicite informaciÃ³n del servidor
    cargaContenido(container, 'FacturasList.html');
    var formData = {};
    formData["ruta"] = "FacturasList";
    enviar(formData, rutaBack, postFacturasList);
}

function postFacturasList(result, state) {
    //Maneje aquÃ­ la respuesta del servidor.
    if (state == "success") {
        var json = JSON.parse(result);
        if (json[0].msg == "exito") {

            for (var i = 1; i < Object.keys(json).length; i++) {
                var Facturas = json[i];
                //----------------- Para una tabla -----------------------
                document.getElementById("FacturasList").appendChild(createTR(Facturas));
                //-------- Para otras opciones ver htmlBuilder.js ---------
            }
        } else {
            alert(json[0].msg);
        }
    } else {
        alert("Hubo un errror interno ( u.u)\n" + result);
    }
}

////////// MECANICOS \\\\\\\\\\
function preMecanicosInsert(idForm) {
    //Haga aquÃ­ las validaciones necesarias antes de enviar el formulario.
    if (validarForm(idForm)) {
        var formData = $('#' + idForm).serialize();
        formData["ruta"] = "MecanicosInsert";
        enviar(formData, rutaBack, postMecanicosInsert);
    } else {
        alert("Debe llenar los campos requeridos");
    }
}

function postMecanicosInsert(result, state) {
    //Maneje aquÃ­ la respuesta del servidor.
    //Consideramos buena prÃ¡ctica no manejar cÃ³digo HTML antes de este punto.
    if (state == "success") {
        if (result == "true") {
            alert("Mecanicos registrado con Ã©xito");
        } else {
            alert("Hubo un errror en la inserciÃ³n ( u.u)\n" + result);
        }
    } else {
        alert("Hubo un errror interno ( u.u)\n" + result);
    }
}

function preMecanicosList(container) {
    //Solicite informaciÃ³n del servidor
    cargaContenido(container, 'MecanicosList.html');
    var formData = {};
    formData["ruta"] = "MecanicosList";
    enviar(formData, rutaBack, postMecanicosList);
}

function postMecanicosList(result, state) {
    //Maneje aquÃ­ la respuesta del servidor.
    if (state == "success") {
        var json = JSON.parse(result);
        if (json[0].msg == "exito") {

            for (var i = 1; i < Object.keys(json).length; i++) {
                var Mecanicos = json[i];
                Mecanicos.viewHrefB = 'mostrarTodo("' + Mecanicos.id + '");';
                Mecanicos.deleteHrefB = 'mostrarEliminar("' + Mecanicos.id + '");';
                //----------------- Para una tabla -----------------------
                document.getElementById("MecanicosList").appendChild(createTR(Mecanicos));
                //-------- Para otras opciones ver htmlBuilder.js ---------
            }
        } else {
            alert(json[0].msg);
        }
    } else {
        alert("Hubo un errror interno ( u.u)\n" + result);
    }
}

////////// MIGRATIONS \\\\\\\\\\
function preMigrationsInsert(idForm) {
    //Haga aquÃ­ las validaciones necesarias antes de enviar el formulario.
    if (validarForm(idForm)) {
        var formData = $('#' + idForm).serialize();
        formData["ruta"] = "MigrationsInsert";
        enviar(formData, rutaBack, postMigrationsInsert);
    } else {
        alert("Debe llenar los campos requeridos");
    }
}

function postMigrationsInsert(result, state) {
    //Maneje aquÃ­ la respuesta del servidor.
    //Consideramos buena prÃ¡ctica no manejar cÃ³digo HTML antes de este punto.
    if (state == "success") {
        if (result == "true") {
            alert("Migrations registrado con Ã©xito");
        } else {
            alert("Hubo un errror en la inserciÃ³n ( u.u)\n" + result);
        }
    } else {
        alert("Hubo un errror interno ( u.u)\n" + result);
    }
}

function preMigrationsList(container) {
    //Solicite informaciÃ³n del servidor
    cargaContenido(container, 'MigrationsList.html');
    var formData = {};
    formData["ruta"] = "MigrationsList";
    enviar(formData, rutaBack, postMigrationsList);
}

function postMigrationsList(result, state) {
    //Maneje aquÃ­ la respuesta del servidor.
    if (state == "success") {
        var json = JSON.parse(result);
        if (json[0].msg == "exito") {

            for (var i = 1; i < Object.keys(json).length; i++) {
                var Migrations = json[i];
                //----------------- Para una tabla -----------------------
                document.getElementById("MigrationsList").appendChild(createTR(Migrations));
                //-------- Para otras opciones ver htmlBuilder.js ---------
            }
        } else {
            alert(json[0].msg);
        }
    } else {
        alert("Hubo un errror interno ( u.u)\n" + result);
    }
}

////////// PRODUCTOS \\\\\\\\\\
function preProductosInsert(idForm) {
    //Haga aquÃ­ las validaciones necesarias antes de enviar el formulario.
    if (validarForm(idForm)) {
        var formData = $('#' + idForm).serialize();
        formData["ruta"] = "ProductosInsert";
        enviar(formData, rutaBack, postProductosInsert);
    } else {
        alert("Debe llenar los campos requeridos");
    }
}

function postProductosInsert(result, state) {
    //Maneje aquÃ­ la respuesta del servidor.
    //Consideramos buena prÃ¡ctica no manejar cÃ³digo HTML antes de este punto.
    if (state == "success") {
        if (result == "true") {
            alert("Productos registrado con Ã©xito");
        } else {
            alert("Hubo un errror en la inserciÃ³n ( u.u)\n" + result);
        }
    } else {
        alert("Hubo un errror interno ( u.u)\n" + result);
    }
}

function preProductosList(container) {
    //Solicite informaciÃ³n del servidor
    cargaContenido(container, 'ProductosList.html');
    var formData = {};
    formData["ruta"] = "ProductosList";
    enviar(formData, rutaBack, postProductosList);
}

function postProductosList(result, state) {
    //Maneje aquÃ­ la respuesta del servidor.
    if (state == "success") {
        var json = JSON.parse(result);
        if (json[0].msg == "exito") {
            for (var i = 1; i < Object.keys(json).length; i++) {
                var Productos = json[i];
                Productos.viewHrefB = 'mostrarTodo("' + Productos.id + '");';
                Productos.deleteHrefB = 'mostrarEliminar("' + Productos.id + '");';
                //----------------- Para una tabla -----------------------
                document.getElementById("ProductosList_2").appendChild(createTR(Productos));
//                document.getElementById("MecanicosList").appendChild(createTR(Mecanicos));
                //-------- Para otras opciones ver htmlBuilder.js ---------
            }
        } else {
            alert(json[0].msg);
        }
    } else {
        alert("Hubo un errror interno ( u.u)\n" + result);
    }
}

////////// PROVEEDORS \\\\\\\\\\
function preProveedorsInsert(idForm) {
    //Haga aquÃ­ las validaciones necesarias antes de enviar el formulario.
    if (validarForm(idForm)) {
        var formData = $('#' + idForm).serialize();
        formData["ruta"] = "ProveedorsInsert";
        enviar(formData, rutaBack, postProveedorsInsert);
    } else {
        alert("Debe llenar los campos requeridos");
    }
}

function postProveedorsInsert(result, state) {
    //Maneje aquÃ­ la respuesta del servidor.
    //Consideramos buena prÃ¡ctica no manejar cÃ³digo HTML antes de este punto.
    if (state == "success") {
        if (result == "true") {
            alert("Proveedors registrado con Ã©xito");
        } else {
            alert("Hubo un errror en la inserciÃ³n ( u.u)\n" + result);
        }
    } else {
        alert("Hubo un errror interno ( u.u)\n" + result);
    }
}

function preProveedorsList(container) {
    //Solicite informaciÃ³n del servidor
    cargaContenido(container, 'ProveedorsList.html');
    var formData = {};
    formData["ruta"] = "ProveedorsList";
    enviar(formData, rutaBack, postProveedorsList);
}

function postProveedorsList(result, state) {
    //Maneje aquÃ­ la respuesta del servidor.
    if (state == "success") {
        var json = JSON.parse(result);
        if (json[0].msg == "exito") {

            for (var i = 1; i < Object.keys(json).length; i++) {
                var Proveedors = json[i];
                //----------------- Para una tabla -----------------------
                document.getElementById("ProveedorsList").appendChild(createTR(Proveedors));
                //-------- Para otras opciones ver htmlBuilder.js ---------
            }
        } else {
            alert(json[0].msg);
        }
    } else {
        alert("Hubo un errror interno ( u.u)\n" + result);
    }
}

////////// SERVICIOS \\\\\\\\\\
function preServiciosInsert(idForm) {
    //Haga aquÃ­ las validaciones necesarias antes de enviar el formulario.
    if (validarForm(idForm)) {
        var formData = $('#' + idForm).serialize();
        formData["ruta"] = "ServiciosInsert";
        enviar(formData, rutaBack, postServiciosInsert);
    } else {
        alert("Debe llenar los campos requeridos");
    }
}

function postServiciosInsert(result, state) {
    //Maneje aquÃ­ la respuesta del servidor.
    //Consideramos buena prÃ¡ctica no manejar cÃ³digo HTML antes de este punto.
    if (state == "success") {
        if (result == "true") {
            alert("Servicios registrado con Ã©xito");
        } else {
            alert("Hubo un errror en la inserciÃ³n ( u.u)\n" + result);
        }
    } else {
        alert("Hubo un errror interno ( u.u)\n" + result);
    }
}

function preServiciosList(container) {
    //Solicite informaciÃ³n del servidor
    cargaContenido(container, 'ServiciosList.html');
    var formData = {};
    formData["ruta"] = "ServiciosList";
    enviar(formData, rutaBack, postServiciosList);
}

function postServiciosList(result, state) {
    //Maneje aquÃ­ la respuesta del servidor.
    if (state == "success") {
        var json = JSON.parse(result);
        if (json[0].msg == "exito") {

            for (var i = 1; i < Object.keys(json).length; i++) {
                var Servicios = json[i];
                //----------------- Para una tabla -----------------------
                document.getElementById("ServiciosList").appendChild(createTR(Servicios));
                //-------- Para otras opciones ver htmlBuilder.js ---------
            }
        } else {
            alert(json[0].msg);
        }
    } else {
        alert("Hubo un errror interno ( u.u)\n" + result);
    }
}

////////// VEHICULO_SERVICIOS \\\\\\\\\\
function preVehiculo_serviciosInsert(idForm) {
    //Haga aquÃ­ las validaciones necesarias antes de enviar el formulario.
    if (validarForm(idForm)) {
        var formData = $('#' + idForm).serialize();
        formData["ruta"] = "Vehiculo_serviciosInsert";
        enviar(formData, rutaBack, postVehiculo_serviciosInsert);
    } else {
        alert("Debe llenar los campos requeridos");
    }
}

function postVehiculo_serviciosInsert(result, state) {
    //Maneje aquÃ­ la respuesta del servidor.
    //Consideramos buena prÃ¡ctica no manejar cÃ³digo HTML antes de este punto.
    if (state == "success") {
        if (result == "true") {
            alert("Vehiculo_servicios registrado con Ã©xito");
        } else {
            alert("Hubo un errror en la inserciÃ³n ( u.u)\n" + result);
        }
    } else {
        alert("Hubo un errror interno ( u.u)\n" + result);
    }
}

function preVehiculo_serviciosList(container) {
    //Solicite informaciÃ³n del servidor
    cargaContenido(container, 'Vehiculo_serviciosList.html');
    var formData = {};
    formData["ruta"] = "Vehiculo_serviciosList";
    enviar(formData, rutaBack, postVehiculo_serviciosList);
}

function postVehiculo_serviciosList(result, state) {
    //Maneje aquÃ­ la respuesta del servidor.
    if (state == "success") {
        var json = JSON.parse(result);
        if (json[0].msg == "exito") {

            for (var i = 1; i < Object.keys(json).length; i++) {
                var Vehiculo_servicios = json[i];
                //----------------- Para una tabla -----------------------
                document.getElementById("Vehiculo_serviciosList").appendChild(createTR(Vehiculo_servicios));
                //-------- Para otras opciones ver htmlBuilder.js ---------
            }
        } else {
            alert(json[0].msg);
        }
    } else {
        alert("Hubo un errror interno ( u.u)\n" + result);
    }
}

////////// VEHICULOS \\\\\\\\\\
function preVehiculosInsert(idForm) {
    //Haga aquÃ­ las validaciones necesarias antes de enviar el formulario.
    if (validarForm(idForm)) {
        var formData = $('#' + idForm).serialize();
        formData["ruta"] = "VehiculosInsert";
        enviar(formData, rutaBack, postVehiculosInsert);
    } else {
        alert("Debe llenar los campos requeridos");
    }
}

function postVehiculosInsert(result, state) {
    //Maneje aquÃ­ la respuesta del servidor.
    //Consideramos buena prÃ¡ctica no manejar cÃ³digo HTML antes de este punto.
    if (state == "success") {
        if (result == "true") {
            alert("Vehiculos registrado con Ã©xito");
        } else {
            alert("Hubo un errror en la inserciÃ³n ( u.u)\n" + result);
        }
    } else {
        alert("Hubo un errror interno ( u.u)\n" + result);
    }
}

function preVehiculosList(container) {
    //Solicite informaciÃ³n del servidor
    cargaContenido(container, 'VehiculosList.html');
    var formData = {};
    formData["ruta"] = "VehiculosList";
    enviar(formData, rutaBack, postVehiculosList);
}

function postVehiculosList(result, state) {
    //Maneje aquÃ­ la respuesta del servidor.
    if (state == "success") {
        var json = JSON.parse(result);
        if (json[0].msg == "exito") {

            for (var i = 1; i < Object.keys(json).length; i++) {
                var Vehiculos = json[i];
                Vehiculos.viewHrefB = 'mostrarTodo("' + Vehiculos.id + '");';
                Vehiculos.deleteHrefB = 'mostrarEliminar("' + Vehiculos.id + '");';
                //----------------- Para una tabla -----------------------
                document.getElementById("VehiculosList").appendChild(createTR(Vehiculos));
                //-------- Para otras opciones ver htmlBuilder.js ---------
            }
        } else {
            alert(json[0].msg);
        }
    } else {
        alert("Hubo un errror interno ( u.u)\n" + result);
    }
}

function postVehiculosListTareas(result, state) {
    //Maneje aquÃ­ la respuesta del servidor.
    if (state == "success") {
        var json = JSON.parse(result);
        if (json[0].msg == "exito") {

            for (var i = 1; i < Object.keys(json).length; i++) {
                var Vehiculos = json[i];
                //----------------- Para una tabla -----------------------
                document.getElementById("VehiculosList").appendChild(createTR(Vehiculos));
                //-------- Para otras opciones ver htmlBuilder.js ---------
            }
        } else {
            alert(json[0].msg);
        }
    } else {
        alert("Hubo un errror interno ( u.u)\n" + result);
    }
}

////////// VENTAS_FACT \\\\\\\\\\
function preVentas_factInsert(idForm){
     //Haga aquÃ­ las validaciones necesarias antes de enviar el formulario.
    if(validarForm(idForm)){
    var formData=$('#'+idForm).serialize();
     formData["ruta"]="Ventas_factInsert";
    enviar(formData, rutaBack ,postVentas_factInsert);
    }else{
        alert("Debe llenar los campos requeridos");
    }
}

 function postVentas_factInsert(result,state){
     //Maneje aquÃ­ la respuesta del servidor.
     //Consideramos buena prÃ¡ctica no manejar cÃ³digo HTML antes de este punto.
        if(state=="success"){
                     if(result=="true"){            
            alert("Ventas_fact registrado con Ã©xito");
                     }else{
                        alert("Hubo un errror en la inserciÃ³n ( u.u)\n"+result);
                     }      }else{
            alert("Hubo un errror interno ( u.u)\n"+result);
        }
}

function preVentas_factList(container){
     //Solicite informaciÃ³n del servidor
     cargaContenido(container,'Ventas_factList.html'); 
     var formData = {};
     formData["ruta"]="Ventas_factList";
    enviar(formData, rutaBack ,postVentas_factList); 
}

 function postVentas_factList(result,state){
     //Maneje aquÃ­ la respuesta del servidor.
     if(state=="success"){
         var json=JSON.parse(result);
         if(json[0].msg=="exito"){

            for(var i=1; i < Object.keys(json).length; i++) {   
                var Ventas_fact = json[i];
                 Ventas_fact.deleteHrefB = 'mostrarEliminar("' + Ventas_fact.idventas_fact + '");';
                //----------------- Para una tabla -----------------------
                document.getElementById("Ventas_factList").appendChild(createTR(Ventas_fact));
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