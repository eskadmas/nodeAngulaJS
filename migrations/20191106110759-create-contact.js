'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Contacts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            first_name: {
                allowNull: false,
                type: Sequelize.STRING(30)
            },
            last_name: {
                allowNull: false,
                type: Sequelize.STRING(30)
            },
            phone: {
                allowNull: false,
                type: Sequelize.STRING(20),
                unique: 'phone'
            },
            email: {
                type: Sequelize.STRING(30),
                unique: 'email'
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Contacts');
    }
};