
function timeDuration(){
  var start = new Date().getTime();

  polynomial(power_n,const_a,position_x);

  var stop = new Date().getTime();
  var duration = stop - start;
  console.log(duration + "millisionsec");
}
timeDuration();
