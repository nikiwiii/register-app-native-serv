var express = require('express');
var router = express.Router();
const app = express()
const port = 4000

people = []
router.get('/', function(req, res, next) {
    // res.send('respond with a resource');
     res.json([{}]);
   });
   module.exports = router;
  

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})