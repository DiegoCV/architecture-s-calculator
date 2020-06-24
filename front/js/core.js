

function normalizarMatriz(matriz){	
	var i = 0;	
	sumatoriaColumnas = sumarElementosPorColumnas(matriz);
	while(i < matriz.length){
		var j = 0;
		while(j < matriz[i].length){
			matriz[i][j] = matriz[i][j] / sumatoriaColumnas[j];
			j = j + 1;
		}	
		j = 0;
		i = i + 1;
	}
	return matriz;
}

function sumarElementosPorColumnas(matriz){
	var i = 0;	
	var aux = inicializarArraysConCeros(matriz.length);
	while(i < matriz.length){
		var j = 0;
		while(j < matriz[i].length){			
			aux[j] = aux[j] + matriz[i][j];
			j = j + 1;
		}		
		j = 0;		
		i = i + 1;
	}
	return aux;
}

/*Puto js de mierda, las cosas que me obliga hacer*/
function inicializarArraysConCeros(tamaño) {
	var myArray = [];
	var i = 0;
	while(i < tamaño){
		myArray.push(0);
		i = i + 1;
	}
	return myArray;
}

/*
*	Una vez la matriz esta normalizada se suman todos los elementos de cada fila y se dividen sobre 
*   la cantidad de elementos
*/
function vectorPesos(matriz){
	var i = 0;
	var j = 0;
	var aux = []
	while(i < matriz.length){
		var sum = 0;
		while(j < matriz[i].length){
			sum = sum + matriz[i][j];
			j = j + 1;
		}	
		aux.push(sum/j);
		j = 0;
		i = i + 1;
	}
	return aux;
}

/*
*	multiplicacion de vector por matriz, lo mismo que se hace en algebra
* 	ojo, en este caso sabemos de antemano que el tamaño del vector coincide con el de cada fila de la matriz
*	ESTO NO ES NECESARIAMENTE UN METODO GENERICO
*   return un vector de fila
*/
function matrizPorVector(matriz, vector){
	var vectorFila = [];
	var i = 0;
	var j = 0;
	while(i < matriz.length){
		var suma = 0;
		while(j < matriz[i].length){			
			suma = suma + ( matriz[i][j] * vector[j] );
			j = j + 1;
		}
		vectorFila.push(suma);
		j = 0;
		i = i + 1;
	}
	return vectorFila;
}

/*
*	Suma todos los elementos de un vector
*/
function sumarVector(vector){
	var i = 0;
	var suma = 0;
	while(i < vector.length){
		suma = suma + vector[i];
		i = i + 1;
	}
	return suma;
}

/*
*	Calcula el valor de landaMax
*   vecMaxOrgVecProm = Es el vector resultado de multiplicar la matriz original por el vector de pesos promedio de la matriz normalizada.
*   vecPromMatrizNormal = Es el vector de pesos promedio obtenido de la matriz normalizada.
*/

function landaMax(vecMaxOrgVecProm, vecPromMatrizNormal){
	var i = 0;
	var suma = 0;
	while(i < vecMaxOrgVecProm.length){
		suma += vecMaxOrgVecProm[i] / vecPromMatrizNormal[i];
		i = i + 1;
	}
	return suma/vecMaxOrgVecProm.length;
}


/*
*	Calcula el indice de consistencia
*	nMax = la suma de todos los elementos del vector resultande de multiplicar la matriz original por el vector de pesos
*	c = cardinalidad de la matriz
*/
function IC(nMax, c) {
	return (nMax - c)/( c - 1);
}

/*Calcula el ratio de consistencia, el cual consiste en dividir el indice de consistencia(IC) sobre el indice de consistencia aleatoria(IR)
*
*/
function CR(IC, IR) {
	return IC/IR;
}


/*
*	returna el indice de consistencia aleatoria(IR) basado en la tabla del articulo Satty, T. L., 2004. Decision making - The analytic hierarchy and network processes (AHP/ANP). Journal of systems science and systems engineering, Vol. 13, No.
*
*	OJO para tamaños de matriz superior a 10 solo devuelvo el ultimo valor
*/
function IR(n) {
	//    0,1,2,3,    4,    5,    6,    7,    8,   9,    10
	ir = [0,0,0,0.52, 0.89, 1.11, 1.25, 1.35, 1.4, 1.45, 1.49];
	if (n > 10) {
		return ir[10];
	}else{
		return ir[n];
	}

}


/*
 * Se encarga de convertir el cuerpo de una tabla en una matriz de numeros.
 * Esto se hace con el fin de poder iterar sobre los datos y no sobre los elementos de vista
 */
function parsearTbody(myTbody){
	var my_trs = myTbody.childNodes;          
    var cant_trs = my_trs.length;            
    var myTableArray = [];
    for (var i = 0; i < cant_trs; i++) {
    	var my_tds = my_trs[i].getElementsByTagName("td");
    	var array_aux = [];
    	for (var j = 1; j < my_tds.length; j++) {
    		g = parsearFraccion(my_tds[j].innerText);    		
    		array_aux.push(g);  
    	}
    	myTableArray.push(array_aux);		    
    }            
	return myTableArray;
}

/*
 * Convierte un tbody en una array, la diferencia con el primero es que este si convierte todo los campos
 * @param {type} myTbody
 * @returns {Array|parsearTbody2.myTableArray}
 */
function parsearTbody2(myTbody){
    var my_trs = myTbody.childNodes;          
    var cant_trs = my_trs.length;            
    var myTableArray = [];
    for (var i = 0; i < cant_trs; i = i + 1) {
    	var my_tds = my_trs[i].getElementsByTagName("td");
    	var array_aux = [];
    	for (var j = 0; j < my_tds.length; j++) {    		
            array_aux.push(my_tds[j].innerText);  
    	}
    	myTableArray.push(array_aux);		    
    }            
    return myTableArray;
}
/*
* Dentro de cada tabla se supone que hay una fraccion escrita correctamente.
* Este metodo toma ese texto y lo convierte en numero
*/
function parsearFraccion(fraccion) {
	if(fraccion.length < 3){
		return 0;
	}else{
		var numerador = parseInt(fraccion.split("/")[0]);
		var denominador = parseInt(fraccion.split("/")[1]);
		return numerador / denominador;	
	}
}










