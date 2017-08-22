'use strict';

/**
 * @ngdoc function
 * @name hotelsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hotelsApp
 */
angular.module('hotelsApp')
    .controller('MainCtrl', function() {
        this.getStars = function(star) {
            var ratings = [];

            for (var i = 0; i < star; i++) {
                ratings.push(i)
            }

            return ratings;
        };
        this.places = [{
            location: 'London, United Kingdom',
            city: 'London',
            hotelsCount: 898,
            hotels: [{
                name: 'The May Fair',
                mrp: 232,
                price: 192,
                star: 4
            }, {
                name: 'Grand Plaza Serviced Apartments',
                price: 78,
                star: 3
            }, {
                name: 'Lancaster Gate Hotel',
                mrp: 64,
                price: 61,
                star: 5
            }, {
                name: 'Radisson Edwardian Grafton Hotel',
                price: 102,
                star: 2
            }, {
                name: 'The Rembrandt',
                mrp: 122,
                price: 112,
                star: 3
            }]

        }, {
            location: 'New York, New York, United States',
            city: 'New York',
            hotelsCount: 575,
            hotels: [{
                name: 'The Waldorf Astoria',
                price: 154,
                star: 2
            }, {
                name: 'Park Central New York Hotel',
                mrp: 121,
                price: 89,
                star: 5
            }, {
                name: 'Hilton Garden Inn New York/West 35th Street',
                price: 74,
                star: 4
            }, {
                name: 'Hilton New York',
                price: 147,
                star: 3
            }, {
                name: 'Hotel Pennsylvania',
                price: 60,
                star: 4
            }]

        }, {
            location: 'Paris, France',
            city: 'Paris',
            hotelsCount: 1721,
            hotels: [{
                name: 'Sofitel Paris Le Faubourg',
                price: 285,
                star: 5
            }, {
                name: 'Pullman Paris Tour Eiffel',
                price: 168,
                star: 4
            }, {
                name: 'Champs Elysees Mac Mahon',
                price: 192,
                star: 3
            }, {
                name: 'Hotel Regina',
                price: 159,
                star: 2
            }, {
                name: 'Hotel Pershing Hall Paris',
                price: 283,
                star: 4
            }]

        }];
        this.places[0].open = true;
    });