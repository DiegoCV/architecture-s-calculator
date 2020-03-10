//metodo carga una imagen cargando
function loading(rta) {
    $(rta).html("<span class='fa fa-refresh fa-refresh-animate fa-2x'></span> Validando...");
}

//metodo para creacion de objecto ajax
function ajax(url, datos, rta) {
    var ajax = $.get(url, datos, function (respuesta) {
        $(rta).html(respuesta);
    });
    return ajax;
}

function facturas_listas() {  
    var url = "Factura_List.php";
    var datos = {};
    var rta = "#mostrarcontenido";
    ajax(url, datos, rta);
     enviar("", '../back/controller/Factura_listAll.php', postFacturasList);
}

function facturas_Devolucion() {  
    var url = "resportes_cc.php";
    var datos = {};
    var rta = "#mostrarcontenido";
    ajax(url, datos, rta);
     enviar("", '../back/controller/Factura_listAll.php', postFacturasList);
}

function reciboPorAlquiler() {  
    var url = "reciboPorAlquiler.html";
    var datos = {};
    var rta = "#mostrarcontenido";
    ajax(url, datos, rta);
}

//function ValidarNit(nit) {
//    var url = "./php/validarnit.php?nit=" + nit;
//    var datos = {};
//    var rta = "#validanit";
//    ajax(url, datos, rta);
//}
//
//function Persona_Registrar() {  /**  mostrar formularios  */
//    var url = "PersonaInsert.html";
//    var datos = {};
//    var rta = "#mostrarcontenido";
//    ajax(url, datos, rta);
//
//}
// 
//
// 
//function Persona_Listar() {  /**  tabla de datos  */
//    var url = "Persona_list.html";
//    var datos = {};
//    var rta = "#mostrarcontenido";
//    ajax(url, datos, rta);
//
//enviar("",'../back/controller/empleado_lis.php',postEmpleadoList); 
//}
//
//
//function Buscar_cc_2(empresa) {  /**  formulario con envio de datos  */
//
//    var url = "resportes_list_cc_tabla.html";
//    var datos = {};
//    var rta = "#mostrarcontenido2";
//    ajax(url, datos, rta);
//   
//enviar("",'../back/controller/reporte_Cedula.php?empresa='+ empresa,postPersonaList); 
// 
//}

//<editor-fold defaultstate="collapsed" desc=" **********   Metodos Clientes *********** ">


function principal() {  /**  tabla de datos  */
    var url = "principal.html";
    var datos = {};
    var rta = "#mostrarcontenido";
    ajax(url, datos, rta);
//enviar(formData, rutaBack ,postClientesList); 
    //enviar("", '../back/controller/Cliente_list.php', postClienteList);
}

function referencias() {  /**  tabla de datos  */
    var url = "referencias.html";
    var datos = {};
    var rta = "#mostrarcontenido";
    ajax(url, datos, rta);
//enviar(formData, rutaBack ,postClientesList); 
    //enviar("", '../back/controller/Cliente_list.php', postClienteList);
}

function contactos() {  /**  tabla de datos  */
    var url = "contactos.html";
    var datos = {};
    var rta = "#mostrarcontenido";
    ajax(url, datos, rta);
//enviar(formData, rutaBack ,postClientesList); 
    //enviar("", '../back/controller/Cliente_list.php', postClienteList);
}

function Mecanicos_Listar() {  /**  tabla de datos  */
    var url = "Mecanicos_list.php";
    var datos = {};
    var rta = "#mostrarcontenido";
    ajax(url, datos, rta);
//enviar(formData, rutaBack ,postClientesList); 
    enviar("", '../back/controller/Mecanicos_List.php', postMecanicosList);
}

function Clientes_Registrar() {  /**  tabla de datos  */
    var url = "ClientesInsert.php";
    var datos = {};
    var rta = "#mostrarcontenido";
    ajax(url, datos, rta);

//enviar("",'../back/controller/empleado_lis.php',postEmpleadoList); 
}

function Productos_Registrar() {  /**  tabla de datos  */
    var url = "ProductosInsert.php";
    var datos = {};
    var rta = "#mostrarcontenido";
    ajax(url, datos, rta);

//enviar("",'../back/controller/empleado_lis.php',postEmpleadoList); 
}

function Productos_Listar() {  /**  tabla de datos  */
    var url = "Productos_List_tabla.php";
    var datos = {};
    var rta = "#mostrarcontenido";
    ajax(url, datos, rta);
//enviar(formData, rutaBack ,postClientesList); 
    enviar("", '../back/controller/Producto_list.php',postProductoList);
}

