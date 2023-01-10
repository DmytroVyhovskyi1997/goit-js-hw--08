import throttle from 'lodash.throttle';


const formFeedback = "feedback-form-state";



const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onTextareaInput, 500 ));
form.addEventListener('submit', onFormSubmit);

let formData = JSON.parse(localStorage.getItem(formFeedback)) || {};

function onFormSubmit(e){
    console.log(JSON.parse(localStorage.getItem(formFeedback)));
    e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(formFeedback)
  formData ={};
 }


function onTextareaInput(e){
    formData[e.target.name] = e.target.value;
    localStorage.setItem(formFeedback, JSON.stringify(formData));
    
}

function populateTextaria(){
   const {email, message} = form.elements;
   email.value = formData.email || '';
   message.value = formData.message ||  '';
}
populateTextaria()
