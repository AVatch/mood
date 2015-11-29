// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('mood', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('AppController', ['$scope', function($scope){
  var date = new Date();
  var calDaysLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var calMonthsLabels = ['January', 'February', 'March', 'April',
                         'May', 'June', 'July', 'August', 'September',
                         'October', 'November', 'December'];
  var calDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  
  function Calendar(month, year){
    this.month = (isNaN(month) || month == null) ? date.getMonth() : month;
    this.year = (isNaN(year) || year == null) ? date.getYear() : year;
    this.html = '';
  }
  
  Calendar.prototype.generateHTML = function(){
    var firstDate = new Date(this.year, this.month, 1);
    var firstDay = firstDate.getDay();
    var monthLength = calDaysInMonth[this.month];
    
    // take into account leap years o.O
    if (this.month == 1) { // February only!
      if ((this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0){
        monthLength = 29;
      }
    }

  }
  
  
}]);
