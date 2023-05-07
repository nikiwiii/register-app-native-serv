var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const e = require('express');
const app = express()
const port = 4000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

people = [
    {name: 'janusz', password: 'jajaja', registered: new Date('7.05.2023 17:10:29').toLocaleString()},
    {name: 'krzysztof', password: 'ajaj', registered: new Date().toLocaleString()},
  ]  

app.get('/people', function(req, res) {
    res.send(JSON.stringify(people, null, 5))
})

app.post('/send', function(req,res) {
    broke = false
    people.forEach(e => {
        if(e.name == req.body.name){
            res.send(JSON.stringify('user exists'))
            broke = true
        }
    });
    if(!broke){
        console.log(req.body);
        people.push(req.body)
        res.send(JSON.stringify('jest git'))
    }
})

app.post('/delete', function(req,res) {
    console.log(req.body);
    people = people.filter((e) => e.registered !== req.body.registered)
})

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})