
const express = require('express');
const app =express()
const router = express.Router();

const userController = require('./../controllers/userControllers')

app.use('/api/v1/users',  router);



router
    .route('/')
    .get(userController.getAllUsers)
    .post(userController.createUsers);

router
    .route('/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

    module.exports= router;