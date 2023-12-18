// Code your solutions in this file
function writeCards(name, event) {
    const newArray = [];
    for (let i = 0; i < name.length; i++) {
        newArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return newArray;
}
function countDown(number) {
    while (number > 0) {
        console.log(number)
        number -= 1;
    }
    console.log(number);
}

