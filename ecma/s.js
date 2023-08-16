//que 1
function sumNumbers(num1 = 0, num2 = 0) {
    return num1 + num2;
  }
  
  
  console.log(sumNumbers()); 
  console.log(sumNumbers(5, 10)); 
  console.log(sumNumbers(3)); 
  console.log(sumNumbers(undefined, 7)); 

  //que 2
  function collectArguments(...args) {
    return args;
  }
  console.log(collectArguments(1, 2, 3));
  console.log(collectArguments('a', 'b', 'c', 'd')); 
  console.log(collectArguments(true, false)); 
  console.log(collectArguments()); 
  // que 3
  function findMaxValue(numbers) {
    return Math.max(...numbers);
  }
  
  console.log(findMaxValue([1, 2, 3, 4, 5])); 
  console.log(findMaxValue([100])); 
  console.log(findMaxValue([]));
  
  //que 4
  function concatArrays(arr1, arr2) {
    return [...arr1, ...arr2];
  }
  
  console.log(concatArrays([1, 2, 3], [4, 5, 6]));
  console.log(concatArrays(['a', 'b'], ['c', 'd']));
  console.log(concatArrays([], [1, 2, 3])); 
  console.log(concatArrays(['Hello'], [])); 
  //que 5

  function addIdToObject(obj) {
    const id = 'Adeeas';
  
    return {
      name: obj.name,
      age: obj.age,
      occupation: obj.occupation,
      id: id,
    };
  }
  
  const person = {
    name: 'Adeea Moeen',
    age: 20,
    occupation: 'Web Developer',
  };
  
  const personWithId = addIdToObject(person);
  console.log(personWithId);
 
  
  