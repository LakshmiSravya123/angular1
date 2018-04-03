var myApp = angular.module("myApp", [ 'ngRoute' ]);

myApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.

	when('/login', {
		controller:'myCtrl',
		templateUrl : 'HTML/login.html'
	}).

	when('/dashboard', {
		controller : 'myCtrl',
		templateUrl : 'HTML/dashboard.html'

	}).

	otherwise({
		redirectTo : '/login'
	});

} ]);
myApp.controller("myCtrl", function($scope, $http,$location,$rootScope) {

	$scope.init=function()
	{
	$scope.admin=false;
	$scope.groups=false;

	$scope.eventarray = [];
	};
	setTimeout(function() {
		document.getElementById("text1").addEventListener("change",
				$scope.runScript);
	}, 3000);
	
	$scope.admin=function()
	{
		alert("admin");
		$scope.admin=true;
	};
	$scope.groups=function()
	
	{
		alert("groups");
		$scope.groups=true;
	};

	$scope.runScript = function() {

		var key = document.getElementById("text1").value;
		$scope.eventarray.push(key);
		document.getElementById("text1").value = null;

		console.log($scope.eventarray);
	};
	$scope.deleteelement = function(index) {
		$scope.eventarray.splice(index, 1);
	};
	$scope.submit=function(user)
	{ 
		$scope.idname= true;
		var code, i, len;

		for (i = 0, len = user.name.length; i < len; i++) {
			code = user.name.charCodeAt(i);
			if (!(code > 47 && code < 58) && // numeric (0-9)
					!(code > 64 && code < 91) && // upper alpha (A-Z)
					!(code > 96 && code < 123)) { // lower alpha (a-z)
				$scope.idname= false;
			}
		}
	

		$rootScope.username=user.name;
		$scope.password=user.password;
	
		console.log($scope.idname);
		if($scope.idname==true)
		{return $location.path('/dashboard');
		
		}

	};
	$scope.dropdown = function() {
		$http.get('json/drop_down.json').success(
				function(data) {

					console.log(data);

					$scope.Astronomy = data.query;


				}).error(function() {
					console.log('could not find someFile.json');
				});

	};
	$scope.start1=function(index){
		$scope.channel=index;
	};
	$scope.start=function(index){


		$scope.drop=index;
	};
	$scope.subcount=0;
	$scope.itemcondition=function(index)
	{
		$scope.subcount=1;
		$scope.item=index;
	};
	$scope.count=0;
	$scope.start2=function(index){
		$scope.count=1;

		$scope.hier=index;

	};
});