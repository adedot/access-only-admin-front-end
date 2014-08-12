// table data
var orderApp = angular.module('orderApp', []);

orderApp.controller('OrderCtrl', function ($scope, $http) {

		// Get the venues
	  $scope.orders = $http.get("http://localhost:5000/orders")
	  	.success(function(data){

		$scope.orders = data;

	});
});


orderApp.controller('VenuesOrderCtrl', function($scope, $stateParams, $http){

	var venueId = $stateParams["id"];

	// Get Orders at the Venue
	$scope.orders = $http.get("http://localhost:5000/venues/orders/"+venueId)
		.success(function(data){

		$scope.orders = data;

	});

});