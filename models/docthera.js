module.exports = function (sequelize, Sequelize) {
    
    var Counselors = sequelize.define("Counselors", {
        
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        phone: {
            type: Sequelize.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
        classification:{
                type: Sequelize.STRING,
            }
    });
    return Counselors;
};
