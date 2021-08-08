var bottleColor = 'yellow';
var waterQuantity = 1;
var isFull = false;

// array
var items = ['bottle', 'mug', 'paper', 'pen', 'Diary']; // position
items.indexOf('logens'); // -1
items.push('envelope'); // add
items.push('watch'); // add
items.pop(); // remove

// conditionals
if (items.length >= 4) {
    consolge.log('You have to many stuff on your desk.');
}
else if (items.length == 4) {
    console.log('you only have one 4 items');
}
else {
    console.log('Wow!! You have a clean desk.')
}
