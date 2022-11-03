const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, '/public');
app.use(express.static(publicPath));

const bootstrapPath = path.join(__dirname, '/node_modules/');
app.use(express.static(bootstrapPath));

app.listen(3000)
