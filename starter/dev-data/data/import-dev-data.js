const fs = require('fs')
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Tour = require('./../../../models/tour-model')
dotenv.config({path: './../../../config.env'});

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose
.connect(DB, {
useNewUrlParser: true,
useCreateIndex: true,
useFindAndModify: false
}).then(con =>{
    console.log(con.connections);
    console.log('DB connection succeful');
});

// Read JSON FILE
const tours = JSON.parse(fs.readFileSync('tours-simple.json', 'utf-8'));

// Importing the Data into DB
const importData =async  ()=> {
    try { await Tour.create(tours);
        console.log('Data succesfully loaded')
    }
    catch(err){
        console.log(err)
    }
}

//Deleting Data  from collection
const deleteData = async ()=> {
    try {
        await Tour.deleteMany();
        console.log('Data deleted succesfully')
        process.exit()
       
    }
 catch (err){
    console.log(err);
 }
}


if (process.argv[2] === '--import') {importData();}
else {if (process.argv[2] === '--delete') { deleteData()}};


