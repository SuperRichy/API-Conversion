const { DataTypes } = require('sequelize');
const sequelize = require('./conexion')

const monedas = sequelize.define('monedas', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    pais: { type: DataTypes.STRING },
    destino: { type: DataTypes.STRING },
    valor: { type: DataTypes.DOUBLE }
}, {
    timestamps: false
})

const billetes = sequelize.define('billetes', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    pais: { type: DataTypes.STRING },
    denominacion: { type: DataTypes.DOUBLE },
    año: { type: DataTypes.INTEGER }
}, {
    timestamps: false
});

module.exports = monedas;   