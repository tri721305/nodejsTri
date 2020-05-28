const express = require('express');
const app = express();
const port=3000;
app.get('/',function(req,res){
    res.send('<h1>Hello ban Minh Tri dep trai sieu cap vu tru<h1></h1>');
})

app.get('./user', function (req,res){
    res.send('Hihihihi')
})
app.listen(port,function(){
    console.log('Server listening on port '+port);
});