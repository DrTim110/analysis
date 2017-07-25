const fs = require('fs');

const util = require('./utils.js');

const bankFile = fs.readFileSync('bank.csv', 'utf-8');

const bankFileArray = util.strToCsv(bankFile);

const csvHeaders = bankFileArray.shift();

let bankHistory = [];
while(bankFileArray.length > 0){
    let row = bankFileArray.shift();
    let transaction = {};
    for(let i = 0; i < csvHeaders.length; i++){
        let key = csvHeaders[i];
        
        transaction[key] = row[i];
    }
    bankHistory.push(transaction);
}

fs.writeFileSync('bank.json', JSON.stringify(bankHistory, null, 4));