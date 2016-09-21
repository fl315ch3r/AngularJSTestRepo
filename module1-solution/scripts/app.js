(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {

    $scope.message = "";

    $scope.checkIfTooMuch = function() {
      var menu = [];
      if ($scope.lunchMenu == ""){
        $scope.message = "Please enter data first";
      }else {
        menu = $scope.lunchMenu.split(',');
        if (menu.length > 0 && menu.length <= 3) {
          $scope.message = "Enjoy!";
        } else if (menu.length > 3) {
          $scope.message = "Too much!";
        }
      }
    }

  }
})();
