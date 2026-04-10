//Creation of Array
let companies = ['Bloomberg','Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'];
console.log(companies)
let stringConversion = companies.toString(); // Stirng Conversion
console.log(stringConversion);

//display array elements
for(i = 0; i<companies.length; i++){
    console.log(companies[i]);
}

//remove first company
companies.shift();
console.log(companies);

//Remove 'Uber' and Add 'Ola' at its place
companies.splice(1, 1, 'Ola');
console.log(companies);

//Add Amazon at the end
companies.push('Amazon');
console.log(companies);