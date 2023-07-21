const express = require('express');
const debug = require('debug');
const morgan = require('morgan');

const app = express();
const port = 3306;

app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send('Welcome');
})

app.listen(port,()=> {
    debug("listening on port" + (port));
});