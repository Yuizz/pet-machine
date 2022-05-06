var express = require('express');
const CreateUser = require('../cases/CreateUser');
var router = express.Router();

/* GET users listing. */
router.post('/create-user', function(req, res, next) {
  try{
    const createUser = new CreateUser(req.body)
    const user = createUser.create()
    res.send(user);
  }catch(error){
    res.status(400).send(error)
  }
});

router.post('/update-balance', function(req,res,next){
    res.send("oli")
})
module.exports = router;
