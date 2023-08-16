// //que 1
// const pi = 3.14159;
// pi = 3.14;
//que 2
function sumOfSquares(numbers) {
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      const square = numbers[i] ** 2;
      sum += square;
    }
  
    if (sum > 100) {
      var message = "The sum exceeds 100!";
      console.log(message);
    }
  
    return sum;
  }
  
  let num = [1, 2, 3, 4, 5];
  let result = sumOfSquares(num);
  console.log(result);
  //que3
  const stringsArray = ["apple", "banana", "cherry", "date"];

for (let i = 0; i < stringsArray.length; i++) {
  let firstLetter = stringsArray[i][0];
  console.log(firstLetter);
}
//que4
function createAsteriskString(n) {
    const asterisk = '*';
    return asterisk.repeat(n);
  }
  
  const res = createAsteriskString(5);
  console.log(res);
  //que5
  function generateGreeting(obj) {
    var message = "Salam, " + obj.name + "! You are " + obj.age + " years old.";
    return message;
  }
  
  var person = {
    name: "iqra",
    age: 22
  };
  
  var greeting = generateGreeting(person);
  console.log(greeting);
  //que6
  function findMaxValue(numbers) {
    let max = Math.max(...numbers);
    return max;
  }
  
  const numb = [1, 5, 3, 9, 2];
  const max = findMaxValue(numb);
  console.log(max);
  