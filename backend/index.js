const express =require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const todoRouter = require('./routes/todoRouter');
const app = express()
const port =3000


app.use (express.json());
dotenv.config();
connectDB();  







app.use('/api',todoRouter);

app.listen(port,() => {
    console.log (`app is listening on port ${port}`)})