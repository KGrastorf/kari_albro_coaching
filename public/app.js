angular.module("kariApp", ["ui.router"]).config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("home", {
            url: "/home",
            templateUrl: "./templates/home.html",
        })
        .state("test", {
            url: "/test",
            templateUrl: "./templates/test.html"
        })
        .state("thanks", {
            url: "/thanks",
            templateUrl: "./templates/thanks.html"
        })
        .state("blog", {
            url: "/blog",
            templateUrl: "./templates/blog.html"
        })
        .state("coach", {
            url: "/coach",
            templateUrl: "./templates/coach.html"
        })
        .state("life", {
            url: "/life",
            templateUrl: "./templates/life.html"
        })
        .state("work", {
            url: "/work",
            templateUrl: "./templates/work.html"
        })
        .state("start", {
            url: "/start",
            templateUrl: "./templates/start.html"
        })
        .state("connect", {
            url: "/connect",
            templateUrl: "./templates/connect.html"
        })
        .state("quest", {
            url: "/quest",
            templateUrl: "./templates/quest.html"
        });

    $urlRouterProvider.otherwise("/home");

});
