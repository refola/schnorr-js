// util.js
// utility function

// helper function for debugging
function log(message) {
    // x is an array of the slash-split location where log() was
    // called from. Note that this is very platform-specific and has
    // only been tested in Firefox on Linux, where it shows the
    // filename and line number.
    var x=new Error().stack.split('\n')[1].split('/');
    console.log(x[x.length-1]+": "+message);
}

// return a^b mod m
function expMod(a, b, m){
    var ans=a;
    for(var i=0;i<b;i++){
        ans*=a;
        ans%=m;
    }
    return ans;
}
