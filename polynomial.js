/**
 * Created by Wayne on 22/03/2016.
 */
 /**
  * Created by Wayne on 22/03/2016.
  */
 //a is an array consisting of constants; n is the index of a and power of x;
//a is an array n is the index of a and power of x
var const_a=[],position_x=2.1,power_n=8;
var b=[];
//a(0) to a(power_n)
for(var i = 1;i < power_n+2;i++){
  const_a.push(i);
}
console.log(const_a);

//y = a0+x*(a1+x(.....(an-1 + x*(an))....))
function polynomial(n,a,x){
    var p = a[n];
    for(var i = n; i > 0;i--){
        p = a[n-1] + p * x;
        console.log(i);
    }
    return p;
}
//y=a0 + a1*x + a2*x^2 +....an*x^n
function  polunomial2(n,a,x){
    var p = a[0];
    for(var i = 1;i < n;i++){
        p += (a[i] * Math.pow(4,3));
    }
    return p;
}

//run different methods
var result = polynomial(power_n,const_a,position_x);
console.log("result: "+result);

var result2 = polunomial2(power_n,const_a,position_x);
console.log("result: "+result);
