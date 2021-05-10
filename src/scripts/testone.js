function printTestone() {
    console.log("Testone Leone2");
    console.log("Hello Webpack");
} 

function sum(a, b) {
    return a + b;
}


printTestone(); 
console.log("la somma è " + sum(5,3));

export {printTestone, sum};