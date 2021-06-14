'use strict';
const books = document.querySelectorAll('.books'),
  book = document.querySelectorAll('.book'),
  body = document.querySelector('body'),
  headings = document.querySelectorAll('a'),
  adv = document.querySelector('.adv'),
  chapters = document.querySelectorAll('li');


book[1].after(book[0]);
book[4].after(book[3]);
book[5].after(book[2]);

body.style.background = `URL('image/you-dont-know-js.jpg')`;

headings[4].textContent = 'Книга 3. this и Прототипы Объектов';

adv.remove();

chapters[3].after(chapters[6]);
chapters[6].after(chapters[8]);
chapters[9].after(chapters[2]);
chapters[47].after(chapters[55]);
chapters[55].after(chapters[49]);
chapters[49].after(chapters[50]);
chapters[48].after(chapters[52]);
chapters[52].after(chapters[53]);

const newChapter = document.createElement('li');
  
newChapter.textContent = 'Глава 8: За пределами ES6';

chapters[25].append(newChapter);

console.log(chapters);

