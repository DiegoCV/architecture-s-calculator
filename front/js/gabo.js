class Component {

  /*
  * tagName(1_caso) = Es el tipo de etiqueta para el elemento principal dentro del component
  * tagName(2_caso) = Es un object de tipo Element inyectado 
  * atributtes = Es un array con todos los atributos para asignarle al componenete
  */
	constructor(tagName = null, myAtributtes = null){
  		if(tagName != null){
  			if(this.isElement(tagName)){
  				this.myComponent = tagName;
  			}else{
  				this.myComponent = document.createElement(tagName);
  			}
  		}

      if(myAtributtes != null){
        if(Array.isArray(myAttributes)){
          setAttributes(myAttributes);
        }

      }  	
  	}

  /*
  * o = object de tipo element
  * Valida si el objecto o es tipo element
  */
  isElement(o){
  	return (o instanceof Element);
  }

  setClass(clase) {
    this.myComponent.setAttribute('class', clase);
  }

  setText(text){
  	var newContent = document.createTextNode(text); 
  	this.myComponent.appendChild(newContent);
  }

  getVal(){
  	return this.myComponent.getValue()  
  }

  setElemnent(elemento){
  	this.myComponent = elemento;
  }

  getElemnent(){
  	return this.myComponent;
  }

  //A partir de aqui vienen todos los metodos por etiquetas

//_-------------------------
  setTr(myAttributes){  
      concatElement(this.tr(myAttributes));
  }

  /*
  * returna el ultimo tr concatendado
  */
  getTr(){
  	return getLastElementByTagName("tr");
  }
//----------------------------

  setLabel(myAttributes){
    concatElement(this.label(myAttributes));
  }

  getLabel(){
    return getLastElementByTagName("label");
  }

  /*
  * returna el ultimo elemento concatendado de acuerdo a su etiqueta
  */
  getLastElementByTagName(tagName){
    var myElements = this.myComponent.getElementsByTagName(tagName);
    var last_id = myElements.length - 1;
    return myElements[last_id];
  
  }

  //////////////////////////////////////////////////

  /*
  *	Utiliza la funcion appenchild para insertar uno o varios objetos de tipo Component hijos de forma horizontal
  * diccionario/ forma horizontal: todos los componentes estan bajo un mismo nivel.
  */
  concatComponents(componentes){
  	for(let i in componentes){
  		this.concatComponent(componentes[i]);
  	}
  }


  concatComponent(componente){
  	this.componentChilds.push(componente);
  }


  /*
  *	Utiliza la funcion appenchild para insertar uno o varios elements hijos de forma horizontal
  * diccionario/ forma horizontal: todos los componentes estan bajo un mismo nivel.
  */
  concatElements(elementos){
  	for(let i in elementos){
  		this.concatElement(elementos[i]);
  	}
  }

  concatElement(elemento){
  	this.myComponent.appenchild(elemento);
  }

  setObjectStyle(myStyle){
  	var keys = myStyle.getKeys();
  	for(let i in keys){
  		this.myComponent.setAttribute(keys[i], myStyle.getAtributo(keys[i]));
  	}
  }

  /*
  *	Utilizando el metodo setAttribute de javaScritp, se encarga de insertar los atributos
  */
  setAttributes(myAttributes){
    this.myComponent = this.setAttributesPrivate(this.myComponent, myAttributes);
  }

//-----------------
  setAttributesPrivate(myElement, myAttributes){
    if(isArrayAttributes(myAttributes)){
      var keys = Object.keys(myAttributes);
      for(let i in keys){
        myElement.setAttribute(keys[i], myAttributes[keys[i]]);
      }
    }
    return myElement;
  }


  isArrayAttributes(myAttributes){
    if(myAttributes != null){
      return Array.isArray(myAttributes);
    }
    return false;
  }
//----------------------

  /*
  *	Utilizando el metodo setAttribute de javaScritp, se encarga de insertar el atributo dentro del myComponent
  */
  setAttribute(myAttribute, myVal){
  	this.myComponent.setAttribute(myAttribute, myVal);
  }

  setAttributePrivate(){

  }


///////////////////////////////////////////////////
  /*
  *	Metodos constructores
  */
  static div(){
  	return document.createElement("div");
  }

  static label(){
  	return document.createElement("label");
  }

  static tr(myAttributes){
    var myTr = document.createElement("tr");
    myTr = setAttributesPrivate(myTr, myAttributes);
    return myTr;
  }

  static label(myAttributes){
    var myLabel = document.createElement("label");
    myLabel = setAttributesPrivate(myLabel, myAttributes);
    return myLabel;
  }

  static createComponentByElementId(id){
  	this.myComponent = document.getElementById(id);
  	return myComponent;
  }

  //////////////////////////////////////////////////









}