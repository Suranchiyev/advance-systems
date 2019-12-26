function requestCall(){
    const firstname = $('input[name="firstname"]').val();
    const lastname = $('input[name="lastname"]').val();
    const phone = $('input[name="phone"]').val();
    const service = $('select[name="service"]').val();

    const requestCallContainer = $('#request-call');

    if(firstname === '' || firstname === null){
        displayTmpMessage(requestCallContainer,'alert-danger','First Name cannot be empty');
    }else if(lastname === '' || lastname === null){
        displayTmpMessage(requestCallContainer,'alert-danger','Last Name cannot be empty');
    }else if(phone === '' || phone === null){
        displayTmpMessage(requestCallContainer,'alert-danger','Phone cannot be empty');
    }else if (service === '' || service === null){
        displayTmpMessage(requestCallContainer,'alert-danger','Please choose service');
    }else{
        displayMessage(requestCallContainer,'alert-success','Thank you! We will call you shortly.');
    }
}
