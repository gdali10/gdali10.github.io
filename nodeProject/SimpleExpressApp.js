const express = require('express');
const app = new express();

app.get('/', function(request, response){
    response.sendFile('absolutePathToYour/htmlPage.html');
});

let server = app.listen(3005, function(){
    console.log("Started node app on 3005");
});

