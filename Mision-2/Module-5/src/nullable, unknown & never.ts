const discountCalculator = (input: unknown) => {

    if (typeof input === 'number') {
        return `Number value : ${input}`;
    }
    else if (typeof input === 'string') 
    {
        return `String value ${input.split(" ")}`;
    }
    else 
    {
        return `Null value ${input}`;
    }
}
console.log(discountCalculator(100));
console.log(discountCalculator('100 TK'))
discountCalculator(null);

// const Error=(msg:unknown):never=>{
//     throw new Error(msg)
// }
// Error('Error...');