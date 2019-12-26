function contactUs(){
    const firstname = $('input[name="firstname"]').val();
    const lastname = $('input[name="lastname"]').val();
    const email = $('input[name="email"]').val();
    const subject = $('input[name="subject"]');
    const message = $('input[name="message"]');

    const requestCallContainer = $('#contact-us');

    if(firstname === '' || firstname === null){
        displayTmpMessage(requestCallContainer,'alert-danger','First Name cannot be empty');
    }else if(lastname === '' || lastname === null){
        displayTmpMessage(requestCallContainer,'alert-danger','Last Name cannot be empty');
    }else if(email === '' || email === null){
        displayTmpMessage(requestCallContainer,'alert-danger','Email cannot be empty');
    }else if(subject === '' || subject === null){
        displayTmpMessage(requestCallContainer,'alert-danger','Subject cannot be empty');
    }else if(message === '' || message === null){
        displayTmpMessage(requestCallContainer,'alert-danger','Message cannot be empty');
    }
    else{
        displayMessage(requestCallContainer,'alert-success','Successfully Submitted');
    }
}
