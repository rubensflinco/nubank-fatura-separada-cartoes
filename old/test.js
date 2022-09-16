
const { readFileSync } = require("fs"); 
const { writeFile } = require("fs/promises"); 
const { NubankApi } = require("nubank-api");

const authState = JSON.parse(readFileSync('./authState.json').toString('utf8'));

const api = new NubankApi(authState);

(async () => {
  try {
    console.log("test");
    const accountBalance = await api.card.;
    console.log("🚀 ~ file: test.js ~ line 14 ~ accountBalance", accountBalance)
    // const accountBills = await api.account.getBills();
    // const cardFeed = await api.card.getFeed();
    // const cardTransactions = await api.card.getTransactions();
    // await writeFile("./cardFeed.json", JSON.stringify(cardFeed)); 
    // await writeFile("./cardTransactions.json", JSON.stringify(cardTransactions)); 
    // await writeFile("./accountBills.json", JSON.stringify(accountBills)); 
    // const pixKeys = await api.account.getPixKeys();
    // console.log(pixKeys);
    // const paymentRequest = await api.payment.createPixPaymentRequest(pixKeys[0], 100);
    // console.log(paymentRequest);
    process.exit(0);
  } catch (e) {
    console.error(e.stack);
  }
})();