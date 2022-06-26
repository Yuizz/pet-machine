var express = require("express");
const CreateUser = require("../cases/CreateUser");
const User = require("../models/User");
const GetUser = require("../cases/GetUser");
const AddBalance = require("../cases/AddBalance");
const SubstractBalance = require("../cases/SubstractBalance");
const db = require("../db")

var router = express.Router();

router.post("/create-user", async function (req, res, next) {
  /*    #swagger.parameters['body'] = {
        in: 'body',
        description: 'User information.',
        required: true,
        schema: { $ref: "#/definitions/CreateUser" }
  } */
  try {
    const createUser = new CreateUser(req.body);
    const user = createUser.create();
    await db.collection('users').insertOne({...user})
    /* #swagger.responses[200] = { 
      schema: { "$ref": "#/definitions/User" },
      description: "User created successfully." } */
    res.send(user);
  } catch (error) {
    console.error(error)
    res.status(400).send(error);
  }
});

router.get("/control-number/:controlNumber", async function (req, res, next) {
  try {
    const getUser = new GetUser();
    // const user = getUser.findByControlNumber(req.params.controlNumber);
    const user = await db.collection('users').findOne({controlNumber: req.params.controlNumber})
    /* #swagger.responses[200] = { 
      schema: { "$ref": "#/definitions/User" },
      description: "User returned successfully." } */
    res.send(user);
  } catch (error) {
    console.error(error)
    res.status(404).send(error);
  }
});

router.get("/rfid/:rfid", async function (req, res, next) {
  try {
    const getUser = new GetUser();
    // const user = getUser.findByRfid(req.params.rfid);
    const user = await db.collection('users').findOne({rfid: req.params.rfid})
    /* #swagger.responses[200] = { 
      schema: { "$ref": "#/definitions/User" },
      description: "User returned successfully." } */
    res.send(user);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.put("/add-balance/:rfid", async function (req, res, next) {
  /*    #swagger.parameters['body'] = {
        in: 'body',
        description: 'Add balance to user.',
        required: true,
        schema: { $ref: "#/definitions/AddBalance" }
  } */
  try {
    const getUser = new GetUser();
    const user = await db.collection('users').findOne({rfid: req.params.rfid})
    const balanceToAdd = req.body.balanceToAdd;
    const currentBalance = user.balance;
    const addBalance = new AddBalance(balanceToAdd, currentBalance).sum();
    await db.collection('users').updateOne({rfid:req.params.rfid}, {$set:{balance:addBalance}})
    user.balance = addBalance;
    res.send(user);
  } catch (error) {
    console.error(error)
    res.status(404).send(error);
  }
});

router.put("/substract-balance/:rfid", async function (req, res, next) {
  /*    #swagger.parameters['body'] = {
        in: 'body',
        description: 'Substract balance from user.',
        required: true,
        schema: { $ref: "#/definitions/SubstractBalance" }
  } */
  try {
    const getUser = new GetUser();
    // const user = getUser.findByRfid(req.params.rfid);
    const user = await db.collection('users').findOne({rfid: req.params.rfid})
    const balanceToSubstract = req.body.balanceToSubstract;
    const currentBalance = user.balance;
    const substractBalance = new SubstractBalance(
      balanceToSubstract,
      currentBalance
    ).substract();
    await db.collection('users').updateOne({rfid:req.params.rfid}, {$set:{balance:substractBalance}})

    user.balance = substractBalance;
    res.send(user);
  } catch (error) {
    console.error(error)
    res.status(404).send(error);
  }
});

module.exports = router;
