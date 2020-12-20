module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('User', {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            login: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            }
        });

        await queryInterface.createTable('Car', {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            model: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            price: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
            },
            year: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false
            },
        });
        await queryInterface.createTable('O_Auth', {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            access_token: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            refresh_token: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            user_id: {
                type: Sequelize.DataTypes.INTEGER,
                foreignKey: true,
                allowNull: false,
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                references: {
                    model: 'users',
                    as: 'user',
                    key: 'id'
                }
            },
            created_at: {
                type: Sequelize.DataTypes.DATE,
                defaultValue: Sequelize.fn('NOW'),
                allowNull: false
            }
        });
        await queryInterface.createTable('User_With_Car', {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            user_id: {
                type: Sequelize.DataTypes.INTEGER,
                foreignKey: true,
                allowNull: false,
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                references: {
                    model: 'users',
                    as: 'user',
                    key: 'id'
                }
            },
            car_id: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                foreignKey: true,
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                references: {
                    model: 'cars',
                    as: 'car',
                    key: 'id'
                }
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Car');

        await queryInterface.dropTable('User');

        await queryInterface.dropTable('O_Auth');

        await queryInterface.dropTable('User_With_Car');
    }
};
