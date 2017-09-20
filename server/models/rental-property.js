/*eslint-disable*/
'use strict';
let app = require('../../server/server')

module.exports = function(Rentalproperty) {

    Rentalproperty.remoteMethod('getByLocationId',{
        http: {
            path: '/NearByProperties/:locationId',
            verb: 'get'
          },
          accepts: [{
            arg: 'locationId',
            type: 'string',
            required: true
          }],
          returns: {
            arg: 'properties',
            type: 'object',
            root: true
          },
          description: 'get all properties in a location'
    });

    let RentalpropertyModel = app.models.Rentalproperty;

    Rentalproperty.getByLocationId = function(id,cb){

        let query = {
            "where" : {
                "locationId" : id
            },
            "include" : {
                "relation" : 'PropertyImage',
                'scope' : {
                    "fields" : ['uri']
                }
            }
        }
        Rentalproperty.find(query)
            .then((properties)=>{
                cb(null,properties)
            })
            .catch((error)=>{
                cb(error)
            })
    }



    Rentalproperty.searchProperties = function(searchParam,cb){
        if(searchParam.locationId && searchParam.city){
            
            let _queryParams = {
                "locationId" : searchParam.locationId
            }

            if(searchParam.city !== null){
                _queryParams = Object.assign({city : searchParam.city},_queryParams)
            }

            if(searchParam.bedrooms !== null){
                _queryParams = Object.assign({bedrooms : searchParam.bedrooms},_queryParams)
            }

            console.log('==============_queryParams======================');
            console.log(_queryParams);
            console.log('===============_queryParams=====================');
            let query = {
                "where" : _queryParams,
                "include" : {
                    "relation" : 'PropertyImage',
                    'scope' : {
                        "fields" : ['uri']
                    }
                }
            }

            

            Rentalproperty.find(query)
            .then((properties)=>{
                cb(null,properties)
            })
            .catch((error)=>{
                cb(error)
            })
            //cb(null,'test')
        }else {
            let error = {
                data : 'locationId and city are required',
                statusCode: 400
            }
            cb(error)
        }
        // let searchParams = {
        //     locationId : "localityId",
        //     bedrooms : "bedroomCount",
        //     furnishing : "furnishing",
        //     city : "cityName"
        // }
        
    }

    Rentalproperty.remoteMethod('searchProperties',{
        http: {
            path: '/Search',
            verb: 'post'
          },
          accepts: [{
            arg: 'searchParam',
            type: 'object',
            required: true,
            http: {
              source: 'body'
            }
        }
        ],
        returns: {
        arg: 'properties',
        type: 'object',
        root: true
        },
        description: 'Search for properties'
    })
}
