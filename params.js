var inputIds=['p', 'q', 'g', 'a', 'b'];
var spanIds=['g-note', 'zk-a+b'];

// retrieve form inputs and save to glob
function getInputs(){
    // get parameters by ID
    for(var i in inputIds){
        var name=inputIds[i];
        var val=getValue(v);
        // convert to number if possible
        if(!isNaN(Number(val))){
            val=Number(val);
        }
        glob[name]=val;
    }
}

// Convenience function for setting text in a text box
function setValue(name, value){
    var elt=document.getElementById(name);
    if(elt!=null){
        elt.value=value;
    }else{
        log("Can't set "+name+" to "+value+": null");
    }
}

// Convenience function for getting elements by ID.
function get(name) {
    return document.getElementById(name);
}

// Convenience function for getting text from a text box
function getValue(name){
    return get(name).value;
}
