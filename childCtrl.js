(function(){

    var childCtrl = function($scope){
        $scope.timeOfDay = 'morning';
        $scope.name      = 'Child';
    };

    app.controller('childCtrl', childCtrl);



}());