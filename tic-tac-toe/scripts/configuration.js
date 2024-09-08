//You can define functions in 1 file & event in another in JavaScript
//However, you've to maintain the linking in that order where function..tthen next mein event

function openPlayerConfig(event){
    editedPlayer = +event.target.dataset.playerid; //'1' => 1|| type string to numeral
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig(){
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event){
    event.preventDefault();
    console.log(event);
    const formData = new FormData(event.target);           
    const enteredPlayerName = formData.get('playername').trim(); 
    // console.log(enteredPlayerName);                              
    if (!enteredPlayerName){
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = 'Please enter a valid name!';
        return;
    }

    const updatedPlayerDataElement = document.getElementById('player-'+ editedPlayer +'-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;
    // if (editedPlayer === 1){
    //     players[0].name = enteredPlayerName;
    // }else{
    //     players[1].name = enteredPlayerName;
    // }
    
    players[editedPlayer - 1].name = enteredPlayerName;
    
    closePlayerConfig();
}

//FormData will automatically take inputs rom form(input data must have a name attribute). 
//The get() will give us a string here as i/p element will yield us a string.
//trim() will get rid of all the whitespace from the string. i.e.=> |'     '=>''|

// !enteredPlayerName is a "falsy" value. alternative=>  enteredPlayerName === ''
//innerText is an Internet explorer def whereas textContent is implemented by everyone..the point is that their working is the same.












