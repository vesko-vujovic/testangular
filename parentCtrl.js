(function(){

   var parentCtrl = function($scope){
     $scope.timeOfDay = 'morning';
     $scope.name      = 'Parent';

   };

    app.controller('parentCtrl', parentCtrl);



}());