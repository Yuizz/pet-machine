const swaggerAutoGen = require("swagger-autogen")();
const swaggerOptions = {
  info: {
    version: "1.0.0",
    title: "Documentation",
    description: "API Documentation for clients",
  },
  definitions: {
    CreateUser: {
      $controlNumber: "1514784",
      $mail: "juan.p@example.com",
      $name: "Juan Perez",
      balance: 7,
      $rfid: "1645378452"
    },
    AddBalance: {
      $balanceToAdd: 14
    },
    SubstractBalance:{
      $balanceToSubstract: 5
    },
    User: {
      controlNumber: "17260672",
      mail: "derrick.rose@example.com",
      name: "Derrick Rose",
      createdAt: "2022-06-17T23:13:05.747Z",
      updatedAt: "2022-06-17T23:13:05.747Z"
    }
  }
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./routes/routes.js"];
swaggerAutoGen(outputFile, endpointsFiles, swaggerOptions);
