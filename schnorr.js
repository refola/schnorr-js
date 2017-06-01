// schnorr.js

function SchnorrGroup(p, q, g) {
    this.p=Number(p);
    this.q=Number(q);
    this.g=Number(g);

    this.checkGenerator=function(){
        // TODO: Actually check it.
    }
    this.checkGenerator();

    this.hide=function(a) {
        return expMod(g,a,p);
    }
    // multiply mod p
    this.pMult=function(a,b){
        return (a*b)%this.p;
    }
    // multiply mod q
    this.qMult=function(a,b){
        return (a*b)%this.q;
    }
}

// retrieve form values and generate zk proof of knowing a and b that add up to their sum
function sum() {
    var i=getInput();
    var gp=new SchnorrGroup(i.p,i.q,i.g);
    if(i.g!==gp.g){
        set('g',gp.g);
        set('g-note', 'The value of g has been changed from '+i.g+' to '+gp.g+'.');
    }
    var ga=gp.hide(i.a);
    var gb=gp.hide(i.b);
    var gab=gp.pMult(ga,gb);
    var ab=gp.qMult(a,b);

    var proofString="You know two numbers a and b whose sum is "+(i.a+i.b)+". Your proof is that "+ga+"*"+gb+"="+gab+"(mod "+gp.p+").";
    setContent('zk-a+b',proofString);
}
