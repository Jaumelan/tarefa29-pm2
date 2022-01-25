const express = require('express');
const cors = require('cors');
const port = 3000;
const fs = require('fs');

const app = express();

app.use(cors());
app.use(express.json());

//importação de módulos das rotas
const birthdates = require('./components/birthday.js');
const funcionarios = require('./components/funcionarios.js');
const onlyPhones = require('./components/ramais');


//configurações das rotas
app.get('/aniversariantes', (req,res) => {
    console.log(req.query);
    const month = req.query.birthMonth;
    res.send(birthdates(month));
})

app.get('/funcionarios', (req,res) => {
    const sector = req.query.sector;
    res.send( funcionarios(sector) )
})

app.get('/ramais', (req, res) => res.send( onlyPhones()))

// post route
app.post('/adicionar', (req,res) => {
    let data = req.body;
    console.log(data);
    let before = JSON.parse( fs.readFileSync("database.json") );
    data.idNumber = before.length + 1;
    before.push(data);

    fs.writeFileSync("database.json", JSON.stringify(before))
    res.json(data);
})

//listen
app.listen(port, () => console.log(`Yeap! online on ${port}`));