"use strict"

function error (){}; 
error.prototype = new error(); //hereda del objeto error
error.prototype.constructor = error(); // creamos un constructor para error
error.prototype.toString = function(){
    return  this.nombre  + " : " + this.mensaje;
};

function ningunaInstancia(){ //creacion del error ningunaInstancia
    this.nombre = "ningunaInstancia";
    this.mensaje = "El elemento no es una Persona";
}

ningunaInstancia.prototype = new error(); 
ningunaInstancia.prototype.constructor = ningunaInstancia; 

function vacio(){ //creacion del error vacio
    this.nombre = "Vacio";
    this.menesaje = "La lista esta vacia";
}

vacio.prototype = new error(); 
vacio.prototype.constructor = vacio; 


function lleno(){ //crecion del error lleno
    this.nombre = "Lleno";
    this.mensaje = "La lista esta llena";
}

lleno.prototype = new error(); 
lleno.prototype.constructor = lleno; 

function fueraTamanho(posicion){ //creacion del error fueraTamanho
    this.nombre = "fueraTamanho";
    this.mensaje = "Esa posicion no se encuentra dentro del rango";
}

fueraTamanho.prototype = new error();
fueraTamanho.prototype.constructor = fueraTamanho;


function posicionIncorrecta(){ //creacion de la posicionIncorrecta
    this.nombre = "posicionIncorrecta";
    this.mensaje = "La posicion tiene que ser un numero";
}

posicionIncorrecta.prototype = new error(); 
posicionIncorrecta.prototype.constructor = posicionIncorrecta; 


function Persona(nombre, apellido) {
	this.nombre = nombre; 
	this.apellido = apellido; 
	this.nombreCompleto = function(){
		return this.nombre + " " + this.apellido;
	}
}

function Lista (){
	var lista = [];
	var MAX_ELEMENTO = 5;
	
	this.crear = function(){ //Funcion create. Crea la lista vacía con una determinada longitud que ya esta dada
		var lista = [];
		return lista;
	};

	this.estaVacio =  function(){ //Funcion isEmpty. Devuelve verdadero o falso si la lista esta vacia
		return (lista.length === 0);
	};

	this.estaLleno = function(){ //Funcion isFull. Devuelve verdadero o falso en función si la lista esta llena
		return (lista.length === MAX_ELEMENTO);
	}; 

	this.tamanho = function(){ //Funcion size. Devuelve el número de elementos de la lista
		return lista.length;
	}; 
	this.capacidad = function(){ //Funcion capacity. Devuelve la capacidad de la lista
		return MAX_ELEMENTO;
	};
	this.anhadir = function(elem){ //Funcion add. Añadira elemento y colocara de menor a mayor
		if(!this.estaLleno()){
		lista.push(elem);
		}else{
			throw new lleno().toString();
		}
		return this.tamanho();
	};
	
	this.anhadirAt = function(elem, posicion) {//Funcion addAt. Añade un elemento en una posicion dada y los otros elemento recorrera una posicion mas
		poscion = parseInt(posicion);
		if(!(elem instanceof Persona)){
			throw new ningunaInstancia().toString();
		}
		if (isNaN(posicion)){
			throw new posicionIncorrecta().toString();
		}
		if (!estaLleno(lista)) {
			if (posicion > (MAX_ELEMENTO - 1) || posicion < 0){
				throw new fueraTamanho(posicion).toString();
			}
			else{
				lista.splice(posicion, 0, elem);
			}
		} 
		else{
			throw new lleno().toString();
		}
    return this.tamanho();
}
	
	this.escribir = function(){ //Funcion toString. Devuelve la lista en formato cadena.
		var nom = "";
		if (!this.estaVacio()){ 
			var tam = this.tamanho() - 1; 
			for (var i=0; i<tam;i++){
				nom = nom + lista[i].nombreCompleto() + " - ";
			}	 		 		
			nom = nom + lista[i].nombreCompleto(); 
		}else{
			throw new vacio().toString();
		}
		return nom; 
	}; 
	
	this.primerElemento = function(){ //Funcion firstElement. Devuelve el primer elemento de la lista
		var primer;
		if (!this.estaVacio()){
			primer = lista[0].nombreCompleto(); 		
		} else {
			throw new vacio().toString();
		}
		return primer;
	};

    this.ultimoElemento = function(){//Funcion lastElement. Devuelve el ultimo elemento de la lista
		var ultimo;
		if (!this.estaVacio()){
			ultimo = lista[this.tamanho()-1].nombreCompleto(); 		
		} else {
			throw new vacio().toString();
		}
		return ultimo;
	}
	
	this.devolverElemento = function(posicion){ //Funcion get. Devuelve el elemento de la lista de la posicion indicada
		if (posicion > (MAX_ELEMENTO - 1) || posicion < 0) {
			throw new fueraTamanho().toString();
		}
		if (this.estaVacio()){
			throw new vacio().toString();
		}
		return lista[posicion].nombreCompleto();
	}

	this.sustituir = function(elem, posicion){ //Funcion set. Sustituye el elemento que haya en esa poscicion del array por el elemeto dado
		 if(!(elem instanceof Persona)){
			throw new ningunaInstancia().toString();
		 }
		 if(posicion > (MAX_ELEMENTO - 1) || posicion < 0){
			 throw new fueraTamanho().toString();
		 }else{
			var borrado = this.devolverElemento(posicion);
			lista.splice(posicion, 1, elem);
		 }
		 return borrado;
	}
	
	this.indiceDe = function(elem){//Funcion indexOf. Devuelve la posicion del elemento indicado. Si el elemento no está en la lista devuelve -1
		var encontrado = -1;
		if(!(elem instanceof Persona)){
			throw new ningunaInstancia().toString();
		}
		if (!this.estaVacio()){ 
			encontrado = lista.indexOf(elem); 
		}else{
				throw new vacio().toString();
		}
		return encontrado;
	}

	this.ultimoIndiceDe = function(elem){//Funcion lastIndexOf. Devuelve la posicion del elemento indicado comenzando por el final. Si el elemento no está en la lista devuele -1
		var encontrado = -1; 
		if(!(elem instanceof Persona)){
			throw new ningunaInstancia().toString();
		} else{ 
			if (!this.estaVacio()){
				encontrado = lista.lastIndexOf(elem); 
			}else{
				throw new vacio().toString();
			} 
		}
		return encontrado;
	}
	
	this.borrar = function(posicion) {//Funcion remove. Sacar el elemento borrado de la lista, pasandole la lista y la posicion
		if(isNaN(posicion)){
			throw new posicionIncorrecta(posicion).toString();
		}
		if (posicion > (MAX_ELEMENTO - 1) || posicion < 0){
			throw new fueraTamanho(posicion).toString();
		}
		if (this.estaVacio()){ 
			throw new vacio().this.toString();
		}else{
			var borrado = lista[posicion];
			lista.splice(posicion, 1);
		}
		return borrado.nombreCompleto();
	}
	
	this.borrarElemento = function(elem) { //Funcion removeElement. Eliminara el elemento si se encuentra en el array y devolvera verdadero o falso
		if(!(elem instanceof Persona)){
			throw new ningunaInstancia().toString();
		}
		if (this.estaVacio()){
			throw new vacio().toString();
		}
		var borrado = -1;
		var eliminado = false;
		var tam = this.tamanho() - 1;
		while (lista[tam] >= elem) {
			if (lista[tam] === elem){
				borrado = lista.splice(tam, 1);
				eliminado = true;
			}
			tam--;
		}
		return eliminado;
	}
	
}

