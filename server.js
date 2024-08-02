const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/answer', (req, res) => {
    const userAnswer = req.body.answer;
    console.log(`Respuesta del usuario: ${userAnswer}`);
    res.json({ answer: userAnswer });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
