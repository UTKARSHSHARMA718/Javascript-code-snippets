const add=(value)=>{
    return (v1)=>{
        if(!v1){
          return value;
        }
        return add(v1+value);
    }
}

console.log(add(1)(2)(3)())
