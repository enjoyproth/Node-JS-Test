const express = require('express');
const debug = require('debug');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT;

app.use(morgan('combined'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('Welcome');
})

app.listen(port,()=> {
    debug("listening on port" + (port));
});