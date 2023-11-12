// const hello = () =>{
//     return 'Hello';
// }

try {
    console.log(hello());
} catch (error) {
    console.log(error)
}


/* In ES10 it's optional the use the error in the catch */
try {
    console.log(hello())
} catch  {
    console.log("Hubo un error")
}