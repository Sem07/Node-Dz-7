const { Router } = require('express');

const authRouter = require('../auth/auth.router');
const carsRouter = require('../car/car.router');
const usersRouter = require('../user/user.router');

const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/cars', carsRouter);
apiRouter.use('/users', usersRouter);

module.exports = apiRouter;
