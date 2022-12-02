import sequelize from 'sequelize'
const dataTypes = sequelize.DataTypes

module.exports = (sequelize: any) => {
    sequelize.define("Users",

    {
        id: {
            type: dataTypes.UUID,
            allowNull:false,
            primaryKey: true,
            defaultValue: dataTypes.UUIDV4
        },

        name: {
            type: dataTypes.STRING,
            allowNull: false
        },

        phone: {
            type: dataTypes.STRING,
            allowNull: false
        },

        email: {
            type: dataTypes.STRING,
            allowNull: false
        },

       /*  isAdmin: {
            type: dataTypes.BOOLEAN,
            
        } */
    });
};