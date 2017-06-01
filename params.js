// params.js
// process parameters

var inputIds=['p', 'q', 'g', 'a', 'b'];
var spanIds=['g-note', 'zk-a+b'];

// retrieve form input
function getInput(){
    var input={}
    // get parameters by ID
    for(var i in inputIds){
        var name=inputIds[i];
        var val=get(name);
        // convert to number if possible
        if(!isNaN(Number(val))){
            val=Number(val);
        }
        input[name]=val;
    }
    return input;
}

// Convenience function for setting values by id
function setContent(name, value){
    var elt=document.getElementById(name);
    if(elt!=null){
        elt.textContent=value;
    }else{
        log("Can't set "+name+" to "+value+": null");
    }
}

// Convenience function for getting values by id
function get(name){
    return document.getElementById(name).value;
}
