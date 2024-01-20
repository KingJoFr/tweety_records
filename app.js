require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 5001 || process.env.PORT;
const expresslayout = require('express-ejs-layouts')
//templating engine

app.use(expresslayout);
app.set('layout', './layouts/main');
//app.set('views', '/views')
app.set('view engine','ejs');
app.use(express.static('public'));
app.use('/', require('./server/routes/main'));




app.listen(PORT, () =>{
    console.log(`app listening on port ${PORT}`)
});