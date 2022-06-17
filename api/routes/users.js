var express = require('express');
const CreateUser = require('../cases/CreateUser');
const User = require('../models/User');
const GetUser = require('../cases/GetUser')
const AddBalance = require ('../cases/AddBalance')
const SubstractBalance = require('../cases/SubstractBalance')

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


router.get('/:controlNumber', function(req,res, next){
  try{
  const getUser = new GetUser()
  const user = getUser.find(req.params.controlNumber)
  res.send(user)
  }catch(error){
    res.status(404).send(error)
  }
})

router.put('/add-balance/:controlNumber', function(req, res, next){
  try{
    const getUser = new GetUser()
    const user = getUser.find(req.params.controlNumber)
    const balanceToAdd = req.body.balanceToAdd
    const currentBalance = user.balance
    const addBalance = new AddBalance(balanceToAdd, currentBalance).sum()
    user.balance = addBalance 
    res.send(user)
  }catch(error){
    res.status(404).send(error)
  }
})

router.put('/substract-balance/:controlNumber', function(req, res, next){
  try{
    const getUser = new GetUser()
    const user = getUser.find(req.params.controlNumber)
    const balanceToSubstract = req.body.balanceToSubstract
    const currentBalance = user.balance
    const substractBalance = new SubstractBalance(balanceToSubstract, currentBalance).substract()
    user.balance = substractBalance 
    res.send(user)
  }catch(error){
    res.status(404).send(error)
  }
})


module.exports = router;
