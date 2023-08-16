// que 1
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number * 2);
});
//que 2
const getStringLength = (str) => str.length;


console.log(getStringLength("Hello")); 
console.log(getStringLength("Fatima Shehzad")); 
console.log(getStringLength("")); 
// que 3
const multiplyNumbers = (num1, num2) => num1 * num2;

console.log(multiplyNumbers(10, 5));
console.log(multiplyNumbers(-3, 4)); 
console.log(multiplyNumbers(2.5, 3)); 

// que 4
const calculateAverage = (numbers) => {
    if (numbers.length === 0) {
      return 0;
    }
  
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
    return sum / numbers.length;
  };
  
  console.log(calculateAverage([1, 2, 3, 4, 5])); 
  console.log(calculateAverage([10, 20, 30, 40, 50])); 
  console.log(calculateAverage([])); 
  //que 5

  const createGreeting = (name) => `Hello, ${name}! Welcome!`;

console.log(createGreeting("Iqra")); !
console.log(createGreeting("Fatima")); 
//que 6
const generateRandomNumber = () => Math.random();

console.log(generateRandomNumber()); 
console.log(generateRandomNumber()); 

  