const { json } = require('express');
const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors());
app.use(json());

app.listen(5000, ()=>{
    console.log('Servidor escuchando en el puerto 5000')
})