var pokemon = angular.module("pokemon",[])
pokemon.controller("Pokedex", function($scope,$rootScope,$http){
	$scope.PokedexB = [];

	for (var i = 1; i < 100; i++) {
	$http({
		method: "GET",
		url: "https://pokeapi.co/api/v2/pokemon/35"+i
	}).then(function CallbackSucces(y){
		$scope.PokedexB.push(y);	

	})

}
})





