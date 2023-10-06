process.env.NODE_ENV = process.env.NODE_ENV || 'development';
let express = require('express');
let appConfig = require('./config/express');
let app = appConfig();
let path = require('path')

app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');
