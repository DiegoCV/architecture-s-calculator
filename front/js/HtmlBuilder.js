/*
 -------Creado por-------
 \(x.x )/ Anarchy \( x.x)/
 ------------------------
 */

//    ¿Eres capaz de hackear mi Facebook?  \\

/*
 Construye una fila de tabla <TR></TR> con los atributos de la entidad obj
 
 ----------------- Para una tabla --------------------------
 
 document.getElementById("myTable").appendChild(createTR(entity));
 
 ----------------- Para una tabla con update/delete  ------------
 
 entity.updateHref='javascript:preUpdateEntity("'+entity.keyAttb+'");';
 entity.deleteHref='javascript:preDeleteEntity("'+entity.keyAttb+'");';
 document.getElementById("myTable").appendChild(createTR(entity));
 
 */

function createTR(obj) {
    var tr = document.createElement("TR");
    var tooltip = ''
    var aligntext = ''
    for (var attb in obj) {
        var td = document.createElement("TD");
        if (attb == "updateHref") {
            var a = document.createElement('A');
            a.setAttribute('href', obj[attb]);
            var span = document.createElement('SPAN');
            span.classList.add("glyphicon");
            span.classList.add("glyphicon-pencil");
            a.appendChild(span);
            td.appendChild(a);
        } else if (attb == "deleteHref") {
            var a = document.createElement('A');
            a.setAttribute('href', obj[attb]);
            var span = document.createElement('SPAN');
            span.classList.add("glyphicon");
            span.classList.add("glyphicon-remove");
            a.appendChild(span);
            td.appendChild(a);
        } else if (attb == "updateHrefB") {
            var a = document.createElement('A');
            a.setAttribute('onclick', obj[attb]);
            var span = document.createElement('SPAN');
            span.classList.add("glyphicon");
            span.classList.add("glyphicon-edit");
            tooltip = "Editar";
            a.appendChild(span);
            td.appendChild(a);
        } else if (attb == "viewHrefB") {
            var a = document.createElement('A');
            a.setAttribute('onclick', obj[attb]);
            var span = document.createElement('SPAN');
            span.classList.add("glyphicon");
            span.classList.add("glyphicon-zoom-in");
            
            aligntext = 'text-center'
            tooltip = 'Editar'
            a.appendChild(span)
            
//            a.appendChild(span);
//            tooltip = "ver";
            td.appendChild(a);
        } else if (attb == "deleteHrefB") {
            var a = document.createElement('A');
            a.setAttribute('onclick', obj[attb]);
            var span = document.createElement('SPAN');
            span.classList.add("glyphicon");
            span.classList.add("glyphicon-trash");
            a.appendChild(span);
            td.appendChild(a);
        } else if (attb == "fileHrefB") {
            var a = document.createElement('A');
            a.setAttribute('onclick', obj[attb]);
            var span = document.createElement('SPAN');
            span.classList.add("glyphicon");
            span.classList.add("glyphicon-cloud-upload");
            a.appendChild(span);
            td.appendChild(a);
        } else if (attb == "cargoHrefB") {
            var a = document.createElement('A');
            a.setAttribute('onclick', obj[attb]);
            var span = document.createElement('SPAN');
            span.classList.add("glyphicon");
            span.classList.add("glyphicon-credit-card");
            a.appendChild(span);
            td.appendChild(a);
        } else {
            var textNode = document.createTextNode(obj[attb]);
            td.appendChild(textNode);
        }
        tr.appendChild(td);
    }
    return tr;
}

function scripttable() {

    $(document).ready(function () {
        $('.dataTables-example').DataTable({
            pageLength: 25,
            responsive: true,
            dom: '<"html5buttons"B>lTfgitp',
            buttons: [
                {extend: 'copy'},
                {extend: 'csv'},
                {extend: 'excel', title: 'ExampleFile'},
                {extend: 'pdf', title: 'ExampleFile'},

                {extend: 'print',
                    customize: function (win) {
                        $(win.document.body).addClass('white-bg');
                        $(win.document.body).css('font-size', '10px');

                        $(win.document.body).find('table')
                                .addClass('compact')
                                .css('font-size', 'inherit');
                    }
                }
            ]

        });

    });


}

/*
 Construye un option para ser incluido en un input <SELECT></SELECT>
 con un valor y una texto
 
 //Antes de agregar objetos debe limpiarse el select:
 var mySelect=document.getElementById("mySelect");
 removeAllChildren(mySelect);
 for(json...){
 // y se agregan las nuevas opciones
 mySelect.appendChild(createOPTION(Entity.valueAttb,Entity.textAttb));
 }
 
 */
function createOPTION(value, text) {
    var option = document.createElement("OPTION");
    option.setAttribute("value", value);
    var textNode = document.createTextNode(text);
    option.appendChild(textNode);
    return option;
}

