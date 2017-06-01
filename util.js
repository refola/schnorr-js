// util.js
// utility function(s)

// helper function for debugging
function log(message) {
    // Note: Getting the line number like this is very
    // browser-specific. This is currently only tested in Firefox on
    // Linux.
    line=new Error().stack.split('\n')[1].split(':').reverse().splice(0,2).reverse().join(':');
    console.log(new Error().stack.split('\n')[1]);
    console.log(line+": "+message);
}

// GLobal OBjects
var glob={};
