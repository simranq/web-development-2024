// Practice what you learned!!
let firstButtonElement = document.querySelector('button');
let secondButtonElement = document.getElementById('add_bg_color');

let firstParagraphElement = document.body.children[2].children[1];
let thirdParagraphElement = firstParagraphElement.nextElementSibling.nextElementSibling;
//OR const thirdParagraphElement = document.body.chidren[2].children[3];

function removeParagraph(){
  thirdParagraphElement.remove();
}

function changeBackgroundColor(){
  //firstParagraphElement.style.backgroundColor ='blue';
  firstParagraphElement.classList.add('blue_bg');
}
  
firstButtonElement.addEventListener('click' , removeParagraph);
secondButtonElement.addEventListener('click', changeBackgroundColor);