const prodNameInputElement = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars');


const maxAllowedChars = prodNameInputElement.maxLength;

function updateRemainingChars(event){
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;

    const remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters;
    
    if (remainingCharacters === 0){
        remainingCharsElement.classList.add('error');
        prodNameInputElement.classList.add('error');
    } else if (remainingCharacters <= 10) {
                                                                 // remainingCharacters.className = 'warning';
                                                                 // prodNameInputElement.className = 'warning';
        remainingCharsElement.classList.add('warning');
        prodNameInputElement.classList.add('warning');
    } else {
        remainingCharsElement.classList.remove('error','warning');
        prodNameInputElement.classList.remove('error','warning');   
    }
}
prodNameInputElement.addEventListener('input',updateRemainingChars);