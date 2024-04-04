const form = $('#form');
const fName = $('#fname');
const lName = $('#lname');
const dob = $('#dob');
const emailId = $('#email_id');
const phoneNo = $('#phone_no');
const countryName = $('#country_name');

var formStatus =null;

form.submit((e) =>{
    e.preventDefault();

    validation()
})

const  validation = () =>{

    const fNameValue = fName.val();
    const lNameValue = lName.val();
    const dobValue = dob.val();
    const emailIdValue = emailId.val();
    const phoneNoValue = phoneNo.val();
    const countryNameValue = countryName.val();

    if(fNameValue ==='' || fNameValue == null){
        setError(fName,"First Name Required ");
        formStatus=0
       
    }else{
        setSuccess(fName);
        formStatus=1
    }

    if (formStatus === 1) {
        // Proceed with form submission
        form.get(0).submit(); // Submit the form
    }
}


const  setError = (input,message)=>{
    
    const inputControl = input.parent();
    const errorDisplay = inputControl.find('.error');
    errorDisplay.text(message);
    input.addClass('error').removeClass('success');
    
}

const  setSuccess = input =>{
    const inputControl = input.parent();
    const errorDisplay = inputControl.find('.error');
    input.addClass('success');
    input.removeClass('error');
    errorDisplay.text("");
}