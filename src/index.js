const express = require('express');
const Soma = require('./soma');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('olá mundo')
})

app.get('/soma/:a/:b', (req, res) => {
    const { a, b } = req.params;

    let result = Soma(a, b);

    res.json({
        result
    })
})


app.listen(port, () => {
    console.log('server running on port', port)
})