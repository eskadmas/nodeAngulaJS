'use strict';
module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define('Contact', {
        first_name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING(20),
            unique: 'phone'
        },
        email: {
            type: DataTypes.STRING(30),
            unique: 'email'
        }
    }, {});
    Contact.associate = function(models) {
        // associations can be defined here
        Contact.belongsTo(models.Person, {
            onDelete: 'CASCADE'
        });
    };
    return Contact;
};