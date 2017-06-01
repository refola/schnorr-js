// schnorr.js

function SchnorrGroup(p, q, g) {
    this.p=Number(p);
    this.q=Number(q);
    this.g=Number(g);
    this.checkGenerator();

    this.checkGenerator=function(){
        
    }
    this.hide=function(a) {
        return exp(g,a,p);
    }
}

getInputs();
