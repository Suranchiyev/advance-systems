function joinCareerNetwork(){
    const firstname = $('input[name="firstname"]').val();
    const lastname = $('input[name="lastname"]').val();
    const email = $('input[name="email"]').val();
    const phone = $('input[name="phone"]').val();
    const file = $('#inputGroupFile02').val();
    const jobType = $('select[name="jobType"]').val();

    const modalBody = $('.modal-body');
    const closeBtn = $('#close');
    const joinNetContainer = $('#join-network');

    if(firstname === '' || firstname === null)
    {
        console.log("First Name cannot be empty");
        displayTmpMessage(modalBody,'alert-danger','First Name cannot be empty');
    }else if (lastname === '' || lastname === null)
    {
        console.log("Last Name cannot be empty");
        displayTmpMessage(modalBody,'alert-danger','Last Name cannot be empty');
    }else if (email === '' || email === null)
    {
        console.log("Email cannot be empty");
        displayTmpMessage(modalBody,'alert-danger','Email cannot be empty');
    }else if (phone === '' || phone === null)
    {
        console.log("Phone cannot be empty");
        displayTmpMessage(modalBody,'alert-danger','Phone cannot be empty');
    }else if (file === '' || file === null)
    {
        console.log("Please Upload Resume");
        displayTmpMessage(modalBody,'alert-danger','Please Upload Resume');
    }else if (jobType === '' || jobType === null)
    {
        console.log("Please choose Job Type");
        displayTmpMessage(modalBody,'alert-danger','Please choose Job Type');
    }else{
        closeBtn.click();
        displayMessage(joinNetContainer,'alert-success','Our recruiters will contact you shortly')

    }
}


