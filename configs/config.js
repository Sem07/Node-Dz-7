module.exports = {
    JWT_SECRET: process.env.JWT_SECRET || 'secret',
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'resfreshsecret',
    PORT: process.env.PORT || 5000,
    USERNAME_DB: process.env.USERNAME_DB || 'root',
    PASSWORD_DB: process.env.PASSWORD_DB || 'root',
    DATABASE: process.env.DATABASE || 'users',
};
