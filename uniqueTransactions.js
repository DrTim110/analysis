const history = require('./bank.json');

let uniques = {};

while(history.length > 0){
    let transaction = history.shift();

    if(!uniques[transaction.Description]){
        uniques[transaction.Description] = {
            count: 0,
            transactions: []
        };
    }

    uniques[transaction.Description].count++;
    uniques[transaction.Description].transactions.push(transaction);
}

require('fs').writeFileSync('unique.json', JSON.stringify(uniques, null, 4));