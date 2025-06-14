const express = require('express')
const bodyParser = require('body-parser')
const monedas = require('./monedas') 
const app = express()
const puerto = 3000
const cors = require('cors');
app.use(cors());


app.use(bodyParser.json())

const jwt = require('jsonwebtoken')
const secretKey = 'secret'

app.listen(puerto, () => {
    console.log('servicio iniciado')
})

app.post('/login', (req, res) => {
    const { usuario, password } = req.body;
    if (usuario == 'admin' && password == '123') {
        const token = jwt.sign({ usuario }, secretKey, { expiresIn: '1h' });
        res.send(token);
    } else {
        res.sendStatus(404);
    }
});


function verificarToken(req, res, next) { 
    const header = req.header('Authorization') || '';
    const token = header.split(' ')[1];
    if (!token) {
        res.status(401).json({ mensaje: 'token no proporcionado' });
    } else {
        try {
            const payload = jwt.verify(token, secretKey);
            next();
        }
        catch {
            res.status(400).json({ mensaje: 'token incorrecto' })
        }
    }
}

app.post('/convertir', async (req, res) => {
    const { origen, destino, cantidad } = req.body;
    
    
    const data = await monedas.findOne({
        where: {
            origen, destino
        }
    });

    if (!data) {
        res.sendStatus(404)
    }

    const { valor } = data;
    const resultado = cantidad * valor;

    res.send({
        origen, destino, cantidad, resultado
    })

})

app.get('/monedas', verificarToken, async (req, res) => {
    const data = await monedas.findAll();
    res.send(data);
})