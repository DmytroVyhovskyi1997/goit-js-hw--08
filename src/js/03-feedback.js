import throttle from 'lodash.throttle';

const throttle = require('lodash.throttle');


const formFeedback = "feedback-form-state";



const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onTextareaInput, 500 ));
form.addEventListener('submit', onFormSubmit);

let formData = {};

function onFormSubmit(e){
    console.log(JSON.parse(localStorage.getItem(formFeedback)));
    e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(formFeedback)
 }


function onTextareaInput(e){
    formData[e.target.name] = e.target.value;
    localStorage.setItem(formFeedback, JSON.stringify(formData));
    
}

function populateTextaria(){
     formData = JSON.parse(localStorage.getItem(formFeedback));
    if(!formData ){
        return;
    }
    Object.entries(formData).forEach(([name, value]) => {
        form.elements[name].value = value;
    })
}
populateTextaria()
