'use strict';
/* eslint-disable */
let app = require('../../server/server')


module.exports = function(City) {
    City.remoteMethod('search',{
        http: {
            path: '/search',
            verb: 'get'
          },
          accepts: [{
            arg: 'text',
            type: 'string',
            required: true
          }],
          returns: {
            arg: 'City',
            type: 'object',
            root: true
          },
          description: 'search a city by string'
    });

    let CityModel = app.models.City;

    City.search = function(text,cb){
        var pattern = new RegExp('.*'+text+'.*', "i"); /* case-insensitive RegExp search */
        let query = {
            "where" : {
                or : [
                    {"name" : {like : pattern}},
                    {"country" : {like : pattern}}
                ]
                
            }
        }
        City.find(query)
            .then((city)=>{
                cb(null,city)
            })
            .catch((error)=>{
                cb(error)
            })
    }
  
};
