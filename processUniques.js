const uniques = require('./unique.json');

let repeats = {};

for(let key in uniques){
    let unique = uniques[key];
    if(unique.count > 1){
        repeats[key] = unique;
    }
}

require('fs').writeFileSync('repeats.json', JSON.stringify(repeats, null, 4));