// const form = $('#form');
// const fName = $('#fname');
// const lName = $('#lname');
// const dob = $('#dob');
// const emailId = $('#email_id');
// const phoneNo = $('#phone_no');
// const countryName = $('#country_name');
var dobError = document.getElementById("dob_Error");
var emailError = document.getElementById("email_Error");
var phoneError = document.getElementById("phoneno_Error");
var submitError = document.getElementById("submit-Error");
var fnameError = document.getElementById("fname-error");
var lnameError = document.getElementById("lname-error");
var messageError=document.getElementById('message-error');


// var formStatus =null;


function validateFname(){
    var fname = document.getElementById('fname').value;

    if(fname.length == 0){
        fnameError.innerHTML='First Name is required';
        return false;
    }
    if(!fname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        fnameError.innerHTML='Write full name';
        return false;
    }
    fnameError.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
}

function validateLname(){
    var Lname = document.getElementById('lname').value;

    if(Lname.length == 0){
        fnameError.innerHTML='Last Name is required';
        return false;
    }
    if(!Lname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        lnameError.innerHTML='Write full name';
        return false;
    }
    lnameError.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
}


function validatePhoneNo(){
    var phone = document.getElementById('phone-no').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone number should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Phone number must be digits';
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validateEmail(){
    var email = document.getElementById('email-id').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = ' Invalid Email';
        return false;
    }
    emailError.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById('hobbie').value;
    var required = 30;
    var left = required - message.length;

    if(left> 0){
        messageError.innerHTML = left + 'more characters required';
        return false;
    }
        messageError.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
}


function validateForm(){
    if (!validateFname() || !validateLname() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display='block';
        submitError.innerHTML='Please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
}

// }

// form.submit((e) =>{
//     e.preventDefault();

//     validation()
// })

// const  validation = () =>{

//     const fNameValue = fName.val();
//     const lNameValue = lName.val();
//     const dobValue = dob.val();
//     const emailIdValue = emailId.val();
//     const phoneNoValue = phoneNo.val();
//     const countryNameValue = countryName.val();

//     if(fNameValue ==='' || fNameValue == null){
//         setError(fName,"First Name Required ");
//         formStatus=0
       
//     }else{
//         setSuccess(fName);
//         formStatus=1
//     } 
//     if(lNameValue ==='' || lNameValue == null){
//         setError(lName,"First Name Required ");
//         formStatus=0
       
//     }else{
//         setSuccess(lName);
//         formStatus=1
//     }
   

//     if (formStatus === 1) {
//         // Proceed with form submission
//         form.get(0).submit(); // Submit the form
//     }
// }


// const  setError = (input,message)=>{
    
//     const inputControl = input.parent();
//     const errorDisplay = inputControl.find('.error');
//     errorDisplay.text(message);
//     input.addClass('error').removeClass('success');
    
// }

// const  setSuccess = input =>{
//     const inputControl = input.parent();
//     const errorDisplay = inputControl.find('.error');
//     input.addClass('success');
//     input.removeClass('error');
//     errorDisplay.text("");
// }