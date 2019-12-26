function displayTmpMessage(element,type,message) {
    var sSection =
        '<div id = \"'+message+'\" class="alert '+type+' alert-dismissible fade show" role="alert">'+message+'\n' +
        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">\n'+
        '<span aria-hidden="true">&times;</span>\n'+
        '</button>\n'+
        '</div>';
    element.prepend(sSection);

    const mesEl = $('div[id=\''+message+'\']');
    window.setTimeout(function () {
        mesEl.remove();
    }, 4000);
}

function displayMessage(element,type,message) {
    var sSection =
        '<div id = \"'+message+'\" class="alert '+type+' alert-dismissible fade show" role="alert">'+message+'\n' +
        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">\n'+
        '<span aria-hidden="true">&times;</span>\n'+
        '</button>\n'+
        '</div>';
    element.prepend(sSection);
}
