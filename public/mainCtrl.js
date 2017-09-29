angular.module("kariApp")
    .controller("mainCtrl", function($scope, mainServ, $state, $sce){
      $scope.focused = false;

      $scope.showCard = function() {
          mainServ.getCard()
              .then(function(response) {
                  $scope.posts = response;
              });
      };
      $scope.showCard();



      $scope.addCard = function(place) {
          var addObj = {
              name: place.name,
              brand: place.brand
          };
          mainServ.newCard(addObj)
              .then(function(response) {
                  $scope.thingplace = "";
                  $scope.showCard();
              });
      };

      $scope.changeCard = (function(place) {
          mainServ.changeCard(place)
              .then(function(response) {
                  $scope.showCard();
              });
      });

      $scope.deleteCard = (function(place) {
          mainServ.deleteCard(place)
              .then(function(response) {
                  $scope.showCard();
              });
      });

      $scope.getBlog = function(id) {
          window.scrollTo(0, 0);
          for (var i = 0; i < $scope.posts.length; i++) {
              if (id == $scope.posts[i]._id) {
                  $scope.oneBlog = $scope.posts[i];
              }
          }
      };
      $scope.trust = $sce.trustAsHtml;


//Leads Ctrl
      $scope.showLead = function() {
          mainServ.getLead()
              .then(function(response) {
                  $scope.posts = response;
              });
      };
      $scope.showLead();



      $scope.addLead = function(client) {
          var addObj = {
              name: client.name,
              email: client.email
          };
          mainServ.newLead(addObj)
              .then(function(response) {
                  $scope.thingclient = "";
                  $scope.showLead();
              });
      };

      $scope.changeLead = (function(client) {
          mainServ.changeLead(client)
              .then(function(response) {
                  $scope.showLead();
              });
      });

      $scope.deleteLead = (function(client) {
          mainServ.deleteLead(client)
              .then(function(response) {
                  $scope.showLead();
              });
      });

      $scope.getBlog = function(id) {
          window.scrollTo(0, 0);
          for (var i = 0; i < $scope.posts.length; i++) {
              if (id == $scope.posts[i]._id) {
                  $scope.oneBlog = $scope.posts[i];
              }
          }
      };
      $scope.trust = $sce.trustAsHtml;


          });
