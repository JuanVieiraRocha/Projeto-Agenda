require('dotenv').config();
const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const path = require("path")
const routes = require('./routes')


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'public')))


app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(routes)



// Ligar o site
app.listen(3000, () => {
  console.log('Acessar http://localhost:3000/index');
  console.log('Servidor executando na porta 3000');
});
