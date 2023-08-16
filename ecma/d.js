function sumNumbers(numbers) {
    let [num1, num2] = numbers;
    let sum = num1 + num2;
    return sum;
  }
  
  let numbersArray = [3, 7];
  let res = sumNumbers(numbersArray);
  console.log(res);
  //que2
  function getPersonInfo(person) {
    const { name, age, occupation } = person;
    const info = `Name: ${name}, Age: ${age}, Occupation: ${occupation}`;
    return info;
  }
  
  const personObj = {
    name: "Adeea Moeen",
    age: 20,
    occupation: "web developer"
  };
  
  const personInfo = getPersonInfo(personObj);
  console.log(personInfo);
  //que3
  function getPersonWithHighestScore(people) {
    const [firstPerson, ...restOfPeople] = people;
  
    let highestScore = firstPerson.score;
    let personWithHighestScore = firstPerson.name;
  
    restOfPeople.forEach(person => {
      if (person.score > highestScore) {
        highestScore = person.score;
        personWithHighestScore = person.name;
      }
    });
  
    return personWithHighestScore;
  }
  
  const peopleArray = [
    { name: "Aliya", score: 85 },
    { name: "Bilal", score: 92 },
    { name: "dani", score: 88 },
    { name: "Dawod", score: 90 }
  ];
  
  const personWithHighestScore = getPersonWithHighestScore(peopleArray);
  console.log(personWithHighestScore);
  
 // que 4
 function getInitials(person) {
    const { firstName = '', lastName = '', middleName = '' } = person;
  
    const firstInitial = firstName[0] || '';
    const middleInitial = middleName[0] || '';
    const lastInitial = lastName[0] || '';
  
    const initials = `${firstInitial}${middleInitial}${lastInitial}`;
    return initials.toUpperCase();
  }
  
  const persObj = {
    firstName: "adeea",
    lastName: "moeen",
    middleName: "siddiqui"
  };
  
  const initials = getInitials(persObj);
  console.log(initials);
  
  //que 5
  function getFirstAndLast(arr) {
    let [first, ... last] = arr;
    return { first, last };
  }
  
  const stringsArray = ["apple", "banana", "cherry", "date"];
  let result = getFirstAndLast(stringsArray);
  console.log(result);
  