import express from 'express';
//const express = require('express');
const path = require('path');


const app = new express();
const HTML_FILE = path.join(__dirname, '../src/index.html')

app.use(express.json());
app.use(express.urlencoded({xtended: true}));
app.use(express.text());

app.use('/', express.static('./dist-folder'));
app.use('/source-maps', express.static('./dist-folder/source-maps'));
debugger;

app.get('/Robots.txt', (req, res) => {   
  res.send(`
  User-agent: * Disallow: /
  `)
});


app.get('/', 
  function (req, res, next) {
    res.sendFile(HTML_FILE);
});


// All page requests
/*
app.get('/*', 
  function (req, res, next) {
    res.status(200);
    res.send(`TEST: 123`);
    res.end();
});
*/

app.listen(8000, () => {
  console.log(`😎 Server is listening on port 8000`);
});  