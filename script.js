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
