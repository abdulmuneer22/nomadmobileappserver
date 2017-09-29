import mongoose from 'mongoose'
import constants from './constants'

mongoose.Promise = global.Promise;

mongoose.set('debug',true);

mongoose.connect(constants.DB_URL,{
    useMongoClient : true
})

mongoose.connection
    .once('open',()=>{
        console.log(
            "Mongo DB Running Successfully"
        )
    })
    .on('error' , e => {
        throw e
    });