/*
 Construye un item de lista <LI></LI> para ser incluido en una lista <UL></UL>
 con un texto y enlace
 
 //Antes de agregar objetos debe limpiarse la lista:
 var myList = document.getElementById("myList");
 removeAllChildren(myList);
 for(json...){
 // y se agregan las nuevas opciones
 var href = 'javascript:preSelectEntity("'Entity+.keyAttb+'");'
 myList.appendChild(createLI(Entity.textAttb,href));
 }
 
 */
function createLI(text, href) {
    var li = document.createElement("LI");
    var a = document.createElement('A');
    a.setAttribute('href', href);
    var textNode = document.createTextNode(text);
    a.appendChild(textNode);
    li.appendChild(a);
    return li;
}


/*
 Remueve todos los hijos de un nodo HTML
 Ãštil para Selects y listas.
 No es necesario para tablas.
 */
function removeAllChildren(obj) {
    while (obj.firstChild) {
        obj.removeChild(obj.firstChild);
    }
}


function createTR1(obj, id, limit) {
    var cont = 0
    var tooltip = ''
    var aligntext = ''
    var tr = document.createElement('TR')
    tr.setAttribute('role', 'row')

    for (var attb in obj) {
        cont++
        var td = document.createElement('TD')
        if (attb == 'updateHref') {
            td.style = 'padding-right:20px;'
            var a = document.createElement('A')
            a.setAttribute('href', obj[attb])
            var span = document.createElement('SPAN')
            span.classList.add('glyphicon')
            span.classList.add('glyphicon-pencil')
            aligntext = 'text-center'
            tooltip = 'Editar'
            a.appendChild(span)
            td.appendChild(a)
        } else if (attb == 'deleteHref') {
            td.style = 'padding-right:20px;'
            var a = document.createElement('A')
            a.setAttribute('href', obj[attb])
            var span = document.createElement('SPAN')
            span.classList.add('glyphicon')
            span.classList.add('glyphicon-remove')
            aligntext = 'text-center'
            tooltip = 'Eliminar'
            a.appendChild(span)
            td.appendChild(a)
        } else if (attb == 'updateHrefB') {
            td.style = 'padding-right:20px;'
            var a = document.createElement('A')
            a.setAttribute('onclick', obj[attb])
            a.id = id
            if (obj[attb] !== '') {
                // a.style = 'color:#F6102C;'
            }
            // a.style = ''
            var span = document.createElement('SPAN')
            span.classList.add('glyphicon')
            span.classList.add('glyphicon-edit')
            aligntext = 'text-center'
            tooltip = 'Editar'
            a.appendChild(span)
            td.appendChild(a)
        } else if (attb == 'viewHrefB') {
            td.style = 'padding-right:20px;'
            var a = document.createElement('A')
            a.setAttribute('onclick', obj[attb])
            a.id = id
            a.style = ''
            var span = document.createElement('SPAN')
            span.classList.add('glyphicon')
                // span.classList.add('glyphicon-zoom-in')
            span.classList.add('glyphicon-eye-open')
            aligntext = 'text-center'
            tooltip = 'Ver'
            a.appendChild(span)
            td.appendChild(a)
        } else if (attb == 'deleteHrefB') {
            td.style = 'padding-right:20px;'
            var a = document.createElement('A')
            a.setAttribute('onclick', obj[attb])
            a.id = id
            a.style = ''
            var span = document.createElement('SPAN')
            span.classList.add('glyphicon')
            span.classList.add('glyphicon-trash')
            aligntext = 'text-center'
            tooltip = 'Eliminar'
            a.appendChild(span)
            td.appendChild(a)
        } else if (attb == 'fileHrefB') {
            td.style = 'padding-right:20px;'
            var a = document.createElement('A')
            a.id = id
            a.style = ''
            a.setAttribute('onclick', obj[attb])
            var span = document.createElement('SPAN')
            span.classList.add('glyphicon')
            span.classList.add('glyphicon-cloud-upload')
            aligntext = 'text-center'
            tooltip = 'Subir'
            a.appendChild(span)
            td.appendChild(a)
        } else if (attb == 'hiddenHrefB') {
            td.style = 'padding-right:20px;'
            var div = document.createElement('DIV')
                // div.setAttribute('visible', 'false')
            var a = document.createElement('A')
            a.id = id
            a.style = ''
            a.setAttribute('onclick', obj[attb])
            var span = document.createElement('SPAN')
            span.classList.add('glyphicon')
            span.classList.add('glyphicon-cloud-upload')
            aligntext = 'text-center'
            tooltip = 'Subir'
            a.appendChild(span)
            div.appendChild(a)
            td.appendChild(div)
        } else {
            if (limit != 0) {
                if (cont !== limit) {
                    aligntext = 'text-left'
                    var textNode = document.createTextNode(obj[attb])
                    td.appendChild(textNode)
                }
            } else {
                aligntext = 'text-left'
                var textNode = document.createTextNode(obj[attb])
                td.appendChild(textNode)
            }
        }
        if (limit != 0) {
            if (cont !== limit) {
                td.className = '' + aligntext
                td.setAttribute('data-toggle', 'tooltip')
                td.setAttribute('data-placement', 'right')
                td.setAttribute('title', tooltip)
                td.setAttribute('data-original-title', tooltip)
                tr.appendChild(td)
            }
        } else {
            td.className = '' + aligntext
            td.setAttribute('data-toggle', 'tooltip')
            td.setAttribute('data-placement', 'right')
            td.setAttribute('title', tooltip)
            td.setAttribute('data-original-title', tooltip)
            tr.appendChild(td)
        }
    }

    return tr
}

