//Quitar esto. Estos son los
var attributesGlobal = [];
//"cascada","soap","blackboard"
var arquitecturesGlobal = [];

/*
* Construye los combos de atributos de calidad y arquitecturas
*/
function cargarInformacion(){
    $.getJSON("js/attributes.json", function(myData) {
        new Vue({
            el: '#cont-myAttributes',
            data: {
                todos: myData
            },
            methods:{
                addAttributesGlobal:function (argument) {                    
                    for(let i in this.todos){
                        for(let j in this.todos[i].attributes){
                            if(this.todos[i].attributes[j].uid == argument){
                                var index = isContenido(attributesGlobal, this.todos[i].attributes[j].name);                                                            
                                if (index > -1) {
                                     attributesGlobal.splice(index, 1);                                    
                                }else{
                                    attributesGlobal.push(this.todos[i].attributes[j].name);
                                }                              
                            }
                        }
                    }                    
                }
            }         
        });
        $('.i-checks').iCheck({
            checkboxClass: 'icheckbox_square-green',
            radioClass: 'iradio_square-green',
        });         
    });
    $.getJSON("js/arquitectures.json", function(myDat) {
        new Vue({
            el: '#cont-myArquitecturas',
            data: {
                todos: myDat
            },
            methods:{
                addArquitecturesGlobal:function(typeUID, argument){
                    var control = true;
                    for(let i in this.todos){
                        for(let j in this.todos[i].arquitectures){
                            if(this.todos[i].arquitectures[j].uid == argument){
                                if(control){
                                    var index = isContenido(arquitecturesGlobal, this.todos[i].arquitectures[j].name);                                                            
                                    if (index > -1) {
                                         arquitecturesGlobal.splice(index, 1);                                    
                                    }else{
                                        arquitecturesGlobal.push(this.todos[i].arquitectures[j].name);
                                    }
                                    control = false;
                                }                              
                            }
                        }
                    }

                    //Esto lo tengo que hacer para controlar la vista
                    for(let i in this.todos){
                        for(let j in this.todos[i].arquitectures){
                            if(this.todos[i].uid != typeUID && this.todos[i].arquitectures[j].uid == argument){
                                caja = document.getElementById("caja_"+this.todos[i].uid+"_"+argument);
                                if(caja.hidden){
                                    caja.hidden = false ;                            
                                }else{
                                    caja.hidden = true ;
                                }                                
                            }
                        }
                    }


                }
            }
        });
        $('.i-checks').iCheck({
            checkboxClass: 'icheckbox_square-green',
            radioClass: 'iradio_square-green',
        }); 
    });    
}

//Esto valida si esta contenido en un array que contiene la estructura del array global, en un futuro esto deberia arreglarse
function isContenido(arrayAttributes, nameAttribute) {
    for(let i in arrayAttributes){
        if(arrayAttributes[i] == nameAttribute){
            return i;
        }
    }
    return -1;
}

function construirTablas(argument) {
    new Vue({
      el: '#table-assest-attri',
      data: {
            tbodyId:"tbody_attri_1",
            attributes:attributesGlobal
        },
        methods:{
            evaluarTabla:function (event) {       
                cont_celda = event.target.innerText;                            
                if(validarContenido(cont_celda)){                            
                    event.target.blur(); 
                    fila = event.target.parentNode.sectionRowIndex;
                    columna = event.target.cellIndex;
                    f = document.getElementById("table-assest-attri");
                    myTbody = f.getElementsByTagName("tbody")[0];                            
                    insertarCampoEspejo(fila, columna, cont_celda, myTbody);                                                            
                    indices = calcularIndices(myTbody);
                    document.getElementById("attrib_IC").innerHTML = indices.ic; 
                    document.getElementById("attrib_IR").innerHTML = indices.ir;
                    document.getElementById("attrib_CR").innerHTML = indices.cr;
                    document.getElementById("attrib_CONS").innerHTML = indices.co;
                }                            
            }
        }
    });

    new Vue({
      el: '#arquitectures_cont',
      data: {
            //cant_attributes : 3,
            attributes:attributesGlobal,
            arquitectures:arquitecturesGlobal
        },
      methods:{
            validarTabla:function (index, event) {
                cont_celda = event.target.innerText;                            
                if(validarContenido(cont_celda)){                            
                    event.target.blur(); 
                    fila = event.target.parentNode.sectionRowIndex;
                    columna = event.target.cellIndex;                                                                
                    myTbody = document.getElementById("arq_tbody_id_"+ (index) );                                  
                    insertarCampoEspejo(fila, columna, cont_celda, myTbody);                                                            
                    indices = calcularIndices(myTbody);
                    document.getElementById("arq_IC_"+index).innerHTML = indices.ic; 
                    document.getElementById("arq_IR_"+index).innerHTML = indices.ir;
                    document.getElementById("arq_CR_"+index).innerHTML = indices.cr;
                    document.getElementById("arq_CO_"+index).innerHTML = indices.co;
                }
            }
        }
    });
    
    new Vue({
    el: '#table_final',
      data: {                        
            arquitectures:arquitecturesGlobal
        }
    });

    inicializarTablas();

}