function Ventas_Listar() {  /**  tabla de datos  */
    var url = "VentasInsert.php";
    var datos = {};
    var rta = "#mostrarcontenido";
    ajax(url, datos, rta);
//enviar(formData, rutaBack ,postClientesList); 
    //enviar("", '../back/controller/Productos_Detalles.php', postVentasList);
}

function Ventas_Registrar() {  
    var url = "Ventas_insert.php";
    var datos = {};
    var rta = "#mostrarcontenido";
    ajax(url, datos, rta);
}

function Vehiculo_Listar() {  /**  tabla de datos  */
    var url = "Vehiculos_list.php";
    var datos = {};
    var rta = "#mostrarcontenido";
    ajax(url, datos, rta);
//enviar(formData, rutaBack ,postClientesList); 
    enviar("",'../back/controller/Vehiculos_List.php', postVehiculosList);
}

function Mecanicos_Vista() {  /**  tabla de datos  */
    var url = "Mecanicos_Vista.php";
    var datos = {};
    var rta = "#mostrarcontenido";
    ajax(url, datos, rta);

}

function Tareas_Mecanicos() {  /**  tabla de datos  */
    var url = "Tareas_list.php";
    var datos = {};
    var rta = "#mostrarcontenido";
    ajax(url, datos, rta);
    
    enviar("",'../back/controller/Tareas_mec_list.php', postVehiculosListTareas);
}

function Asignar_Servicios() {  /**  tabla de datos  */
    var url = "Servicios_carros.php";
    var datos = {};
    var rta = "#mostrarcontenido";
    ajax(url, datos, rta);

}

function Prueba_Foto() {  /**  tabla de datos  */
    var url = "prueba_foto.php";
    var datos = {};
    var rta = "#mostrarcontenido";
    ajax(url, datos, rta);

}


function Vehiculo_Registrar() {  /**  tabla de datos  */
    var url = "Vehiculo_Insert.php";
    var datos = {};
    var rta = "#mostrarcontenido";
    ajax(url, datos, rta);

}



//</editor-fold>

//<editor-fold defaultstate="collapsed" desc=" **********   Metodos Administrador *********** ">


function Administrador_Listar() {  /**  tabla de datos  */
    var url = "Administrador_Listar.php";
    var datos = {};
    var rta = "#mostrarcontenido";
    ajax(url, datos, rta);
//enviar(formData, rutaBack ,postClientesList); 
    enviar("", '../back/controller/Admin_list.php', postAdministradorsList);
}

function Administrador_Registrar() {  /**  tabla de datos  */
    var url = "Administrador_Registrar.php";
    var datos = {};
    var rta = "#mostrarcontenido";
    ajax(url, datos, rta);

//enviar("",'../back/controller/empleado_lis.php',postEmpleadoList); 
}


//</editor-fold>


//<editor-fold defaultstate="collapsed" desc="VENTAS">
function Productos_Vender(emp) {  /**  tabla de datos  */
    var url = "Productos_venta.php";
    var datos = {};
    var rta = "#mostrarcontenido2";
    ajax(url, datos, rta);
//enviar(formData, rutaBack ,postClientesList); 
  enviar("",'../back/controller/Ventas_fact_listall_xFact.php?emp='+emp,postVentas_factList); 
}

function Mecanicos_Vender(emp) {  /**  tabla de datos  */
    var url = "Mecanicos_venta.php";
    var datos = {};
    var rta = "#mostrarcontenido2";
    ajax(url, datos, rta);
//enviar(formData, rutaBack ,postClientesList); 
  enviar("",'../back/controller/Ventas_fact_listall_xFact.php?emp='+emp,postVentas_factList); 
}
//</editor-fold>


function detalles() {  /**  tabla de datos  */
    var url = "detalle.php";
    var datos = {};
    var rta = "#mostrarcontenido";
    ajax(url, datos, rta);
//enviar(formData, rutaBack ,postClientesList); 
//  enviar("",'../back/controller/Ventas_fact_listall_xFact.php?emp='+emp,postVentas_factList); 
}


    function ActivarEditar(){
        
  
      document.getElementById('agregarProd').disabled=false;
//      document.getElementById('editar').disabled=true;
//  $( "input:radio" ).on("click",function(){
//  $("input[type=submit]").removeAttr("disabled"); 
//  });
     
   
};
//</editor-fold>
