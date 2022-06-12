// Write your code here!
let main = document.querySelector('#main');
main.remove();

let newHeader = document.createElement('H1')
document.body.append(newHeader);

newHeader.id= 'victory';
newHeader.innerHTML =  "Oscar is the champion";
