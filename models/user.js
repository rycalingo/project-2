module.exports = function (sequelize, Sequelize) {

    var User = sequelize.define('user', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        firstname: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        lastname: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        username: {
            type: Sequelize.TEXT
        },

        about: {
            type: Sequelize.TEXT
        },

        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false
        },

        last_login: {
            type: Sequelize.DATE
        },

        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active',
        },

        // q1_aldis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q2_aldis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q3_aldis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q4_aldis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q5_aldis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q6_aldis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q7_aldis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q8_aldis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q9_aldis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q10_aldis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q1_eadis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q2_eadis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q3_eadis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q4_eadis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q5_eadis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q6_eadis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q7_eadis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q8_eadis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q9_eadis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q10_eadis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q1_genaxdis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q2_genaxdis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q3_genaxdis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q4_genaxdis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q5_genaxdis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q6_genaxdis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false   
        // },
        // q7_genaxdis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q8_genaxdis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q9_genaxdis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q10_genaxdis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q1_mddis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q2_mddis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q3_mddis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q4_mddis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q5_mddis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q6_mddis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q7_mddis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q8_mddis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q9_mddis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q10_mddis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q1_scrydis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q2_scrydis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q3_scrydis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q4_scrydis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q5_scrydis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q6_scrydis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q7_scrydis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q8_scrydis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q9_scrydis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
        // q10_scrydis: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // },
    });  

    // let transporter = nodemailer.createTransport({
    //     sendmail: true,
    //     newline: 'unix',
    //     path: '/usr/sbin/sendmail'
    // });
    // transporter.sendMail({
    //     from: 'sender@example.com',
    //     to: 'recipient@example.com',
    //     subject: 'Message',
    //     text: 'I hope this message gets delivered!'
    // }, (err, info) => {
    //     console.log(info.envelope);
    //     console.log(info.messageId);
    // });

    return User;

}
