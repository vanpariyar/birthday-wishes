var parseQueryString = function() {

    var str = window.location.search;
    var objURL = {};

    str.replace(
        new RegExp( "([^?=&]+)(=([^&]*))?", "g" ),
        function( $0, $1, $2, $3 ){
            objURL[ $1 ] = $3;
        }
    );
    return objURL;
};

//Example how to use it: 
var params = parseQueryString(); 

    
//const params = new URL(location.href).searchParams;
//const name = params.get('name');

document.getElementById('name').innerText = ( params.name ) ? decodeURIComponent(params.name) : 'To You'; 
document.getElementById('message').innerText = ( params.message ) ? decodeURIComponent(params.message) : `Happy birthday!! I hope your day is filled with lots of love and laughter! May all of your birthday wishes come true.`; 
document.getElementById('from-name').innerText = ( params.from ) ? decodeURIComponent(params.from) : `From Your Best Friend`; 
 