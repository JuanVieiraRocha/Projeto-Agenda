require('dotenv').config();

// Salvando sessões e armazenando em navegador

const express = require('express');
const session = require('express-session')
const flash = require('connect-flash')
const { default: mongoose } = require('mongoose');

// Middlewares e arquivos

const { middlewareGlobal } = require('./src/middlewares/middleware')
const app = express();
const path = require("path")
const routes = require('./routes')

//Conectando banco de dados
async function conexaoDB(){
  try{
    await mongoose.connect(process.env.CONNECTIONSTRING);
    console.log("Conexão ao banco de dados concluída")
  } catch(e) {
    cconsole.log("Erro na conexão: ", e)
  }
}

//configurações bases

app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

//Definindo opções da sessão

const sessionOptions = session({
  secret: 'akasdfj0út23453456+54qt23qv  qwf qwer qwer qewr asdasdasda a6()',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});

//autorizando uso de sessões e armazenamentos

app.use(sessionOptions)
app.use(flash());
app.use(express.urlencoded({extended: true}))
//autorizando middlewares e rotas
app.use(middlewareGlobal);
app.use(routes)

// Ligar o site
async function startServer() {
  try {
    await conexaoDB();

    app.listen(3000, () => {
      console.log('Acessar http://localhost:3000/index');
      console.log('Servidor executando na porta 3000');
    });
  } catch (e){
    console.log('ERRO: ', e)
  }
}
startServer();
