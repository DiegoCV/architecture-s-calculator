data_firebase = {    
    arquitecturas : {},
    atributos: {},
    matriz_atributos:{},
    matriz_arquitecturas:{},
    puntaje_final:{}
};

function set_arquitecturas(arquitecturas){
    data_firebase['arquitecturas'] = arquitecturas;
}

function set_atributos(atributos){
    data_firebase['atributos'] = atributos;
}

function set_matriz_atributos(cardinalidad_matriz, matriz_original, matriz_normalizada, vector_pesos_matriz_normalizada, matriz_original_por_vector_pesos, landa_max,ic,ir,cr,cons){
    data_firebase['matriz_atributos'] = crear_matriz(cardinalidad_matriz, matriz_original, matriz_normalizada, vector_pesos_matriz_normalizada, matriz_original_por_vector_pesos, landa_max,ic,ir,cr,cons);
}

function set_matriz_arquitecturas(atributo,cardinalidad_matriz, matriz_original, matriz_normalizada, vector_pesos_matriz_normalizada, matriz_original_por_vector_pesos, landa_max,ic,ir,cr,cons){
    data_firebase['matriz_arquitecturas']['atributo_'+atributo] = crear_matriz(cardinalidad_matriz, matriz_original, matriz_normalizada, vector_pesos_matriz_normalizada, matriz_original_por_vector_pesos, landa_max,ic,ir,cr,cons);
}

function set_puntaje_final(puntaje_final){
    data_firebase['puntaje_final'] = puntaje_final;            
}
function crear_matriz(cardinalidad_matriz, matriz_original, matriz_normalizada, vector_pesos_matriz_normalizada, matriz_original_por_vector_pesos, landa_max,ic,ir,cr,cons){
    return {
        'cardinalidad_matriz' : cardinalidad_matriz,
        'matriz_original':matriz_original,
        'matriz_normalizada':matriz_normalizada,
        'vector_pesos_matriz_normalizada':vector_pesos_matriz_normalizada,
        'matriz_original_por_vector_pesos':matriz_original_por_vector_pesos,
        'landa_max':landa_max,
        'ic':ic,
        'ir':ir,
        'cr':cr,
        'co':cons  
    };
}

function guardar_data(){
    var t = {data:data_firebase};
    $.ajax({
        method: "POST",
        url: "https://nortcoding.com.co/core_calc/insertar_datos.php",
        data: JSON.stringify(t),        
    }).done(function( msg ) {
        console.log("Data Saved: " + msg );
    });
 
}