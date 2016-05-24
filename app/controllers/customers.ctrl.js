(function () {
    'use strict';

    angular
        .module('app')
        .controller('customersCtrl', customersCtrl);

    customersCtrl.$inject = [];

    function customersCtrl() {
        /* jshint validthis:true */
        var vm = this;
        vm.courseList = [];
        activate();
      
        function activate() {
            vm.courseList = [{ name: 'Sophie', lastname: 'math',birthDate:'1987-06-04T00:00:00', balance: 8756.432, email: 'sophie@gmail.com' },
                             { name: 'George', lastname: 'history', birthDate:'1943-11-04T00:00:00', balance: 555.432,email: 'george@gmail.com' },
                             { name: 'John', lastname: 'Chemist', birthDate:'1965-12-04T00:00:00', balance: 323.432, email: 'john@gmail.com' }];
        }
    }
})();
