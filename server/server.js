import express from 'express'

// create express app
const app = new express();

// use json middleware
app.use(express.json());

// start express server on port 8080
app.listen(8080);