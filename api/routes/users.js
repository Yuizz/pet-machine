var express = require("express");
const CreateUser = require("../cases/CreateUser");
const User = require("../models/User");
const MongoUserRepository = require("../models/MongoUserRepository")
const GetUser = require("../cases/GetUser");
const AddBalance = require("../cases/AddBalance");
const SubstractBalance = require("../cases/SubstractBalance");
const db = require("../db")

var router = express.Router();
const userRepository = new MongoUserRepository(db)

router.post("/create-user", async function (req, res, next) {
  /*    #swagger.parameters['body'] = {
        in: 'body',
        description: 'User information.',
        required: true,
        schema: { $ref: "#/definitions/CreateUser" }
  } */
  try {
    const createUser = new CreateUser(userRepository, req.body);
    const user = await createUser.create();
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
    const getUser = new GetUser(userRepository);
    const user = await getUser.findByControlNumber(req.params.controlNumber)
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
    const getUser = new GetUser(userRepository);
    const user =  await getUser.findByRfid(req.params.rfid)
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
    const updatedUser = await new AddBalance(userRepository, req.params.rfid, req.body.balanceToAdd).sum()
    res.send(updatedUser);
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
    const getUser = new GetUser(userRepository);
    const user = await getUser.findByRfid(req.params.rfid)
    const balanceToSubstract = req.body.balanceToSubstract;
    const currentBalance = user.balance;
    const substractBalance = new SubstractBalance(
      balanceToSubstract,
      currentBalance ? currentBalance : 0
    ).substract();
    await userRepository.updateBalanceByRfid(req.params.rfid, substractBalance)
    res.send({...user, balance:substractBalance});
  } catch (error) {
    console.error(error)
    res.status(404).send(error);
  }
});

module.exports = router;
