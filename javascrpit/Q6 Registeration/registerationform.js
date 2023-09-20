document.addEventListener("DOMContentLoaded",function(){


 const  form=document.getElementById("frmRegisteration");
 const nameInput=document.getElementById("txtFullName");
 const emailInput=document.getElementById("txtEmailAddress");
 const phoneInput=document.getElementById("numPhoneNumber");
 const passwordInput=document.getElementById("pswPassword");
 const confirmPasswordInput=document.getElementById("pswConfirmPassword");

    //error

 const nameError=document.getElementById('fullNameError');
 const emailError=document.getElementById('emailAddressError');
 const phoneError=document.getElementById('phoneNumberError');
 const passwordError=document.getElementById('passwordError');
 const confirmPasswordError=document.getElementById('confirmPasswordError');
 
 form.addEventListener('submit',function(event){
    event.preventDefault();

    //name validation

    if(!nameInput.value.trim()){
        nameError.textContent="Name is Required";
    }
    else{
        nameError.textContent="";
    }


    //email validation

   emailInput.addEventListener('change',validateEmail);
    function validateEmail(){
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const emailInput=document.getElementById("txtEmailAddress");
         
        if(regex.match(emailInput)){
            emailError.textContent="";
        }
        else{
            emailError.textContent="Email is Required";
        }
    }

 
    //phone number
    if(!phoneInput.value.trim()){
        phoneError.textContent="PhoneNumber is Required";
    }
    else{
        phoneError.textContent="";
        if(phoneInput.value.length!=10){
            phoneError.textContent="phonenumber must be 10 digits";
        }

    }

    //password validation
    if(!passwordInput.value.trim()){
        passwordError.textContent="password is Required";
    }
    else{
        passwordError.textContent="";
        if(passwordInput.value.length<4){
            passwordError.textContent="password must be atleat 4 characters";
        }
    }


    //confirm password
    if(confirmPasswordInput.value.trim()==passwordInput.value.trim()){
        confirmPasswordError.textContent="";

    }
    else{
        confirmPasswordError.textContent="Passwords must be same";
    }
 
    });




});