function createTR2(obj, id, limit) {
    var cont = 0
    var tooltip = ''
    var aligntext = ''
    var tr = document.createElement('TR')
    tr.setAttribute('role', 'row')
    for (var attb in obj) {
        cont++
        var td = document.createElement('TD')
        if (attb == 'updateHref') {
            td.style = 'padding-right:20px;'
            var a = document.createElement('A')
            a.setAttribute('href', obj[attb])
            var span = document.createElement('SPAN')
            span.classList.add('glyphicon')
            span.classList.add('glyphicon-pencil')
            aligntext = 'text-center'
            tooltip = 'Editar'
            a.appendChild(span)
                // td.appendChild(a)
        } else if (attb == 'deleteHref') {
            td.style = 'padding-right:20px;'
            var a = document.createElement('A')
            a.setAttribute('href', obj[attb])
            var span = document.createElement('SPAN')
            span.classList.add('glyphicon')
            span.classList.add('glyphicon-remove')
            aligntext = 'text-center'
            tooltip = 'Eliminar'
            a.appendChild(span)
                // td.appendChild(a)
        } else if (attb == 'updateHrefB') {
            td.style = 'padding-right:20px;'
            var a = document.createElement('A')
            a.setAttribute('onclick', obj[attb])
            a.id = id
            if (obj[attb] !== '') {
                // a.style = 'color:#F6102C;'
            }
            // a.style = ''
            var span = document.createElement('SPAN')
            span.classList.add('glyphicon')
            span.classList.add('glyphicon-edit')
            aligntext = 'text-center'
            tooltip = 'Editar'
            a.appendChild(span)
                // td.appendChild(a)
        } else if (attb == 'viewHrefB') {
            td.style = 'padding-right:20px;'
            var a = document.createElement('A')
            a.setAttribute('onclick', obj[attb])
            a.id = id
            a.style = ''
            var span = document.createElement('SPAN')
            span.classList.add('glyphicon')
                // span.classList.add('glyphicon-zoom-in')
            span.classList.add('glyphicon-eye-open')
            aligntext = 'text-center'
            tooltip = 'Ver'
            a.appendChild(span)
                // td.appendChild(a)
        } else if (attb == 'deleteHrefB') {
            td.style = 'padding-right:20px;'
            var a = document.createElement('A')
            a.setAttribute('onclick', obj[attb])
            a.id = id
            a.style = ''
            var span = document.createElement('SPAN')
            span.classList.add('glyphicon')
            span.classList.add('glyphicon-trash')
            aligntext = 'text-center'
            tooltip = 'Eliminar'
            a.appendChild(span)
                // td.appendChild(a)
        } else if (attb == 'fileHrefB') {
            td.style = 'padding-right:20px;'
            var a = document.createElement('A')
            a.id = id
            a.style = ''
            a.setAttribute('onclick', obj[attb])
            var span = document.createElement('SPAN')
            span.classList.add('glyphicon')
            span.classList.add('glyphicon-cloud-upload')
            aligntext = 'text-center'
            tooltip = 'Subir'
            a.appendChild(span)
                // td.appendChild(a)
        } else if (attb == 'hiddenHrefB') {
            td.style = 'padding-right:20px;'
            var div = document.createElement('DIV')
                // div.setAttribute('visible', 'false')
            var a = document.createElement('A')
            a.id = id
            a.style = ''
            a.setAttribute('onclick', obj[attb])
            var span = document.createElement('SPAN')
            span.classList.add('glyphicon')
            span.classList.add('glyphicon-cloud-upload')
            aligntext = 'text-center'
            tooltip = 'Subir'
            a.appendChild(span)
            div.appendChild(a)
                // td.appendChild(div)
        } else {
            if (cont !== limit) {
                aligntext = 'text-left'
                var textNode = document.createTextNode(obj[attb])
                td.appendChild(textNode)
            }
        }
        if (cont !== limit) {
            td.className = '' + aligntext
            td.setAttribute('data-toggle', 'tooltip')
            td.setAttribute('data-placement', 'right')
            td.setAttribute('title', tooltip)
            td.setAttribute('data-original-title', tooltip)
            tr.appendChild(td)
        }
    }
    return tr
}
//That`s all folks!