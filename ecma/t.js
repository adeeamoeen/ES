//que1
function generateGreeting(name, age) {
    const message = `Salam, ${name}! You are ${age} years old.`;
    return message;
  }
  
  const personName = "fatima";
  const personAge = 15;
  
  const greeting = generateGreeting(personName, personAge);
  console.log(greeting);
  
 //que2
 function calculateSumAndAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    const average = sum / numbers.length;
    const message = `Sum: ${sum}, Average: ${average.toFixed(2)}`;
    return message;
  }
  
  const numbersArray = [1, 2, 3, 4, 5];
  const result = calculateSumAndAverage(numbersArray);
  console.log(result);
  //que3
  function createHTMLElement(tag, text) {
    const element = `<${tag}>${text}</${tag}>`;
    return element;
  }
  
  const tagName = "h1";
  const textContent = "Hello, world!";
  
  const htmlElement = createHTMLElement(tagName, textContent);
  console.log(htmlElement);
  //que 4
  function getProductInfo(product) {
    const { name, price, quantity } = product;
    const message = `Product: ${name}, Price: $${price}, Quantity: ${quantity}`;
    return message;
  }
  
  const product = {
    name: "iPhone",
    price: 999.99,
    quantity: 2
  };
  
  const productInfo = getProductInfo(product);
  console.log(productInfo);
  //que5
  function formatDate(date) {
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = String(date.getFullYear());
  
    let formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }
  
  let dateObject = new Date();
  let formattedDate = formatDate(dateObject);
  console.log(formattedDate);
  