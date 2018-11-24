"use-strict";

var Person = {
	name: "",
	surname: "",
	getName: function(){
		return this.name;
	},
	setName: function(name){
		if((name === "") || (typeof name === "undefined")){
			return;
		}
		this.name = name;
	},
	getSurname: function(){
		return this.surname;
	},
	setSurname: function(surname){
		if((name === "") || (typeof name === "undefined")){
			return;
		}
		this.surname = surname;
	},

};
function test(){
	var per1 = Object.create(Person);
	per1.name = "";
	per1.surname = "Perez";
	console.log("Nombre: " + per1.getName()); 
	console.log("Apellido: " + per1.getSurname()); 
}
window.onload = test;
