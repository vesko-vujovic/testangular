(function(){

    var todoCtrl = function($scope){

        //small task app

       $scope.todoList = [];

       $scope.addToList = function () {
         $scope.todoList.push({todoText: $scope.todoInput, done:false});
         $scope.todoInput = "";
       };

        $scope.remove = function() {
            var oldList = $scope.todoList;
            $scope.todoList = [];
            angular.forEach(oldList, function(x) {
                if (!x.done) $scope.todoList.push(x);
            });
        };


    };
    app.controller('todoCtrl', todoCtrl);
}());