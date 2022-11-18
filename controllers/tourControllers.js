const { query } = require('express');
const express = require('express');

const Tour = require('../models/tour-model');



exports.getAllTours = async (req,res)=>{
 try {

    const queryObj = { ...req.query };
    const excludeFields= ['page', 'sort', 'limit', 'field'];
    excludeFields.forEach(el =>delete queryObj[el]);

    console.log(queryObj);
    const tours =  await Tour.find(queryObj);

    res.status(200).json({
        status:'Sucess',   
        // result: tours.length,
        data:{
        tours: tours
        // }
            }
    });

 }
 catch (err) {
    res.status(404).json({
        status: 'Failed',
        message: err
    })
}

};

exports.getTour = async (req,res ) => {

   const tour = await  Tour.findById(req.params.id)
    res.status(200).json({
        status:'success',
         data:{
           tour: tour
        }
    })
};

exports.createTour =async (req,res)=>{

try {  const newTour = await Tour.create(req.body);
    res.status(201).json({
     status: 'Succesfull',
     data: {
         tour: newTour
     }
    });
}
catch (err) {
    res.status(400).json({
        status: 'FAIL',
        message: err
    })
}
};


 
     
    // const newId = tours[tours.length -1].id + 1;
    // const newTour = Object.assign({id: newId}, req.body);
    // tours.push(newTour);

    // fs.writeFile('./starter/dev-data/data/tours-simple.json', JSON.stringify(tours), err =>{
    //     res.status(201)
    //     .json({status:'success',
    // data: newTour})

    // });

exports.updateTour = async (req,res)=>
{ try {
    const updatedTour =  await Tour.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
        runValidators: true
    })
    
    //if (!tours) return res.status(404).json({
//    status:'Failed',
//    message: ' Invalid data'
// })
   res.status(204).json({
       status:'success',
       data:{
           tour: updatedTour
       }
   });
}
  catch (err) {
    res.status(404).json({
        status: 'failed',
        message: err
    })
  }
}

exports.deleteTour = async (req,res)=>
  {try {

    const tour =  await Tour.findByIdAndDelete(req.params.id, req.body,)
    // if (!tours) return res.status(404).json({
//     status:'Failed',
//     message: ' Invalid data'
//  })
    res.status(204).json({
        status:'success',
        // data:{
        //     tours: 'Null'
        // }
    });
  }
    
    catch(err) {
        res.status(404).json({
            status: 'Failed',
            message: error
        })
    }

 }
