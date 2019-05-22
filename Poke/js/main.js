var poke = angular.module("pokemon",[])
poke.controller("pokedex", function($scope,$rootScope,$http){
	$http({
		method: "GET",
		url: "https://pokeapi.co/api/v2/pokemon/35"
	}).then(function callback(y){
		console.log(y);
	})


})





