var express = require('express');
const CreateUser = require('../cases/CreateUser');
var router = express.Router();

/* GET users listing. */
router.post('/login', function(req, res, next) {
  const createUser = new CreateUser(req.body)
  const user = createUser.create()
  res.send(user);
});

module.exports = router;
