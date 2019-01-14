//SID 89!!

var mainIndexA = angular.module('mainIndexA',[]);
//Viktigt att mainIndexa är samma


mainIndexA.controller('MyBodyController', ['$scope',
function($scope){
  $scope.person = {};
  $scope.person.newsletterOptIn = false;
  $scope.person.channels = [
      { value: "television", label: "Television" },
      { value: "radio", label: "Radio" },
      { value: "social-media", label: "Social Media"},
      { value: "other", label: "Other"}
  ];
  $scope.register = function () {
  $scope.firstNameInvalid = false;
  $scope.lastNameInvalid = false;
  $scope.emailInvalid = false;

  if(!$scope.registrationForm.firstName.$valid){
    $scope.firstNameInvalid = true;
  }
  if(!$scope.registrationForm.lastName.$valid){
    $scope.lastNameInvalid = true;
  }
  if(!$scope.registrationForm.email.$valid){
    $scope.emailInvalid = true;
  }
  if(!$scope.registrationForm.research.$valid){
    $scope.researchInvalid = true;
  }
  if($scope.registrationForm.$valid){
  //<!-- pending implementation -->
    $scope.doShow = true;
  }}

    var data ={
      name : 'Norton',
      enamn: 'Vicsa'
    };

    var data2={
      arr1:  ['1', '2','3', '4', '5'],
      arr2:  ['6', '7','8', '9', '10'],
      arr3:  ['11', '12','13', '14', '15'],
      arr4:  ['16', '17','18', '19', '20']
    };

    $scope.dat2 = data2;
    $scope.dat = data;


}]);

//directives
mainIndexA.directive('oneDirective', function(){
    return{
      restrict: 'AE',
      template:
      "<h3> My Directive</h3>" +
      "<p>This is generated through directive </p>" +
      "</div>"
}});

//######################################################
var module = angular.module('myappo', []);

 module.controller("controlla", function ($scope, $window, $location, $document, dateTimeService, memberDataStoreService) {
   $scope.winWidth = $window.innerWidth;
   $scope.url = $location.absUrl();
   $scope.protocol = $location.protocol();
   $scope.host = $location.host();
   $scope.port = $location.port();
   $scope.docTitle = $document[0].title;

   $scope.theDate = dateTimeService.getDate();
   $scope.theTime = dateTimeService.getTime();

   $scope.person = {};
   $scope.person.newsletterOptIn = true;
   $scope.person.channels = [
     { value: "television", label: "Television" },
     { value: "radio", label: "Radio" },
     { value: "social-media", label: "Social Media"},
     { value: "other", label: "Other"}
   ];

   $scope.register = function () {
   $scope.firstNameInvalid = false;
   $scope.lastNameInvalid = false;
   $scope.emailInvalid = false;
   $scope.researchInvalid = false;
   $scope.showSuccessMessage = false;
   $scope.showErrorMessage = false;

   if (!$scope.registrationForm.firstName.$valid) {
   $scope.firstNameInvalid = true;
   }

   if (!$scope.registrationForm.lastName.$valid) {
   $scope.lastNameInvalid = true;
   }

   if (!$scope.registrationForm.email.$valid) {
   $scope.emailInvalid = true;
   }

   if (!$scope.registrationForm.research.$valid) {
   $scope.researchInvalid = true;
   }
   // If the registration form is valid, use the
   // memberDataStoreService to submit the form data
   if ($scope.registrationForm.$valid) {
     var promise = memberDataStoreService.doRegistration($scope.person);
     promise.success(function (data, status) {

     $scope.showSuccessMessage = true;
     });
     promise.error(function (data, status) {

     $scope.showErrorMessage = true;
     });

     $scope.doShow = true;
    }
  }



 });


module.factory('dateTimeService', function(){
  var dateTimeSvc = {};
  dateTimeSvc.getDate = function(){
    return new Date().toDateString();
  }
  dateTimeSvc.getTime = function(){
    return new Date().toTimeString();
  }
  return dateTimeSvc;
});



module.factory('memberDataStoreService', function ($http) {
var memberDataStore = {};
    memberDataStore.doRegistration = function (theData) {
    var promise = $http({method: 'POST', url: 'memberservices/register', data: theData});
    return promise;
}
return memberDataStore;
});










/*Svår att checka på atom-live-server*/
/*
var mainIndexA = angular.module("mainIndexA",['ngRoute']);
mainIndexA.config(function($routeProvider){
  $routeProvider
  .when("/indexA",{
    templateUrl : "indexA.htm"
  })
  .when("/indexa2",{
    templateUrl: "indexa2.html"
  })
});
*/
