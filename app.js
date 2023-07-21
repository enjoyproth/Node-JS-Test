const express = require('express');
const debug = require('debug');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3306;

app.use(express.static(__dirname + '/public'));

app.set("views","./src/views");
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('index',{username: 'admin'});
})

app.listen(PORT,()=> {
    debug("listening on port" + (PORT));
});