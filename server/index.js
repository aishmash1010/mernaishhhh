import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import memesRoutes from './routes/memes.js';
import dotenv from 'dotenv'
const app = express();
/**
 * We connect to database from here
 *  and also use environment variables for sensitive data
 * the base route is set to memes from here.
 */

dotenv.config()
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/memes', memesRoutes);

//const CONNECTION_URL = 'mongodb+srv://aishmash:aishmash123@cluster0.sbx77.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// Configure Mongo
const database = process.env.CONNECTION_URL || "mongodb://127.0.0.1:27017";

// Connect to Mongo with Mongoose

mongoose.connect(database, { useNewUrlParser: true, useUnifiedTopology: true}).then(() => app.listen(PORT,() => console.log(`Database connected! Server running on port : ${PORT}`))).catch((error) => console.log(error.message));
mongoose.set('useFindAndModify',false);
