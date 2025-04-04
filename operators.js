document.body.innerHTML = 'HELLO WORLD!';

// // object
// const obj = {
//   name: 'John',
//   age: 30,
//   city: {
//     name: 'New York',
//     country: 'USA',
//   }
// };

// // object destructuring
// const { name:namesss, age, city: { name: cityName } } = obj;

// const adress = obj.city.name;
// const country = obj.city.country;

// function getName(objeto) {
//   return objeto.name;
// }
// function getCity({city}) {
//   return city.name;
// }

// document.body.innerHTML += `<br>Object: ${namesss}`;
// document.body.innerHTML += `<br>Object: ${getName(obj)}`;
// document.body.innerHTML += `<br>Object: ${getCity(obj)}`;

// const { name , ...resto } = obj;

// document.body.innerHTML += `<br>Objects: ${name} ${ JSON.stringify(resto)}`;


// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // array destructuring
// const [first, , thirt, ...restoArray] = array;
// document.body.innerHTML += `<br>Array: ${JSON.stringify({first,thirt,restoArray})}`;


// const namme = 'John';
// const agee = 30;

// const person = {
//   name: namme,
//   age: agee,
// };
// const person2 = {
//   namme,
//   agee,
// };

// document.body.innerHTML += `<br>Object: ${JSON.stringify(person)}`;
// document.body.innerHTML += `<br>Object: ${JSON.stringify(person2)}`;

// // optionalChaining
// const ususu = {
//   name: 'John',
//   age: 30,
//   city: {
//     name: 'New York',
//     country: 'USA',
//     saudacao: () => {
//       return 'Hello World';
//     }
//   }
// };

// document.body.innerHTML += `<br>Object: ${ususu?.city?.saudacao?.() ?? 'No existe'}`;

// const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// array2.forEach(element => {
//   document.body.innerHTML += `<br>Array: ${element}`;
// });

// array2.map(element => {
//   if (element % 2 === 0) {
//     document.body.innerHTML += `<br>Array: ${element}`;
//   }
//   return element;
// }
// );

// const novoArray = array2
// .filter(batata => batata % 2 === 0)
// .map(batata => batata * 2);
// document.body.innerHTML += `<br>Array: ${JSON.stringify(novoArray)}`;

// const todosSaoNumeros = array2.every(element => {
//   return typeof element === 'number';
// }
// );
// document.body.innerHTML += `<br>Array: ${todosSaoNumeros}`;

// const existeUmPar = array2.some(element => {
//   return element % 2 === 0;
// }
// );

// const par = array2.find(element => {
//   return element % 2 === 0;
// }
// );
// document.body.innerHTML += `<br>Array: ${existeUmPar}`;
// document.body.innerHTML += `<br>Array: ${par}`;

// const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const soma = array3.reduce((acc, element) => {
//   return acc + element;
// }
// , 0);
// document.body.innerHTML += `<br>Array: ${JSON.stringify(soma)}`;

// const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// fetch('')
// .then(response => {
//   return response.json(response.text);
// }
// ).then(data => {
//   console.log(data);
//   document.body.innerHTML += `<br>Array: ${JSON.stringify(data)}`;
// }
// ).catch(error => {
//   console.error(error);
// }
// );


// Você deve criar um programa que conte o número de vezes que cada letra do alfabeto aparece em um texto fornecido. O programa deve ignorar espaços, números e pontuações, e não diferenciar letras maiúsculas de minúsculas (ou seja, A e a são a mesma letra).

// let string = 'iagoaa';

// function contarLetras(string) {
//   let stringFinal = {}
//   let stringNova = string.toLowerCase()

//   for(let i = 0; i<stringNova.length; i++ ){
//     if(stringNova[stringFinal]){
//       stringFinal = ({
//         stringNova[i]
//       })
//       stringFinal.stringNova[i]++;
//     }else{

//     }
//   }

//     return stringFinal
// };

// console.log(contarLetras(string));