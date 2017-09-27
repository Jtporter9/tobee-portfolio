angular.module('app')
.controller('homeCtrl', ['$location', '$anchorScroll',
 function($location, $anchorScroll){
/* jshint validthis: true */
     var vm = this;
    vm.test = "TESTING!!!";

vm.JumpToTop = function () {
    console.log("jump to top");
    $location.hash('menu');
    $anchorScroll();
}

vm.JumpToSkills = function () {
    $location.hash('slide1');
    $anchorScroll();
}

vm.JumpToBio = function () {
    $location.hash('slide2');
    $anchorScroll();
}

vm.JumpToContact = function () {
    $location.hash('slide3');
    $anchorScroll();
}

}]);