var app = angular.module("Formulario", []);

app.controller('FormCtrl', ['$scope', '$http',function($scope, $http){
	
	$scope.usuarios = [];
	
	$http.get('http://localhost:7001/LaboratorioRest/usuarios/json').success(function(data){
		$scope.usuarios = data;
	}).error(function(){
		alert('Falha ao acessar servidor');
	});

	$scope.clientes = [];
	$scope.uf = data_uf;

	$scope.incluir = function(){
		$scope.clientes.push({nome: $scope.nomeCliente, uf: $scope.estadoCliente.uf});		
		$scope.nomeCliente = "";
		$scope.estadoCliente = "";
	};

	$scope.delete = function(index){
		$scope.clientes.splice(index, 1);
	};
}]);

data_uf = [
	{ uf: "RJ" },
	{ uf: "SP" },
	{ uf: "AM" },
	{ uf: "AC" }
];
