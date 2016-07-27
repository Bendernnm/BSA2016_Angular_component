(function () {
    angular.module('peopleModule')
        .component('detailsAbout', {
            templateUrl: 'components/detailsAbout/detailsAbout.cpt.html',
            controller: DetailsAboutCtrl,
            controllerAs: 'details'
        });

    function DetailsAboutCtrl() {
        let vm = this;

        vm.$routerOnActivate = function (next, previous) {
            let prop = next.params;
            vm.firstName = prop.firstName;
            vm.lastName = prop.lastName;
            vm.eMail = prop.eMail;
        };
    }
})();