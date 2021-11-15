
const pullData = () => {
    fetch('http://localhost/test.php', {
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
  document.querySelectorAll('div > span')[0].innerHTML = data.one;
})
.catch((error) => {
  console.error('Error:', error);
});
}


const pullMockData = () => {
    return `
    "one": 1,
    "two": 2
    `;
}

const subtract = (a,b) => a - b;

if (typeof process === 'undefined' || process.env.NODE_ENV === 'test')
    pullMockData();
else
    pullData();

//export default subtract; ES6 , require babel
//Node CommonJS module system:

if (typeof process !== 'undefined')
    module.exports = subtract;