const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('character', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lasname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gim_leader: {
            type: DataTypes.STRING,
            allowNull: true
        },
        iscoach: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        stuffed: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },{
        timestamps: false,
    })
}