// User Modal Schema
import { Schema } from 'mongoose';
import mongoose from 'mongoose';

const CitySchema = new Schema({
    image: String,
    name: String,
    air_quality_now: Number,
    air_quality: Number,
    latitude: String,
    longitude: String,
    country: String,
    state_code: String,
    state: String,
    internet_speed: Number,
    air_quality_score: Number,
    rank: Number,
    temperatureC: Number,
    temperatureF: Number,
    internet_score: Number,
    leisure_quality: Number,
    safety_level: Number,
});

const Cities = mongoose.model('Cities', CitySchema);

export default Cities;
