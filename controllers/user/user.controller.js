const { CREATED, NO_CONTENT } = require('../../configs/status-codes');
const { passwordHash } = require('../../utils');
const { userServices } = require('../../serrvice');

module.exports = {
    getAllUsers: async (req, res, next) => {
        try {
            const users = await userServices.getUsers();

            res.json(users);
        } catch (e) {
            next(e);
        }
    },

    createUser: async (req, res, next) => {
        try {
            const user = req.body;
            user.password = await passwordHash(user.password);

            const newUser = await userServices.createUser(user);

            res.status(CREATED).json(newUser);
        } catch (e) {
            next(e);
        }
    },

    getOneUsers: async (req, res, next) => {
        try {
            const { userId } = req.params;

            const user = await userServices.getUserById(userId);

            res.json(user);
        } catch (e) {
            next(e);
        }
    },

    deleteUser: async (req, res, next) => {
        try {
            const { email } = req.params;

            const user = await userServices.deletedUser(email);

            res.status(NO_CONTENT).json(`User delete: ${user}`);
        } catch (e) {
            next(e);
        }
    },

    updateUser: async (req, res, next) => {
        try {
            const updateUser = req.body;
            const { id } = req.params;

            const db = await userServices.updateUser(id, updateUser);

            res.status(CREATED).json(db);
        } catch (e) {
            next(e);
        }
    },
};
