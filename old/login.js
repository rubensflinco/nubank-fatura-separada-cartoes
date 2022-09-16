const { NubankApi } = require("nubank-api"); // CommonJS syntax
// import { NubankApi } from "nubank-api"; // ES Modules syntax
const uuid = require("uuid"); 
// import { v4 as uuidv4 } from "uuid"; // Browser/Node.js

const { createInterface } = require("readline"); 
const { writeFile } = require("fs/promises"); 
// import { createInterface } from "readline";
// import { writeFile } from "fs/promises";

const CPF = "35369611858";
const PASSWORD = "63109520";
const AUTH_CODE = uuid.v4();

const api = new NubankApi();

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  `Generate a QRcode and read with the app: \nhttps://chart.googleapis.com/chart?cht=qr&chs=380x380&chl=${AUTH_CODE}`,
  async () => {
    try {
      await api.auth.authenticateWithQrCode(CPF, PASSWORD, AUTH_CODE);
      console.log("You are authenticated!");
      await writeFile("./authState.json", JSON.stringify(api.authState)); 
      process.exit(0);
    } catch (e) {
      console.error(e.stack);
    }
  }
);