var email = document.getElementById('file1')
var err4 = document.getElementById('err4')
var err1 = document.getElementById('err1')
var num = document.getElementById('dot')
var past = document.getElementById('pass')
var err2 = document.getElementById('err2')
var regex = /^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-)]+).([a-z]{2,3}).([a-z]{2,3})?$/
var red= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;




function validateEmail(){
//alert("")
if(email.value.trim()==''){
    err4.innerText="field cannot be empty";
    email.style.border = '4px solid red'
    return false 
}
else if(!email.value.match(regex)){
err4.innerText="email is not in correct format"
email.style.border = '4px solid red'
return false

}
else{
    err4.innerText="";
    email.style.border = '3px solid green'
    return true
}}
function validatenumber(){
    if(num.value.trim()==''){
        num.style.border='2px solid red';
        err1.innerText="phone number cannot be empty";
        return false;
    }
    
    else if (!num.value.match(red)){
        err1.innerText ='phone number is not in correct format';
       num.style.border = "2px solid green"
       return false
       }
       else {
        err1.innerText ='';
       num.style.border = "2px solid green"
       return true
       }
}
function validatepass(inputtxt){
    
    
        
   
        if(past.value.trim()==''){
            past.style.border='2px solid red';
            err2.innerText="password cannot be empty";
            return false;
        }
        
        
        
        else if (!past.value.match(passw)){
            err2.innerText ='poor password';
           past.style.border = "2px solid ORANGE"
           return true
           }
        
        else {
            err2.innerText ='strong password';
           past.style.border = "2px solid green"
           return true
           
           
        }


function printStrongNess(input_string) {
    const n = input_string.length;
    
    let hasLower = false;
    let hasUpper = false;
    let hasDigit = false;
    let specialChar = false;
    const normalChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    
    for (let i = 0; i < n; i++) {
        if (input_string[i] >= "a" && input_string[i] <= "z") {
        hasLower = true;
        }
        if (input_string[i] >= "A" && input_string[i] <= "Z") {
        hasUpper = true;
        }
        if (input_string[i] >= "0" && input_string[i] <= "9") {
        hasDigit = true;
        }
        if (!normalChars.includes(input_string[i])) {
        specialChar = true;
        }
    }
    
    
    let strength = "Weak";
    if (hasLower && hasUpper && hasDigit && specialChar && n >= 8) {
        strength = "Strong";
    } else if ((hasLower || hasUpper) && specialChar && n >= 6) {
        strength = "Moderate";
    }
    
    console.log(`Strength of password: ${strength}`);
    }
    
    {
    const input_string = "GeeksforGeeks!@12";
    printStrongNess(input_string);
    
    }
    
    }

function validateform(){
    if(!validatename()|| !validatenumber() || !validatepass()){
        return false
    }
    else{
        return true
    }
}
