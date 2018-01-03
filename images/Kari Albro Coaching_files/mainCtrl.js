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
                  $scope.leads = response;
              });
      };
      $scope.showLead();



      $scope.addLead = function(what) {
          var addObj = {
              name: what.name,
              email: what.email
          };
          mainServ.newLead(addObj)
              .then(function(response) {
                  $scope.thingwhat = "";
                  $scope.showLead();
              });
      };

      $scope.changeLead = (function(what) {
          mainServ.changeLead(what)
              .then(function(response) {
                  $scope.showLead();
              });
      });

      $scope.deleteLead = (function(what) {
          mainServ.deleteLead()
              .then(function(response) {
                  $scope.showLead();
              });
      });

      $scope.getBlog = function(id) {
          window.scrollTo(0, 0);
          for (var i = 0; i < $scope.leads.length; i++) {
              if (id == $scope.leads[i]._id) {
                  $scope.oneBlog = $scope.leads[i];
              }
          }
      };
      $scope.trust = $sce.trustAsHtml;



      $scope.showLead = function() {
          mainServ.getLead()
              .then(function(response) {
                  $scope.leads = response;
              });
      };
      $scope.showLead();


//Questionaire
$scope.whys;
$scope.focused = false;

$scope.showQuest = function() {
mainServ.getQuest()
.then(function(response) {
    $scope.why = response;
});
};
    $scope.showQuest();

      $scope.addQuest = function(why) {
          var addObj = {
              q1: why.q1,
              q2: why.q2,
              q3: why.q3,
              q4: why.q4,
              q5: why.q5,
              q6: why.q6,
              q7: why.q7,
              q8: why.q8
          };
          mainServ.newQuest(addObj)
              .then(function(response) {
                  $scope.thingwhy = "";
                  $scope.addQuest();
              });
      };

      $scope.changeQuest = (function(why) {
          mainServ.changeQuest(why)
              .then(function(response) {
                  $scope.addQuest();
              });
      });

      $scope.deleteQuest = (function(why) {
          mainServ.deleteQuest()
              .then(function(response) {
                  $scope.addQuest();
              });
      });

      $scope.getBlog = function(id) {
          window.scrollTo(0, 0);
          for (var i = 0; i < $scope.leads.length; i++) {
              if (id == $scope.leads[i]._id) {
                  $scope.oneBlog = $scope.leads[i];
              }
          }
      };
      $scope.trust = $sce.trustAsHtml;

    //   $scope.addQuest  = function () {
    //         $scope.myForm.myField.$setPristine(); // doesn't work
    //         $scope.myForm.myField.$setPristine(true); // doesn't work
    //         $scope.myField = ''; // doesn't work
    //     };

          });
