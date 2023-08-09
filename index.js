// Write your solution here!
const cats = [];
cats.unshift("Milo", "Otis", "Garfield");

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function destructivelyAppendCat(name) {
 cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
   }
   
function destructivelyRemoveLastCat() {
    cats.pop();
   } 
function destructivelyRemoveFirstCat() {
    cats.shift();
   } 

function appendCat(name) {
    const allcats = [...cats, name];
    return allcats;
       } 

function prependCat(name) {
     const allcats = [name, ...cats];
     return allcats;
       } 

function removeLastCat() {
    const allcats = cats.slice(0, cats.length-1);
    return allcats;
        }

function removeFirstCat() {
    const allcats = cats.slice(1,cats.lenght);
    return allcats;
        }