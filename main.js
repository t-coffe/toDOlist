const todos = [];

document.querySelector('.app').innerHTML = `
<input type="text" placeholder="inserer votre todo">
<button> + </button>
<ul> </ul>
`;

const input = document.querySelector('input');
const addBtn = document.querySelector('button');
const list = document.querySelector('ul');

addBtn.addEventListener('click', ()=> {
    todos.push(input.value);
    list.innerHTML = `${todos.map(item => {
        return `<li>${item}</li>`;
    }).join('')}`;
})















/* <!--

1- inner html uniquement !

2- const todos = [];

3- 'string templating' + .map

4- add => push -> todos 
        rendre du nouveau html

(5- mettre maquette figma en marche)


 --> */