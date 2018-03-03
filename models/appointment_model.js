module.exports = function(sequelize, DataTypes) {

    var appointment = sequelize.define('appointment', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },

        Name: {
            type: DataTypes.STRING,
            notEmpty: true
        },

        Email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },

        Phone: {
            type: DataTypes.INTEGER,
            notEmpty: true
        },

        Notes: {
            type: DataTypes.TEXT,
            notEmpty: true
        },

        Phone1: {
            type: DataTypes.BOOLEAN
        },

        Email1: {
            type: DataTypes.BOOLEAN
        },

        Day: {
            type: DataTypes.BOOLEAN
        },

    });

    appointment.associate = function(models) {
        appointment.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
    };


    return appointment;
};
