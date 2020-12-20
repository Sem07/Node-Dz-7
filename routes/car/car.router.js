const { Router } = require('express');

const { carMiddlewares } = require('../../middlewares');
const { carsController } = require('../../controllers');

const carRouter = Router();

carRouter.get('/', carsController.getAllCars);
carRouter.get('/:models', carMiddlewares.chekModelCar, carsController.getOneCarsByModel);
carRouter.post('/', carMiddlewares.carValid, carsController.createCar);
carRouter.put('/:id', carMiddlewares.checkIdCar, carMiddlewares.chekCarCreated,
    carMiddlewares.checkUpdateCar, carsController.updateCar);
carRouter.delete('/:id', carMiddlewares.checkIdCar, carMiddlewares.chekCarCreated, carsController.deleteCar);

module.exports = carRouter;
