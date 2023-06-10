import express from "express";
const app = express();
import cors from 'cors'
import bodyparser from 'body-parser'
import dotenv from 'dotenv';

dotenv.config();

import axios from "axios";

const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.use(bodyparser.json());



app.post('/', async function(req,res){
  try {
    const { source, destination, date } = await req.body;
    
    const response = await axios.get(API_URL, {
      params: {
        fly_from: source,
        fly_to: destination,
        date_from: date,
        date_to: date,
        partner_market:'in',
        partner: process.env.USER_NAME,
        
      },
      headers: {
        'apikey': API_KEY,
      },
    });

    const { data } = response.data;

    if (data && data.length > 0) {
      const flightPrices = {};
      data.forEach((flight) => {
        console.log(flight)
        flightPrices[flight.airlines.join(', ')] = `₹${flight.price}`;
      });

      res.json(flightPrices);
    }

    throw new Error('No flight prices found for the given cities and date.');
  } catch (error) {
    console.error('An error occurred while fetching flight prices:', error.message);
  }
}
)



app.listen(3000, (req, res) => {
  console.log("LISTENING ON PORT 3000");
})


