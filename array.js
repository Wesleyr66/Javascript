let string = "iagoooo   222";

// CONTADOR DE LETRAS

// function contadorDeLetras(string) {

//   let stringFinal = {};
//   let stringNova = string.toLowerCase();

//   stringNova = stringNova.replace(/\d/g, ""); // remove todos os numerosa da string

//   document.body.innerHTML += stringNova + "<br>";

//   for (let i = 0 ; i < stringNova.length; i++) {

//     if (stringFinal[stringNova[i]] ) { // se a letra existe ele aumenta 1
//       stringFinal[stringNova[i]]++;
//     }
//     else if (stringNova[i] != " " ) { // se ela não existe ele cria ela com o valor 1
//       stringFinal[stringNova[i]] = 1;
//     }

//   };

//   return stringFinal;
// };





// LETRAS NÃO SE REPETEM

// function contadorDeLetras(string) {
//   let stringFinal = [];
//   let stringNova = string.toLowerCase();
//   stringNova = stringNova.replace(/\d/g, ""); // remove todos os numerosa da string
//   stringNova = stringNova.replace(/\s+/g, ""); // remove todos os espaços da string

//   stringNova = stringNova.split("").sort();
//   console.log(stringNova);

//   for (let i = 0; i < stringNova.length; i++) {
//     if (stringFinal.includes(stringNova[i]) == false) {
//       stringFinal.push(stringNova[i]);
//     }
//   }

//   return stringFinal
// }

// console.log(contadorDeLetras(string));





// function contadorDeLetras(string) {
//     let stringFinal = [] ;

//     let stringNova = string.toLowerCase();
//     stringNova = stringNova.replace(/\d/g, ""); // remove todos os numerosa da string
//     stringNova = stringNova.replace(/\s+/g, ""); // remove todos os espaços da string
  
//     stringNova = stringNova.split("").sort();
//     console.log(stringNova);
  
//     for (let i = 0; i < stringNova.length; i++) {
//       let letra = stringNova[i];
//       if(letra.find((stringFinal) => stringFinal[0] === 0 )){
//         stringFinal++
//       }
//     }
  
//     return stringFinal
//   }
  

// function contadorDeLetras(string) {


//   let resultado = [];
//   let stringNova = string.toLowerCase();
//   stringNova = stringNova.replace(/\d/g, ""); // remove números
//   stringNova = stringNova.replace(/\s+/g, ""); // remove espaços

//   stringNova = stringNova.split("").sort();

//   for (let i = 0; i < stringNova.length; i++) {
//     let letra = stringNova[i];

//     let index = resultado.findIndex(  (item) => item[0] == letra  );

//     if (index == -1) {
//       resultado.push([letra, 1]);
//     } else {
//       resultado[index][1]++;
//     }
//   }

//   return resultado;


// }

for(let i in string){
    console.log(i)
}

console.log(contadorDeLetras(string));