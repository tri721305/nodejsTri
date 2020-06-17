var express = require('express');
var app = express();

var port = 4000;

app.get('/', function(req,res){
    res.send('<h1>Hello may cung</h1>');
})
app.get('/users', function(req,res){
    res.send('user list');
})
app.listen(port, function(){
    console.log('Sv listening on port' + port);
})