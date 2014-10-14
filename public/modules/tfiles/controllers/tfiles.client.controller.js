'use strict';

// Tfiles controller
angular.module('tfiles').controller('TfilesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Tfiles',
  function($scope, $stateParams, $location, Authentication, Tfiles) {
    $scope.authentication = Authentication;

    // Create new Tfile
    $scope.create = function() {
      // Create new Tfile object
      var tfile = new Tfiles({
        name: this.name
      });

      // Redirect after save
      tfile.$save(function(response) {
        $location.path('tfiles/' + response._id);
      }, function(errorResponse) {
        $scope.error = errorResponse.data.message;
      });

      // Clear form fields
      this.name = '';
    };

    $scope.createAll = function(){
        
    };

    // Remove existing Tfile
    $scope.remove = function(tfile) {
      if (tfile) {
        tfile.$remove();

        for (var i in $scope.tfiles) {
          if ($scope.tfiles[i] === tfile) {
            $scope.tfiles.splice(i, 1);
          }
        }
      } else {
        $scope.tfile.$remove(function() {
          $location.path('tfiles');
        });
      }
    };

    // Update existing Tfile
    $scope.update = function() {
      var tfile = $scope.tfile;

      tfile.$update(function() {
        $location.path('tfiles/' + tfile._id);
      }, function(errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Find a list of Tfiles
    $scope.find = function() {
      $scope.tfiles = Tfiles.query();
    };

    // Find existing Tfile
    $scope.findOne = function() {
      $scope.tfile = Tfiles.get({
        tfileId: $stateParams.tfileId
      });
    };
  }
]);