const { carsServices } = require('../../serrvice');
const { CREATED, NO_CONTENT } = require('../../configs/status-codes');

module.exports = {
    getAllCars: async (req, res, next) => {
        try {
            const cars = await carsServices.getCars();

            res.json(cars);
        } catch (e) {
            next(e);
        }
    },

    getOneCarsByModel: async (req, res, next) => {
        try {
            const { model } = req.params;

            const car = await carsServices.getCarsByModel(model);

            res.json(car);
        } catch (e) {
            next(e);
        }
    },

    createCar: async (req, res, next) => {
        try {
            const car = req.body;

            const newCar = await carsServices.createCar(car);

            res.status(CREATED).json(newCar);
        } catch (e) {
            next(e);
        }
    },

    updateCar: async (req, res, next) => {
        try {
            const updateCar = req.body;
            const { id } = req.params;

            const db = await carsServices.updateCar(id, updateCar);

            res.status(CREATED).json(db);
        } catch (e) {
            next(e);
        }
    },

    deleteCar: async (req, res, next) => {
        try {
            const { id } = req.params;
            const car = await carsServices.deleteCar(id);

            res.status(NO_CONTENT).json(car);
        } catch (e) {
            next(e);
        }
    },
};
