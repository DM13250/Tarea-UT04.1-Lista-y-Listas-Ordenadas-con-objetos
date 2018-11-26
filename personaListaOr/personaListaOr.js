"use strict"

function error (){}; 
error.prototype = new error(); //hereda del objeto error
error.prototype.constructor = error(); // creamos un constructor para error
error.prototype.toString = function(){
    return  this.nombre  + " : " + this.mensaje;
};


function ningunaInstancia(){ //Creacion del error ningunaInstancia 
    this.nommbre = "ningunaInstancia";
    this.mensaje = "Este objeto no es una instancia de la clase Persona";
}

ningunaInstancia.prototype = new error();
ningunaInstancia.prototype.constructor = ningunaInstancia; 

function elementoNoEncontrado(){ //creacion del error elementoNoEncontrado
    this.nombre = "Elemento no encontrado";
    this.mensaje = "Este elemento no ha sido encontrado en la lista";
}

elementoNoEncontrado.prototype = new error(); 
elementoNoEncontrado.prototype.constructor = elementoNoEncontrado; 

function vacio(){ //creacion del error vacio
    this.name = "Vacio";
    this.message = "La lista esta vacia";
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

function Persona(nombre, apellido) { //creacion de la clase Persona
	this.nombre = nombre; 
	this.apellido = apellido; 
	this.nombreCompleto = function(){
		return this.nombre + " " + this.apellido;
	}
}

function ListaOr(){ //creacion de la clase ListaOr
	var listaOr = [];
	var MAX_ELEMENTO = 5;
	
	this.crear = function(){ //Funcion create. Crea la lista vacía con una determinada longitud que ya esta dada
		var listaOr = [];
		return listaOr;
	};

	this.estaVacio =  function(){ //Funcion isEmpty. Devuelve verdadero o falso si la lista esta vacia
		return (listaOr.length === 0);
	}; 
	
	this.estaLleno = function(){ //Funcion isFull. Devuelve verdadero o falso en función si la lista esta llena
		return (listaOr.length === MAX_ELEMENTO);
	}; 

	this.tamanho = function(){ //Funcion size. Devuelve el número de elementos de la lista
		return listaOr.length;
	}; 
	this.capacidad = function(){ //Funcion capacity. Devuelve la capacidad de la lista
		return MAX_ELEMENTO;
	};
	
	this.anhadir = function(elem) { //Funcion add. Añadira elemento y colocara de menor a mayor
		if(!(elem instanceof Persona)){
			throw new ningunaInstancia().toString();
		}
		if (!this.estaLleno()) {
				var mayor = -1;
                var posicion = 0;
                var tam = this.tamanho()-1;
                while((mayor == -1) && (posicion < tam)){
                    if((listaOr[posicion].apellido).localeCompare(elem.apellido) == -1){
                        posicion++;
                    }else if ((listaOr[posicion].apellido).localeCompare(elem.apellido) == 0){
                        if((listaOr[posicion].nombre).localeCompare(elem.nombre) == -1){
                            posicion++;
                        }else{
                            mayor = posicion;
                        }    
                    }else{
                        mayor = posicion;
                    }
                    
                }
                listaOr.splice(posicion,0,elem);
		} else{ 
			throw new lleno().toString();
		}
		return this.tamanho(listaOr);
	};
	
	this.escribir = function(){ //Funcion toString. Devuelve la lista en formato cadena.
		var nom = "";
		if (!this.estaVacio()){ 
			var tam = this.tamanho() - 1; 
			for (var i=0; i<tam;i++){
				nom = nom + listaOr[i].nombreCompleto() + " - ";
			}	 		 		
			nom = nom + listaOr[i].nombreCompleto(); 
		}else{
			throw new vacio().toString();
		}	
		return nom; 
	};  
	
	this.limpiar = function(){//Funcion clear. Deja vacia la lista
		var elem = Number.NaN;
		if (!this.estaVacio()){
			listaOr.splice(0, listaOr.length);	 		 		
		}else{
			throw new vacio().toString();
		} 	
	}; 

	this.primerElemento = function(){ //Funcion firstElement. Devuelve el primer elemento de la lista
		var primer;
		if (!this.estaVacio()){
			primer = listaOr[0].nombreCompleto(); 		
		} else {
			throw new vacio().this.toString();
		}
		return primer;
	};

    this.ultimoElemento = function(){//Funcion lastElement. Devuelve el ultimo elemento de la lista
		var ultimo;
		if (!this.estaVacio()){
			ultimo = listaOr[this.tamanho()-1].nombreCompleto(); 		
		} else {
			throw new vacio().toString();
		}
		return ultimo;
	}
 
	this.indiceDe = function(elem){	//Funcion indexOf. Devuelve la posicion del elemento indicado. Si el elemento no está en la lista devuelve -1
		if(!(elem instanceof Persona)){
			throw new ningunaInstancia().toString();
		}
		if (!this.estaVacio()){
			var encontrado = listaOr.indexOf(elem);
		}else{
			throw new vacio().this.toString();
		}
		return encontrado;
	};
 
	this.ultimoIndiceDe = function(elem){	//Funcion lastIndexOf. Devuelve la posicion del elemento indicado comenzando por el final. Si el elemento no está en la lista devuele -1
		if(!(elem instanceof Persona)){
			throw new ningunaInstancia().toString();
		 }
		if (!this.estaVacio()){
			var encontrado = listaOr.lastIndexOf(elem);
		}else{
			throw new vacio().this.toString();
		}
		return encontrado;
	};
 
	this.devolverElemento = function(posicion){ //Funcion get. Devuelve el elemento de la lista de la posicion indicada
		if(isNaN(posicion)){
			 throw new posicionIncorrecta().toString();
		 }
		if (posicion > (MAX_ELEMENTO - 1) || posicion < 0) {
			throw new fueraTamanho(posicion).toString();
		}
		if (this.estaVacio()){
			throw new vacio().this.toString();
		}
		return listaOr[posicion].nombreCompleto();
	}

	this.sustituir = function(elem, posicion){ //Funcion set. Sustituye el elemento que haya en esa poscicion del array por el elemeto dado
		 if(!(elem instanceof Persona)){
			throw new ningunaInstancia().toString();
		 }
		 if(isNaN(posicion)){
			 throw new posicionIncorrecta().toString();
		 }
		 if(posicion > (MAX_ELEMENTO - 1) || posicion < 0){
			 throw new fueraTamanho(posicion).toString();
		 }else{
			var borrado = this.devolverElemento(posicion);
			listaOr.splice(posicion, 1, elem);
		 }
		 return borrado;
	}

	this.borrar = function(posicion) {//Funcion remove. Sacar el elemento borrado de la lista, pasandole la lista y la posicion
		if(isNaN(posicion)){
			throw new posicionIncorrecta().toString();
		}
		if (posicion > (MAX_ELEMENTO - 1) || posicion < 0){
			throw new fueraTamanho(posicion).toString();
		}
		if (this.estaVacio()){ 
			throw new vacio().this.toString();
		}else{
			var borrado = listaOr[posicion];
			listaOr.splice(posicion, 1);
		}
		return borrado.nombreCompleto();
	}

	this.borrarElemento=function(elem) { //Funcion removeElement. Eliminara el elemento si se encuentra en el array y devolvera verdadero o falso
		if(!(elem instanceof Persona)){
			throw new ningunaInstancia().toString();
		}
		var eliminado = false;
		if (this.estaVacio(listaOr)){
			throw new vacio().this.toString();
		}else{
			var tam = this.tamanho() - 1;
			while (listaOr[tam] >= elem) {
				if (listaOr[tam] === elem){
					listaOr.splice(tam, 1);
					eliminado = true;
				}
				tam--;
			}
		}
		return eliminado;
	}
}
function testListaOr(){
		var per1 = new Persona("Alejandro","Perez");
		var per2 = new Persona("Jose","Mota");
		var per3 = new Persona("Ana","Moya");
		var per4 = new Persona("Laura","Gadea");
		var per5 = new Persona("Lucia","Gadea");
		var per6 = new Persona("Miguel","Diaz");

		var listaOr = new ListaOr();
		console.log ("Capacidad: " + listaOr.capacidad());
		console.log("Es vacía: " + listaOr.estaVacio());
		console.log("Longitud: " + listaOr.tamanho());
		
		try {
			console.log("Anhadir persona : " + listaOr.anhadir(per1));
			console.log("Anhadir persona : " + listaOr.anhadir(per2));
			console.log("Anhadir persona : " + listaOr.anhadir(per3));
			console.log("Anhadir persona : " + listaOr.anhadir(per4));
			console.log("Anhadir persona : " + listaOr.anhadir(per5));
			console.log("Anhadir persona : " + listaOr.anhadir(per6));
		} catch (err) {
			console.log(err);
		}
		console.log(listaOr.escribir());
		console.log("EL primer elemento de la lista es: " + listaOr.primerElemento());
		console.log("EL primer elemento de la lista es: " + listaOr.ultimoElemento());
		console.log("Muestra la persona de la posicion 2 desde el principio: " + listaOr.indiceDe(per2));
		console.log("Muestra la persona de la posicion 2 desde la ultima posicion: " + listaOr.ultimoIndiceDe(per2));
		console.log("EL devuelve la persona que esta en la posicion 2: " + listaOr.devolverElemento(2));
		console.log("Sustituye la persona de la posicion 2 por la per6: " + listaOr.sustituir(per6,3));
		console.log(listaOr.escribir());
		console.log("Borrar persona de la posicion 4: " + listaOr.borrar(4));
		console.log("Borrar per1: " + listaOr.borrarElemento(per1));
		console.log(listaOr.escribir());
	
}

window.onload = testListaOr;