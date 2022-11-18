const express = require('express');
const morgan =  require('morgan');
const fs = require('fs')
const app = express();


app.use(express.json());
app.use(morgan('dev'))
app.use(express.static(`${__dirname}/public`));




 const tourRouter = require('./routes/tourRoutes.js');
 const userRouter = require('./routes/userRoutes.js');
 
 app.use('/api/v1/tours',  tourRouter);
 app.use('/api/v1/users',  userRouter);

app.get('/', (req, res)=>{
    res.send('SERVER IS UP AND RUNNING')
})


module.exports = app;