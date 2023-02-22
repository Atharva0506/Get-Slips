<<<<<<< HEAD
var app = angular.module('app', []);
app.controller('myCtrl', function ($scope, $http) {



    $scope.resetForm = function () {
      
       
        var x, y,ex;
        x = $scope.Name;
        y = $scope.Name2;
if(y === 'AngularJS'){
    ex = '.html'
}
else if(y === 'R%20Programming'){
    ex = '.r';
}
else if(y === 'Data%20Strcture'){
    ex = '.c';
}
        $http.get('https://raw.githubusercontent.com/Atharva0506/SYBBA-CA--SEM-3-PRACTICAL-SLIPS/master/' + y + '/' + 'Slip'+ x + ex).then(function (response) {
            $scope.data = response.data;
            $scope.err = "";

        },
        function error(response) {
            $scope.data = "";
            $scope.err =  "Please enter valid Slip No"; 
        }
        )};

        
        
        
        
        


})

=======
var app = angular.module('app', []);
app.controller('myCtrl', function ($scope, $http) {



    $scope.resetForm = function () {
      
       
        var x, y,ex;
        x = $scope.Name;
        y = $scope.Name2;
if(y === 'AngularJS'){
    ex = '.html'
}
else if(y === 'R%20Programming'){
    ex = '.r';
}
else if(y === 'Data%20Strcture'){
    ex = '.c';
}
        $http.get('https://raw.githubusercontent.com/Atharva0506/SYBBA-CA--SEM-3-PRACTICAL-SLIPS/master/' + y + '/' + 'Slip'+ x + ex).then(function (response) {
            $scope.data = response.data;
            $scope.err = "";

        },
        function error(response) {
            $scope.data = "";
            $scope.err =  "Please enter valid Slip No";
        }
        )};

        
        
        
        
        


})

>>>>>>> ed9e4381e64b98a09ddf1cb88261a4a1a6c66247
