
//que 1

function calculateSquare(number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const square = number * number;
        resolve(square);
      }, 1000);
    });
  }
  

calculateSquare(5)
  .then((result) => {
    console.log(result); 
  })
  .catch((error) => {
    console.error(error);
  });
//que 2
function getAllResolvedValues(promises) {
    return Promise.all(promises);
  }
  const promises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
  ];
  
  getAllResolvedValues(promises)
    .then((results) => {
      console.log(results); 
    })
    .catch((error) => {
      console.error(error);
    });
    //que 3
    // function fetchData(url) {
    //     return fetch(url)
    //       .then((response) => {
    //         if (!response.ok) {
    //           throw new Error('Network response was not ok');
    //         }
    //         return response.json();
    //       });
    //   }
    //   fetchData('https://api.example.com/data')
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    //que 4
    function sumOfPromises(promise1, promise2) {
        return Promise.all([promise1, promise2])
          .then((values) => {
            const sum = values.reduce((accumulator, currentValue) => accumulator + currentValue);
            return sum;
          });
      }
      const promise1 = Promise.resolve(3);
      const promise2 = Promise.resolve(5);
      
      sumOfPromises(promise1, promise2)
        .then((result) => {
          console.log(result); 
        })
        .catch((error) => {
          console.error(error);
        });
           //que 5
           function promiseWithTimeout(promise, timeout) {
            return Promise.race([
              promise,
              new Promise((_, reject) => {
                setTimeout(() => {
                  reject(new Error('Promise timed out'));
                }, timeout);
              })
            ]);
          }
          
           const myPromise = new Promise((resolve) => {
            setTimeout(() => {
              resolve('Promise resolved');
            }, 2000);
          });
          
          promiseWithTimeout(myPromise, 1500)
            .then((result) => {
              console.log(result);
            })
            .catch((error) => {
              console.error(error); 
            });
            // que 4
           
            
const startCounting = new Promise((resolve) => {
    resolve('Start Counting');
  });
  
  
  function counter(value) {
    console.log(value);
  }
  
  
  startCounting
    .then((value) => {
      counter(value);
      return 1;
    })
    .then((value) => {
      counter(value);
      return 2;
    })
    .then((value) => {
      counter(value);
      return 3;
    })
    .then((value) => {
      counter(value);
    });
  
          