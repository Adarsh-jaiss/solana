// const a = 10;
// const b = 11;

// try{
// if(a>b){
//     console.log("a is greater");
// }
// else{
//     throw new Error("b is greater");
// }
// }catch(err){
//     // console.log("b is greater")
// }

// function square(x){
//     return x*x;
// }
// console.log(square(a));


// //map,filter,reduce

//npm : npm init -y

const cowsay = require ("cowsay");

// console.log(
//     cowsay.think({
//         text: "Moooooh",
//         e: "o o",
//         T: "U"
//     })
// );

const args = {
    text: "Ayush is coding",
    e:"OO",
    T:"b",
};

console.log(cowsay.think(args));