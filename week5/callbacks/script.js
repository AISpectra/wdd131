
function calculate(a, b, callback) {
  callback(a + b);
}

function displayResult(result) {
  console.log('The result is: ' + result);
}

calculate(2, 3, displayResult); 


function fetchData(callback) {
  console.log('Fetching data...');
  setTimeout(() => {
    callback('Data has been fetched');
  }, 2000);
}

function processData(data) {
  console.log("Data received:", data);
}

fetchData(processData); 
