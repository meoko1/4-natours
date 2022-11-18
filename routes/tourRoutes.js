
const express = require('express');
const fs = require('fs');
const router = express.Router();
const app = express();

app.use('/api/v1/tours', router)
app.use(express.json());

const tours = JSON.parse(fs.readFileSync('../4-NATOURS/starter/dev-data/data/tours-simple.json'));

const tourController = require ('../controllers/tourControllers')


router
.route('/')
.get(tourController.getAllTours)
.post(tourController.createTour);

router
.route('/:id')
.get(tourController.getTour)
.patch(tourController.updateTour)
.delete(tourController.deleteTour);

module.exports = router;