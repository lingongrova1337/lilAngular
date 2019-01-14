var myAppModule = angular.module('myAppModule',[]);

//configure the module with a MyController
myAppModule.controller('MyFilterDemoCtrl', ['$scope',
function($scope){
    //controller code would go here
    var someData = {
      firstName: 'Jenna',
      surname: 'Grant',
      dateJoined: new Date(2010,2,23),
      consumption: 123.659855,
      plan:'super-basic-plan',

      //Last 12 nobths of data usage
      monthlyUsageHistory:
      [123.659855,
             89.645222,
             97.235644,
             129.555555,
             188.699855,
             65.652545,
             123.659855,
             89.645222,
             97.235644,
             129.555555,
             188.699855,
             65.652545]
    };
    $scope.data = someData;


    var pureD ={
      n: 'Jens',
      en: 'mens',
      dates: new Date(2020, 12,30)
    };
    $scope.data2 = pureD;

    $scope.isHidden = true;
    $scope.showHideColors = function(){
      $scope.isHidden = !$scope.isHidden;
    }

}]);

link: function($scope, $element){
  $scope.isHidden = true;
  $scope.showHideColors = function(){
    $scope.isHidden = !$scope.isHidden;
  }

  var colorContainer = $element.find('div');
  angular.forEach($scope.$parent.colorsArray, function(color){
    var appendString = "<div style='background-color:'" + color + "'>'" +color + "</div>";
    colorContainer.append(appendString);
  });
}


myAppModule.directive('colorList', function(){
  return{
    restrict:'AE',
    template:
    "<button ng-click='showHideColors()' type='button'>"
    +  "{{isHidden ? 'Show available colours': 'hide available colours'}}"
    + "</button><div ng-hide='isHidden' id ='colorContainer'>"
    +"</div>"
  }
});

myAppModule.directive('listo', function(){
  return{
    restrict:'AE',
    template:
    "<p>Tjenare Ola!</p>"
  }
});


myAppModule.filter('stripDashes', function(){
  //the function we are in returns
  //the function below
  return function(txt){
    return textToFilter.split('-').join(' ');
  };
});


//create a new module
//angular.module('myAppModule', []);

//configure the module with a MyController
//angular.module('myAppModule').controller('MyFilterDemoCtrl',function($scope){
  //controller code would go here
//});

//configure the module with a filter
//angular.module('myAppModule').filter('stripDashes',function(){
//return function(txt){
    //filter code would go here
//  }
//});
