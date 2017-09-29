angular.module("kariApp")
    .service("mainServ", function($http) {
      this.getCard = function() {
          return $http({
              method: "GET",
              url: "/blog"
          }).then(function(response) {
              return response.data;
          });
      };

      this.newCard = function(place) {
          return $http({
              method: "POST",
              url: "/blog",
              data: place
          }).then(function(response) {
              console.log(response);
              return response.data;
          });
      };

      this.changeCard = function(place) {
          return $http({
              method: "PUT",
              url: "/blog/" + place._id,
              data: place
          }).then(function(response) {
              return response;
          });
      };

      this.deleteCard = function(place) {
          return $http({
              method: "DELETE",
              url: "/blog/" + place._id
          }).then(function(response) {
              return response;
          });
      };


//Leads Serv
    //   .service("mainServ", function($http) {
        this.getLead = function() {
            return $http({
                method: "GET",
                url: "/leads"
            }).then(function(response) {
                return response.data;
            });
        };

        this.newLead = function(client) {
            return $http({
                method: "POST",
                url: "/leads",
                data: client
            }).then(function(response) {
                console.log(response);
                return response.data;
            });
        };

        this.changeLead = function(client) {
            return $http({
                method: "PUT",
                url: "/leads/" + client._id,
                data: client
            }).then(function(response) {
                return response;
            });
        };

        this.deleteLead = function(client) {
            return $http({
                method: "DELETE",
                url: "/leads/" + client._id
            }).then(function(response) {
                return response;
            });
        };
    });
