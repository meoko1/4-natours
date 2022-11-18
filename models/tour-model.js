const mongoose = require('mongoose');


const tourSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have a name'],
        unique:true
    },
    duration:{
        type: Number,
        required: [true, 'The tour must have a duration']
    },
    maxGroupSize:{
        type: Number,
        required: [true, 'A tour must have a group size']
    },
    difficulty:{
        type: String,
        required: [true, 'A tour must have difficulty level']
    },
    ratingsAverage: {
        type: Number,
         default: 4.5
        },
    ratingsQuantity: {
            type: Number,
             default: 0
            },  
    price: {
        type:Number,
        required: [true, 'A tour must have a price']
    },
    priceDiscount: {
        type: Number,
    },
    summary:{
        type: String,
        trim: true
    },
    Description:{
        type: String,
        trim: true
    },
    imageCover:{
        type: String,
        required: [true, 'The tour must have a cover image']
    },
    images:[String],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    startDates: [Date]
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour ;