function testLista(){
	var per1 = new Persona("Alejandro","Perez");
	var per2 = new Persona("Jose","Mota");
	var per3 = new Persona("Ana","Moya");
	var per4 = new Persona("Laura","Gadea");
	var per5 = new Persona("Lucia","Gil");
	var per6 = new Persona("Miguel","Diaz");
	var per7 = new Persona("Pepe","Diaz");

	var lista = new Lista();
	console.log ("Capacidad: " + lista.capacidad());
	console.log("Es vacía: " + lista.estaVacio());
	console.log("Longitud: " + lista.tamanho());
	
	try {
		console.log("Anhadir persona : " + lista.anhadir(per1));
		console.log("Anhadir persona : " + lista.anhadir(per2));
		console.log("Anhadir persona : " + lista.anhadir(per3));
		console.log("Anhadir persona : " + lista.anhadir(per4));
		console.log("Anhadir persona : " + lista.anhadir(per5));
		console.log("Anhadir persona : " + lista.anhadir(per6));
	} catch (err) {
		console.log(err);
	}
	console.log(lista.escribir());
    console.log("Primer elemento: " + lista.primerElemento());
    console.log("Ultimo elemento: " + lista.ultimoElemento());
	try{
			console.log("Muestra la persona de la posicion 2 desde el principio: " + lista.indiceDe(per2));
			console.log("Muestra la persona de la posicion 2 desde el principio: " + lista.indiceDe(per7));
	}catch(err){
			console.log(err);
	}
	try{
			console.log("Muestra la persona de la posicion 2 desde la ultima posicion: " + lista.ultimoIndiceDe(per2));
			console.log("Muestra la persona de la posicion 2 desde la ultima posicion: " + lista.ultimoIndiceDe(per7));
	}catch(err){
			console.log(err);
	}
	console.log("EL devuelve la persona que esta en la posicion 2: " + lista.devolverElemento(2));
	console.log("Sustituye la persona de la posicion 2 por la per6: " + lista.sustituir(per6,3));
	console.log(lista.escribir());
	try{
				 console.log("Borrar persona de la posicion 4: " + lista.borrar(4));
				 console.log("Borrar persona de la posicion 46: " + lista.borrar(6));
				 console.log("Borrar persona de la posicion hola: " + lista.borrar("hola"));
	}catch(err){
				console.log(err);
	}
	try{
			console.log("Borrar elemento per1: " + lista.borrarElemento(per1));
			console.log("Borrar elemento per7: " + lista.borrarElemento(per7));
			console.log("Borrar elemento hola: " + lista.borrarElemento("hola"));
	}catch (err){
			console.log(err);
	}
	console.log(lista.escribir());
	
}

window.onload = testLista;