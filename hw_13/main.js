'use strict';

let bodyChildNodesLength = document.body.childNodes.length;

console.log(bodyChildNodesLength);

for (let i = 0; i < bodyChildNodesLength; i++) {
    console.log(document.body.childNodes[i]);
}

let unorderedList = document.querySelector('ul');
let unorderedListChildNodesLength = unorderedList.childNodes.length;

console.log(unorderedListChildNodesLength);

/*
В обоих случаях мы можем наблюдать длину коллекции дочерних нод равную 9. Это происходит из-за того, что псевдомассив
 childNodes хранит в себе не только ноды-элементы(tags), но и текстовые ноды(text nodes), в нашем случае это перенос
 строки.
 
 Далее отобразим длину коллекции, состоящую исключительно из дочерних элементов-тегов(tags). Рассмотрим по-прежнему
 body и список ul.
 */

let bodyElementsLength = document.body.children.length;
console.log(bodyElementsLength);

let unorderedListElementsLength = unorderedList.children.length;
console.log(unorderedListElementsLength);

/*
Можно заметить, что теперь оба значения длины равны 4. В случае с body в коллекцию children попадут 3 тега <div> и один
тег <ul>. А в случае со списком в коллекции children окажутся 4 <li>. В коллекцию children попадают только ноды-тэги.
 */
