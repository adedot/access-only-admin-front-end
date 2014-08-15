// table data
var orderApp = angular.module('orderApp', []);

orderApp.controller('OrderCtrl', function ($scope, $http) {

		// Get the orders
	  $scope.orders = $http.get("http://localhost:5000/orders")
	  	.success(function(data){

		$scope.orders = data;

	});
});

orderApp.controller('VenuesOrderCtrl', function($scope, $http){

	var venueId = sessionStorage.venueId;
	$scope.venueName = sessionStorage.venueName;

	console.log(venueId);

	if(typeof venueId === 'undefined'){

		$scope.orders = [{"id":0,"contact_name":"n/a","contact_email":"na/a","contact_phone":"n/a","status":"n/a","total":"n/a","venueId":1,"userId":"n/a","guestlistId":"n/a","name":"n/a","address":"n/a","city":"n/a","state":"n/a"}]
		$scope.venueName = "n/a";	
	}
	else{

		// Get Orders at the Venue
		$scope.orders = $http.get("http://localhost:5000/venues/"+venueId+ "/orders")
			.success(function(data){

			$scope.orders = data;

		});

	 }


});

orderApp.controller('VenuesCtrl', function($scope, $http){


	// Get Venues 
	$scope.venues = $http.get("http://localhost:5000/venues").success(function(data) {
      	$scope.venues = data;
      console.log(scope.venues);
    });

        // On click set the amount
  $scope.submit = function(venue) {
  	sessionStorage.venueId = venue.id;
    sessionStorage.venueName = venue.name;
  };


});