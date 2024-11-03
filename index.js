const buttonsEl = document.querySelectorAll("button");

const inputFieldE1 = document.getElementById("result");

let buttonValue;
for(let i = 0; i < buttonsEl.length; i++){
    buttonsEl[i].addEventListener("click",()=>{
        buttonValue = (buttonsEl[i].textContent);
        if(buttonValue === "C"){
            clearResult();
        }else if(buttonValue == "X"){
            removeResult();
        }else if(buttonValue === "="){
            calculateResult();
        }
        else{ 
            appendValue(buttonValue);
        }

    });
}


function clearResult(){
    inputFieldE1.value ="";
}

function removeResult(){
    inputFieldE1.value = inputFieldE1.value.slice(0,-1);
}

function calculateResult(){
    inputFieldE1.value = eval(inputFieldE1.value);

}

function appendValue(){
    inputFieldE1.value +=buttonValue;
}