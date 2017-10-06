// User Modal Schema
import { Schema } from 'mongoose';
import mongoose from 'mongoose';

const AirportSchema = new Schema({
iata: String,
lon: String,
iso: String,
status: Number,
name: String,
continent: String,
type: String,
lat: String,
size: String,
});

const Airport = mongoose.model('Airport', AirportSchema);

export default Airport;
