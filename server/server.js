const express = require('express');

const app = express();
const PORT = 5000;
// const wolvesArray = 
let bodyParser = require('body-parser')
const names = [
    
];
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}))

app.get('/names', (req, res) => {
    res.send(names);
});
app.post('/name', (req, res) => {
    console.log(req.body)
   names.push(req.body)
    res.send(201);
});


app.listen(PORT, () => {
    console.log('listening on port', PORT)
});