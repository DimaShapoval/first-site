const bodyTheme = document.querySelector('body');
const buttonChange = document.getElementById('button-theme');
const checkForm = document.getElementById('first-form');
const error = document.getElementById('error');
const plus = document.getElementById('plus');
const secondPlus = document.getElementById('second-plus');
const thirdPlus = document.getElementById('third-plus');
const fourthPlus = document.getElementById('fourth-plus');
const buttonPay = document.getElementById('third-button');
let counter = 0;



buttonChange.onclick = function(){
    
    if(buttonChange.classList.toggle('dark-theme') === true){
        buttonChange.innerHTML = 'Dark theme';
    }
    else{
        buttonChange.innerHTML = 'Light theme';
    }

    bodyTheme.classList.toggle('light-theme');
    bodyTheme.classList.toggle('dark-theme');

}
checkForm.addEventListener('submit',checkInfo);

function checkInfo(event){
    event.preventDefault();
    let elem = document.getElementById('first-form');
    let name = elem.name.value;
    let email = elem.email.value;
    let subject = elem.subject.value;
    let subject2 = elem.subject2.value;
    fail = '';
    if(name == '' || email ==  '' || subject == '' || subject2 == '' ){
        fail = "Enter all boxes";
        
    }
    else if(name.length <=1 || name.length >50){
        fail = "Enter correct name";
        
    }
    if (fail != ''){
        error.innerHTML = fail
        return false;
        
    }
    else{
        error.innerHTML = "All correct";
        console.log(name + '-' + email + '-' + subject + "-" + subject2);
        return true;
        
    }
}
buttonPay.onclick = function(){
    
    let check = confirm('You want pay?');
    if(check === true){
        document.location.href="https://easypay.ua/ua/moneytransfer";
    }
    else{
        return false;
    }
    
}
plus.onclick = function(){
    plus.style.backgroundImage = 'url(./styles/tick-small.svg)';
    counter++;
    console.log(counter);
    
}
secondPlus.onclick = function(){
    secondPlus.style.backgroundImage = 'url(./styles/tick-small.svg)';
    counter++;
    console.log(counter);
    
}
thirdPlus.onclick = function(){
    thirdPlus.style.backgroundImage = 'url(./styles/tick-small.svg)';
    counter++;
    console.log(counter);
    
}
fourthPlus.onclick = function(){
    fourthPlus.style.backgroundImage = 'url(./styles/tick-small.svg)';
    counter++;
    console.log(counter);
    
}
