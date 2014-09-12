var app = angular.module('Monitor', []);

app.controller('MonitorController', function(){
	this.usuarios = users;
});

app.controller('UsuarioController', function(){
	this.newUser = {};
	this.addUsuario = function(usuarios){
		usuarios.push(this.newUser);
		this.newUser = {};
	};
});

var users = [{
		nome: "Adriano",
		idade: "29"
	},{
		nome: "Altair",
		idade: "53"
	}];