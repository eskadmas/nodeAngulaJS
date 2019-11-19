angular.module('myContacts')
    .controller('MainController', function($scope, $interval, $http) {

        $scope.contact = {
            first_name: '',
            last_name: '',
            phone: '',
            email: ''
        };

        $scope.contacts = [];

        $scope.createContact = function() {
            console.log('Send new contact to the Server', $scope.contact);
            $http.post('http://localhost:8000/api/contacts', $scope.contact)
                .then(function(response) {
                    console.log(response);
                    $scope.contacts.push(response.data);
                    $scope.contact = {};
                }, errorCallback);
        }

        $http.get('http://localhost:8000/api/contacts')
            .then(successCallback, errorCallback)

        function successCallback(response) {
            console.log(response);
            $scope.contacts = response.data;
        }

        function errorCallback(response) {
            console.error(response);
        }

        console.log('MainController');
    });