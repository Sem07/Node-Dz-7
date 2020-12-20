const dotenv = require('dotenv');
const express = require('express');

const { apiRouter } = require('./routes');
const { config: { PORT } } = require('./configs');
const { sequelize } = require('./base');

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

// eslint-disable-next-line no-unused-vars
app.use('*', (err, req, res, next) => {
    res
        .status(err.code)
        .json({
            message: err.message,
            ok: false
        });
});
(async () => {
    await sequelize.sync({ alter: true });
    app.listen(PORT, (err) => err && console.log(err) || console.log(`Listen ${PORT} ...`));
})();
