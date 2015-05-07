(function () {

    var customerCtrl = function($scope, $http){

     //here we use $http service to get data from remote server
     //and then we load that data in other function
     $http.get("http://www.w3schools.com/angular/customers.php")
         .success(function(response){
             $scope.names = response.records;
         });
    };



    app.controller('customerCtrl', customerCtrl);
}());