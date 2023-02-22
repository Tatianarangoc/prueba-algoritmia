var age = document.querySelector('.age');
var select = document.querySelector('.select');
var btnAdd = document.querySelector('.btnAdd');
var btnShow = document.querySelector('.btnShow');
var content = document.querySelector('.content');
var totalPeople = document.querySelector('.totalPeople');
var people = [];
var totalOlder = 0;
var totalUnderage = 0;
var totalMaleOlder = 0;
var totalFemaleUnderage = 0;
var totalFemale = 0;
btnAdd.addEventListener('click', (event) => {
  people.push({ age: age.value, gender: select.value });
  totalPeople.innerHTML = `Total personas ingresadas ${people.length}`;
});
btnShow.addEventListener('click', (event) => {
  for (person of people) {
    if (person.age >= 18) {
      totalOlder++;
    }
    if (person.age < 18) {
      totalUnderage++;
    }
    if (person.age >= 18 && person.gender.toUpperCase() === 'F') {
      totalMaleOlder++;
    }
    if (person.age < 18 && person.gender.toUpperCase() === 'F') {
      totalFemaleUnderage++;
    }
    if (person.gender.toUpperCase() === 'F') {
      totalFemale++;
    }
  }

  let olderPorcentage = (totalOlder / people.length) * 100;
  let femalePorcentage = (totalFemale / people.length) * 100;

  content.innerHTML += `a.	Cantidad de personas mayores de edad (18 años o más) = ${totalOlder} <br>`;
  content.innerHTML += `b.	Cantidad de personas menores de edad = ${totalUnderage} <br>`;
  content.innerHTML += `c.	Cantidad de personas masculinas mayores de edad = ${totalMaleOlder} <br>`;
  content.innerHTML += `d.	Cantidad de personas femeninas menores de edad. = ${totalFemaleUnderage} <br>`;
  content.innerHTML += `e.	Porcentaje que representan las personas mayores de edad respecto al total de personas = ${olderPorcentage}% <br>`;
  content.innerHTML += `f.	Porcentaje que representan las mujeres respecto al total de personas = ${femalePorcentage}% <br>`;
});
