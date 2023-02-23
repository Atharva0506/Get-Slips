var app = angular.module('app', []);
app.controller('myCtrl', function ($scope, $http) {

    $scope.updateCourses = function() {
        if ($scope.sem == 'sem1') {
            $scope.courses = ['AngularJS', 'Data Strcture', 'Big Data'];
        } else if ($scope.sem == 'sem2') {
            $scope.courses = ['Node JS', 'C++'];
        } else {
            $scope.courses = [];
        }
        $scope.selectedCourse = '';
    };
    $scope.resetForm = function () {
        var sem,x, y, ex,sub;
        sem = $scope.sem;
        x = $scope.Name;
        y = $scope.Name2;
//Condition For semester
        if (sem === 'sem1') {
            sem = 'SYBBA-CA--SEM-3-PRACTICAL-SLIPS';
        }
        else if (sem ==='sem2') {
            sem = 'SYBBA-CA--SEM-4-PRACTICAL-SLIPS';
        }
//Extension for subject
        if (y === 'AngularJS') {
            sub = 'AngularJS';
            ex = '.html'
        }
        else if (y === 'Big Data') {
            sub = 'R%20Programming';
            ex = '.r';
        }
        else if (y === 'Data Strcture') {
            sub = 'Data%20Strcture';
            ex = '.c';
        }
        else if (y === 'Node JS'){
            sub = 'Node JS';
            ex = '.js';
        }
        else if(y === 'C++') {
            sub = 'C++';
            ex = '.cpp';
        }

        // Get The Answer From Github repo
        $http.get('https://raw.githubusercontent.com/Atharva0506/'+sem+'/master/' + sub + '/' + 'Slip' + x + ex).then(function (response) {
            $scope.data = response.data;
            $scope.err = "";

        },
            function error(response) {
                $scope.data = "";
                $scope.err = "Please enter valid Slip No";
            })
    };
})


