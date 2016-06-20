angular
  .module('SnkNewTab', ['ngRoute', 'ngAnimate', 'dndLists', 'SnkNewTab.widgets', 'SnkNewTab.templates'])
  .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/', {
          bodyClass: 'home',
          templateUrl: 'templates/home.tpl.html',
          controller: 'HomeController',
          controllerAs: 'homeCtrl'
        })
        .when('/settings', {
          bodyClass: 'settings',
          templateUrl: 'templates/settings.tpl.html',
          controller: 'SettingsController',
          controllerAs: 'settingsCtrl'
        })
        .otherwise({redirectTo: '/'});
    }])
    .run(['$rootScope', '$document', function($rootScope, $document){
      $rootScope.$on("$routeChangeSuccess", function(event, newState, oldState) {
        if (newState && newState.$$route.bodyClass) {
          angular.element($document[0].body).addClass(newState.$$route.bodyClass);
        }

        if (oldState && oldState.$$route.bodyClass) {
          angular.element($document[0].body).removeClass(oldState.$$route.bodyClass);
        }
      });
    }]);