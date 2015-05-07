
//here we define
(function(){

    var myCtrl = function($scope){

        $scope.name   = 'Veselin';
        $scope.srname = 'Dion';
        $scope.classN  = 'red';

        $scope.person = {
            firstName: "John",
            lastName: "Doe"
        };
        $scope.fullName = function() {
            var x = $scope.person;
            return x.firstName + " " + x.lastName;
        }

        $scope.change   = function() {
            if ($scope.classN === 'blue')
            {
                $scope.classN = 'red';
            }
            else
            {
                $scope.classN = 'blue';
            }

        }


        
    };

    app.controller('myCtrl', myCtrl);

}());





