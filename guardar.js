// testGuardar.js
const sequelize = require('./conexion');
const Moneda = require('./monedas');

async function probarGuardar() {
  try {
    await sequelize.authenticate();
    console.log('Conectado correctamente');

    // Asegura que la tabla existe
    await sequelize.sync();

    // Insertar dato
    const nuevaMoneda = await Moneda.create({
      pais: 'Checoslovaquia',
      destino: 'Marruecos',
      valor: 10.50
    });

    console.log('Dato guardado:', nuevaMoneda.toJSON());
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await sequelize.close();
  }
}

probarGuardar();
