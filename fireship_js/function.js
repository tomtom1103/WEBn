//5functions

function makeBread(qty){

    const bread = '🍞'.repeat(qty);
    return bread;
}

const loaves = makeBread(5)
console.log(loaves)

//function declaration

const makeBeer = function(qty){

    return '🍺'.repeat(qty);
}

const beer = makeBeer(5);
console.log(beer)

//function expression. function expressions don't get created until
//that part is reached in the script. expressions are NOT Hoisted.
//people tend to use function expressions since it doesn't pollute the global mainspace.

//positional arguments
function makeBreakfast(main,side,drink){
    console.log(arguments);
    return `Breakfast is ${main}, ${side}, and ${drink}`;
    
}

const breakfast = makeBreakfast('pancakes','ham','milk')
console.log(breakfast)

//named parameters
function makeLunch(opts){
    const{main, side, drink} = opts;
    return `Lunch is ${main}, ${side}, and ${drink}`;
}

const lunch = makeLunch({main: 'burrito', side: 'fries', drink: 'shake'})
console.log(lunch)