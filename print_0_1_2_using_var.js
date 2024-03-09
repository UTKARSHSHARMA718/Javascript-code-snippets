for(var i=0; i<3; i++){
  const func=(a)=>setTimeout(function() {
    console.log(a)
  }, 100);
  func(i);
}