function inicializarTablas(){
    f = document.getElementById("table-assest-attri");
    ff = f.getElementsByTagName("tbody")[0]
    insertarDiagonalPincipal(ff);     
    deshabilitarCuadrosBajoDiagonal(ff);    
    for (var i = 0; i < attributesGlobal.length; i++) {        
        my_id = "arq_tbody_id_"+(i);
        aa = document.getElementById(my_id);        
        insertarDiagonalPincipal(aa);     
        deshabilitarCuadrosBajoDiagonal(aa);
    }
}


function calcularIndices(myTbody) {
    var matrizOriginal = parsearTbody(myTbody);
    
    //Js tiende a tratar todo como global, por esa razon tuve que hacer una copia
    var copiaMatrizOriginal = copiarArray(matrizOriginal);
    
    var matrizNormalizada = normalizarMatriz(copiaMatrizOriginal);
    
    var myvectorPesos = vectorPesos(matrizNormalizada);

    var matrizOrigPorVectPes = matrizPorVector(matrizOriginal, myvectorPesos); 

    var cardinalidad = matrizOriginal.length;

    var myic = IC(sumarVector(matrizOrigPorVectPes), cardinalidad);    
    
    var myir = IR(cardinalidad);
    
    var mycr = CR(myic, myir);

    var cons = validarCR(mycr);

    return {
        ic: myic,
        ir: myir,
        cr:mycr,
        co: cons
    };
    
}

function validarCR(cr) {
    if(cr < 0.1 ){
        return "consistent";
    }else{
        return "unconsistent";
    }
}
     

function calcularPuntajes() {
    myVectoresArqui = obtenerVectoresPesos();
    f = document.getElementById("table-assest-attri");
    ff = f.getElementsByTagName("tbody")[0]
    myVectorAttr = calcularVectorPesosAPartirDelTbody(ff);
    solucion = matrizPorVector(myVectoresArqui, myVectorAttr);
    for (var i = 0; i < arquitecturesGlobal.length; i++) {
        document.getElementById("score_arq_"+i).innerHTML = solucion[i];    
    }
    
}    

/*
*   Recorre todos los tbodys disponibles de las arquitecturas y los devuelve sus vectores de pesos
*/
function obtenerVectoresPesos() {
    myArray = inicializarArr(attributesGlobal.length);
    for (var i = 0; i < attributesGlobal.length; i++) {        
        my_id = "arq_tbody_id_"+(i);
        mv = calcularVectorPesosAPartirDelTbody(document.getElementById(my_id));
        for (var j = 0; j < mv.length; j++) {
           // console.log(mv[j]);
            //w = myArray[j] + mv[j];
            myArray[j].push(mv[j]);            
        };
    }
    return myArray;
}

/*
* returna una matriz vacia
*/
function inicializarArr(n){
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr[i] = [];
    }
    return arr;
}

function calcularVectorPesosAPartirDelTbody(myTbody){
    myMatriz = parsearTbody(myTbody);        
    myMatrizNormalizada = normalizarMatriz(myMatriz);        
    return vectorPesos(myMatrizNormalizada);
}

/*
*  Se encarga de llenar la diagonal principal con 1/1
*/
function insertarDiagonalPincipal(myTbody) {
    var my_trs = myTbody.childNodes;          
    var cant_trs = my_trs.length;            
    for (var i = 0; i < cant_trs; i++) {
        var my_tds = my_trs[i].childNodes;                
        my_tds[i + 2].innerText = "1/1";
        my_tds[i + 2].setAttribute("contenteditable", false);
    }            
}

/*
*   Se encarga de quitarle el atributo editable a los cuadros bajo la linea principal
*   El usuario solo inserta los datos en la parte de arriba.
*   Los datos de abajo son el reflejo de arriba
*   <<ESTE METODO PUEDE OPTIMIZARSE MAS, ME DIO PEREZA: SORRY>>
*/
function deshabilitarCuadrosBajoDiagonal(myTbody) {
    var my_trs = myTbody.childNodes;          
    var cant_trs = my_trs.length;            
    for (var i = 0; i < cant_trs; i++) {
        var my_tds = my_trs[i].getElementsByTagName("td");
        for (var j = 1; j < my_tds.length; j++) {
            if(j <= i){
                my_tds[j].setAttribute("contenteditable", false);
            }
        }        
    }            
}

/*
*   Se encarga de comprobar que el contenido del ultimo cuadro concuenrde con el patron #/#
*   <<ESTO SE PUEDE HACER CON EXPRESION REGULAR, ME DIO: SORRY >>
*/
function validarContenido(cont){
    if(cont.length == 3){        
        a =  parseInt(cont.split('')[0]);
        b = cont.split('')[1];
        c = parseInt(cont.split('')[2]);
        return (Number.isInteger(a) && b == "/" && Number.isInteger(c));
    }else{
        return false;
    }
}


/*
*   Inserta el reflejo de la funcion en el campo de abajo
*/
function insertarCampoEspejo(fila_original, columna_original, text_original, myTbody){
    var fila_espejo = columna_original - 1;
    var columna_espejo = fila_original + 1;
    var text_espejo = text_original.split('').reverse().join('')
    var my_trs = myTbody.childNodes;          
    my_trs[fila_espejo].getElementsByTagName("td")[columna_espejo].innerText = text_espejo;    
}



/*
*   JAVASCRIPT te odio con toda mi alma
*/
function copiarArray(myArray){
    var arrayAux = [];
    for(let i in myArray){
        var e = []
        for(let j in myArray[i]){
            e.push(myArray[i][j]+0);
        }
        arrayAux.push(e);
    }
return arrayAux;
}









