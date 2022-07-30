const ul = document.querySelector('ul');

const food = ul.childNodes[1];
const foodInput = food.querySelector('input');
const sausage = food.querySelector('ul').querySelectorAll('input')[0];
const cheez = food.querySelector('ul').querySelectorAll('input')[1];

const animal = ul.childNodes[3];
const animalInput = animal.querySelector('input');
const ar = animal.querySelector('ul').querySelectorAll('input');

foodInput.onchange = () => {
    foodInput.checked ? sausage.checked = true : sausage.checked = false;
    foodInput.checked ? cheez.checked = true : cheez.checked = false;
};

animalInput.onchange = () => animalInput.checked ? ar.forEach(element => {
     element.checked = true;
})
:
ar.forEach(element => {
    element.checked = false;
});