
//here we define
(function(){

    var myCtrl = function($scope){

        $scope.name   = 'Veselin';
        $scope.srname = 'Dion';

        $scope.person = {
            firstName: "John",
            lastName: "Doe"
        };
        $scope.fullName = function() {
            var x = $scope.person;
            return x.firstName + " " + x.lastName;
        }
        
    };

    app.controller('myCtrl', myCtrl);

}());





