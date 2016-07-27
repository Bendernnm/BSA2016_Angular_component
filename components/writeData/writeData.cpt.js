(function () {
    angular.module('peopleModule')
        .component('writeData', {
            templateUrl: 'components/writeData/writeData.cpt.html',
            controller: WriteDataCtrl,
            controllerAs: 'write',
            $routeConfig: [
                {
                    path: '/peopleList',
                    component: 'peopleList',
                    name: 'List'
                },
                {
                    path: '/details:firstName,lastName,eMail',
                    component: 'detailsAbout',
                    name: 'Details'
                },
                {
                    path: '/**',
                    redirectTo: ["List", ""]
                }
            ]
        });

    function WriteDataCtrl() {
        let vm = this;
    }
})();