'use strict';
 
angular.module('myApp.home', ['ngRoute'])
angular.module('myApp.home', ['ngRoute','firebase'])
// Declared route 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])
 
// Home controller
.controller('HomeCtrl', ['$scope','$firebaseSimpleLogin',function($scope,$firebaseSimpleLogin) {
 <script src="https://www.gstatic.com/firebasejs/3.4.0/firebase.js"></script>
 
 //UPDATE FIREBASE LOGIN
 //OLD VERSION
 var loginObj = $firebaseSimpleLogin(firebaseObj);
 
 <script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAC5PWxy2MnvqULjTidMw_PSNj1BJdV8bs",
    authDomain: "seniorinsertheredesign.firebaseapp.com",
    databaseURL: "https://seniorinsertheredesign.firebaseio.com",
    storageBucket: "seniorinsertheredesign.appspot.com",
    messagingSenderId: "30344832894"
  };
  firebase.initializeApp(config);
 </script>
 
 
 $scope.SignIn = function(event) {
    event.preventDefault();  // To prevent form refresh
    var username = $scope.user.email;
    var password = $scope.user.password;
     
    loginObj.$login('password', {
            email: username,
            password: password
        })
        .then(function(user) {
            // Success callback
            console.log('Authentication successful');
        }, function(error) {
            // Failure callback
            console.log('Authentication failure');
        });
}
}]);
