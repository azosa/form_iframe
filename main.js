 
let input=document.getElementById('sm-form-email');
let error=document.getElementsByClassName('error')[0];

let agreement= document.getElementsByClassName('form__agreements')[0];



input.addEventListener('input', ()=>{
    if(input.value.length>0){
        agreement.style.opacity="1";}
    else{agreement.style.opacity="0";}
    
})

input.addEventListener('blur', ()=>{
 if (input.value.match(/^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/)||input.value.length==0){
    error.style.display="none";
 }
 else{
    error.style.display="block";
 }
})