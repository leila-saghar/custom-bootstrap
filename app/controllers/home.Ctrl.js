(function () {
    'use strict';
    angular
        .module('app')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$state'];

    function homeCtrl($state) {
        /* jshint validthis:true */
        var vm = this;
        vm.showResults = function () {
            $state.go('customers');
        }
    }
})();