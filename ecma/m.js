//que 1
function mapNumbersToSquares(numbers) {
    const result = {};
  
    numbers.forEach((number) => {
      result[number] = number * number;
    });
  
    return result;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const numberSquaresMap = mapNumbersToSquares(numbers);
  console.log(numberSquaresMap);
  

//que 2
function mapNamesToAges(people) {
    const result = {};
  
    people.forEach((person) => {
      result[person.name] = person.age;
    });
  
    return result;
  }

  const people = [
    { name: "Ayesha", age: 25 },
    { name: "Bilal", age: 30 },
    { name: "sidra", age: 35 },
  ];
  const nameAgeMap = mapNamesToAges(people);
  console.log(nameAgeMap);
  //que 3

  function mapHasKey(map, key) {
    return map.has(key);
  }
  
  const myMap = new Map();
  myMap.set("name", "Ayesha");
  myMap.set("age", 25);
  
  console.log(mapHasKey(myMap, "name")); 
  console.log(mapHasKey(myMap, "city")); 
  //que 4
  function filterMap(map, callback) {
    const result = new Map();
  
    map.forEach((value, key) => {
      if (callback(value, key)) {
        result.set(key, value);
      }
    });
  
    return result;
  }
  
 //que  4
  const mMap = new Map();
  myMap.set("name", "Ayesha");
  myMap.set("age", 25);
  myMap.set("city", "karachi");
  
  const filteredMap = filterMap(myMap, (value) => typeof value === "string");
  console.log(filteredMap);

  //que 5
  function mergeMaps(map1, map2) {
    const mergedMap = new Map([...map1, ...map2]);
  
    return mergedMap;
  }
  
  //que 6
  const map1 = new Map();
  map1.set("name", "Aliya");
  map1.set("age", 26);
  
  const map2 = new Map();
  map2.set("age", 30);
  map2.set("city", "karachi");
  
  const mergedMap = mergeMaps(map1, map2);
  console.log(mergedMap);
  
  
 
  
  
  