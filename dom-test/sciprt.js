const btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//     alert('Hello World')
// })
btn.addEventListener('click', function (e) {
    e.target.style.backgroundColor = 'blue';
  });




const container = document.querySelector('#container');

const par =  document.createElement('p');
par.setAttribute('style', 'color:red;')
par.textContent = "Hey, i'm red";
container.appendChild(par)

const headThree = document.createElement('h3');
headThree.style.cssText = 'color:blue;';
headThree.textContent = "Hey, i'm blue dabudi dabudai";
container.appendChild(headThree)



const headOne = document.createElement('h1');
headOne.textContent = "Hey i'm in a div";


const par1 = document.createElement('p')
par1.textContent = "ME TOO";


const div = document.createElement('div');
div.classList.add('stuff');
const stuff = document.querySelector('.stuff')
div.style.border = 'solid';
div.style.backgroundColor = "pink";
div.appendChild(headOne);
div.appendChild(par1);
container.appendChild(div)






