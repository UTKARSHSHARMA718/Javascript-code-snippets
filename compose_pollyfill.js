
function addOne(a){
  return a+1;
}

function sub5(a){
  return a-5;
}

function mul10(a){
  return a*10;
}

//arguments cannot used inside the arrow functions
function compose(...allFuntions){
  return (value)=>{
    return allFuntions.reduceRight((accumulator,current, index)=>{
      return current(accumulator);
    }, value)
  }
}

const newFunc = compose(addOne, sub5, mul10);
console.log(newFunc(1))

