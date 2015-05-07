(function(){

    var grandChildCtrl = function($scope){
        $scope.timeOfDay = 'evening';
        $scope.name      = 'Grand Child';
    };

    app.controller('grandChildCtrl', grandChildCtrl);



}());