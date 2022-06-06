const sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

// Actividad Turística con las siguientes propiedades:
// ID
// Nombre
// Dificultad (Entre 1 y 5)
// Duración
// Temporada (Verano, Otoño, Invierno o Primavera)

module.exports=(sequelize) => {
    sequelize.define("activity", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
},
    difficulty: {
        type: DataTypes.INTEGER,
},
    duration: {
        type: DataTypes.STRING,
},
    season: {
        type: DataTypes.STRING
    },
 });
};