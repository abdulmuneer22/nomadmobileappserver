'use strict';
/* eslint-disable */
module.exports = function(Destination) {

    Destination.remoteMethod('search',{
        http: {
            path: '/search',
            verb: 'post'
          },
          accepts: [{
            arg: 'searchParam',
            type: 'object',
            required: true,
            http: {
              source: 'body'
            },
          }, {
            arg: "x-authenticated-user",
            type: "string",
            http: {
              source: 'header'
            }
          }],
          returns: {
            arg: 'Destinations',
            type: 'object',
            root: true
          },
          description: 'Search for Destination => OriginName | CityType | TripMonth | Budget | Region | TripType are expected params'
    });
};
