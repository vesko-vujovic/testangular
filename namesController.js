(function(){
    var namesController = function ($scope) {
        $scope.names = [
            {name:'Vesko',country:'Norway'},
            {name:'Bild-Studio',country:'Sweden'},
            {name:'Danilo',country:'Denmark'}
        ];

        $scope.cars = [
            {brand: 'Mercedes', model: 'S line'},
            {brand: 'Bmw', model: 'M3'},
            {brand: 'Mercedes', model: 'E63'}
        ];


    }
    app.controller('namesController', namesController);

}());