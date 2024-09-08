//1st Ex- Calculate Sum
const calcSumButtonElement = document.querySelector('#calculator button');;

function calculateSum(){
    const userNumberElement = document.getElementById('user-number');
    const enteredNumber = userNumberElement.value;

    let sumUptoNumber = 0;

    for ( let i = 0; i <= enteredNumber; i++) {
        sumUptoNumber = sumUptoNumber + i;
    }

    const outputResultElement = document.getElementById('calc-sum');

    outputResultElement.textContent = sumUptoNumber;
    outputResultElement.style.display = 'block';

}

calcSumButtonElement.addEventListener('click',calculateSum);


//2nd Ex-Highlight Links
//for of is used for array iteration
//for of is used for object iteration

const highlightLinksButtonElement = document.querySelector('#highlight-links button');
function highlightLinks() {
    const anchorElements = document.querySelectorAll('a');
    for (const anchorElement of anchorElements) {
        anchorElement.classList.add('highlight');
    }
}

highlightLinksButtonElement.addEventListener('click', highlightLinks);

//3rd Ex-DISPLAY USER DATA

const displayUserDataButtonElement = document.querySelector('#user-data button');

const sampleUserData = {
    firstName : 'Simran',
    lastName : 'Qureshi',
    age : 19
};

function displayUserData() {
    const outputDataElement = document.getElementById('output-user-data');

    outputDataElement.innerHTML = '';

    for(const key in sampleUserData) {
        const newUserDataListElement = document.createElement('li');
        const outputText = key.toUpperCase() + ' : ' + sampleUserData[key];
        newUserDataListElement.textContent = outputText;
        outputDataElement.append(newUserDataListElement);
    }
}

displayUserDataButtonElement.addEventListener('click',displayUserData)

//4th Ex - STATISTICS (ROLL THE DIE)

const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;   //0 to 0.99kinda excluding 1, thus, *6-->floor will round off
}

function deriveNumberOfDiceRolls() {
    const targetNumberElement = document.getElementById('user-target-number');
    const diceRollsListElement = document.getElementById('dice-rolls');

    const enteredNumber = targetNumberElement.value;
    diceRollsListElement.innerHTML = '';

    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;
    
    while (!hasRolledTargetNumber){
        const rolledNumber = rollDice();
        // if (rolledNumber ==enteredNumber){
        //     hasRolledTargetNumber = true;
        // }
        numberOfRolls++;
        const newRollListItemElement =document.createElement('li');
        const outputText = 'Roll ' + numberOfRolls + ':  ' + rolledNumber;
        newRollListItemElement.textContent = outputText;
        diceRollsListElement.append(newRollListItemElement);
        hasRolledTargetNumber = rolledNumber == enteredNumber;
    }

    const outputTotalRollsElement = document.getElementById('output-total-rolls');
    const outputTargetNumberElement = document.getElementById('output-target-number');

    outputTargetNumberElement.textContent = enteredNumber;
    outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceButtonElement.addEventListener('click',deriveNumberOfDiceRolls);