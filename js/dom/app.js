//document.body.children[1].children[0].href = 'https://www.google.com';
//error aara h qki link pehle kiye h and tabh wo parse nai hora qki ye exist nai krra
//hum isey update nai kar paare! This can be handled in 2 ways:
//pehla toh aisa h ki script ki inking niche kardo
//2nd is k defer use karo it is a boolean attribute
//defer tells the browser that it should wait for the 
//script execution until the entire document has parsed
//DOM manipulation:
// drill into elements
//query elements

//firstChild,nextSibling,.. typically takes the first child including whitespaces(text nodes)
//firstelementchild halan ki tag jo rehega 1st woh drill krega
//---------------------------------------------------------------------------------------------------
//                                      DOM DRILLING LIMITATIONS
//---------------------------------------------------------------------------------------------------
//agar new element bichme ghusadi toh dom ka jo code h wapas set krna hoga which
//is in no way efficient!!
let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://www.google.com';

// anchorElement = document.querySelector('#external-link');
// anchorElement.href = 'https://www.google.com';
//sidhe se chupchaaap id se elemnt ko laata h simple

//anchorElement = document.querySelector('a');
// anchorElement.href = 'https://www.google.com';
//whereas ye wala 1st anchor element ko select krega i.e. 1st matching ele is selected SIMPLE!!

//anchorElement = document.querySelectorAll('a');
// anchorElement.href = 'https://www.google.com';
//this one would select allmatching eles

// document.getElementsByClassName('<some-class-selector>');
// document.getElementsByTagName('tag');
//-------------------------------------------------------------------------------------------------
// ADD AN ELEMENT
// //1] create the element
let newAnchorElement = document.createElement('a');
newAnchorElement.href='https://google.com';
newAnchorElement.textContent = 'This leads to Google!'

// 2] get access to parent ele that should hold the new ele
let firstParagraph = document.querySelector('p');
firstParagraph.append(newAnchorElement)

// 3] insert new ele into parent ele content


//REMOVE ELEMENTS
//1] select ele to be removed
let firstH1Element = document.querySelector('h1');
//2] remove it!
firstH1Element.parentElement.removeChild(firstH1Element);//**for older browsers

//  MOVE ELEMENTS
firstParagraph.parentElement.append(firstParagraph);//append() or insertBefore()

//innerHTML - comb of text + html elements **line breaks are not allowed**
// so concatenate using + as it takes values in the form of strings
console.log(firstParagraph.innerHTML);
firstParagraph.innerHTML = 'Hi! this is <strong>SIMRAN</strong>'
                                + ' Qureshi';
//bookmark-> 274 i.e. project building