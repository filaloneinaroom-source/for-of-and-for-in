const drinks= ['arange', 'coke', 'fanta', 'cola']
const fruits=[
    {title:`dragon melon`, price:10, id:1},
    {title:`kiwi`, price:5, id:2},
    {title:`water melon`, price:20, id:3},
]
for (let drink  of drinks) {
    console.log(`today we have:${drink}`);
    
}
for (let fruit of fruits ){
    console.log(`this is ${fruit.title} and he price is ${fruit.price}$`);
    
}