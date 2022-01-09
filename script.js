const buttons = document.querySelectorAll(".btn")
const output = document.querySelector('.output')
let popup = document.querySelector('.popup')
const close = document.querySelector('.close')

for(let x=0; x<buttons.length; x++){
    buttons[x].addEventListener('click',function(){
        let outputText = this.getAttribute('data-message')
        display(outputText);
    })
}

function display(outputText){
    popup.classList.remove('hide')
    output.innerHTML = outputText;
}

close.addEventListener('click',closePopup)

function closePopup(){
    popup.classList.add('hide')
}