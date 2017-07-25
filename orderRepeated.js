const repeats = require('./unique.json');

let sorted = [];

for(let key in repeats){
    let repeat = repeats[key];
    let index = 0;
    while(sorted.length > index && sorted[index].count > repeat.count){
        index++;
    }

    let totalAmount = 0.0;
    for(let i = 0; i < repeat.transactions.length; i++){
        let transaction = repeat.transactions[i];
        let amount = parseFloat(transaction.Amount);
        totalAmount += amount;
    }

    let averageAmount = totalAmount / repeat.transactions.length;

    sorted.splice(index,0,{
        count: repeat.count,
        description: key,
        average: averageAmount
    });
}

require('fs').writeFileSync('sortedRepeated.json', JSON.stringify(sorted, null, 4));