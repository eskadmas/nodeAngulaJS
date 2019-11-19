'use strict';
module.exports = (sequelize, DataTypes) => {
    const Person = sequelize.define('Person', {
        first_name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(30),
            allowNull: false
        }
    }, {});
    Person.associate = function(models) {
        // associations can be defined here
        Person.hasMany(models.Contact);
    };
    return Person;
};