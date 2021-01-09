import componentOne from './componentOne';


const component = () => {
    const element = document.createElement('div');

    element.innerHTML = `
        <h1>Component 1</h1>
        <p1>${componentOne.sayHello}</p1>
        <p1><button id="componentOne-button-1">TEST BUTTON</button></p1>
    `;
    return element;
  }
  
  document.body.appendChild(component());


  document.getElementById("componentOne-button-1").addEventListener("click", componentOne.clickTest );
