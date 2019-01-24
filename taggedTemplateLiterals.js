function calc(strings, ...values) {
    if (strings[0] == 'soma'){
        console.log(`${values[0]} + ${values[1]} = ${values[0] + values[1]}`);
    }
    else if (strings[0] == 'subtracao'){
        console.log(`${values[0]} - ${values[1]} = ${values[0] - values[1]}`);
    }
    else if (strings[0] == 'mult') {
        console.log(`${values[0]} * ${values[1]} = ${values[0] * values[1]}`);
    }
    else if (strings[0] == 'div') {
        console.log(`${values[0]} / ${values[1]} = ${values[0] / values[1]}`);
    }
}

calc `soma${10} ${20}`;
calc `subtracao${10} ${20}`;
calc `mult${10} ${20}`;
calc `div${10} ${20}`;