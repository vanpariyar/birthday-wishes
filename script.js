var personName = document.getElementById('person-name');
var message = document.getElementById('birthday-message');
var fromName = document.getElementById('from-name');
var templateSelect = document.getElementById('template-select');
var templateForm = document.getElementById('template-form');

var generatedLink = document.getElementById('generated-link');

function handleTemplateSubmit(e){
    e.preventDefault();
    let link = window.location.href;

    // var search_params = new URLSearchParams(); 

    // append parameters
    // search_params.append('name', personName.value);
    // search_params.append('message', message.value);
    // search_params.append('from', fromName.value);
    // query string
    // var query_string = search_params.toString();
    // console.log(query_string)

    // link = link+"/template"+templateSelect.value+"/?"+query_string;

    link = link+"/template"+templateSelect.value+"/?name="+personName.value+"&message="+message.value+"&from="+fromName.value;
    generatedLink.innerText = link;
}


templateForm.addEventListener('submit', handleTemplateSubmit);