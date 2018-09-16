for (var i = 100; i <= 200; i++){
  var print;
  if (i % 3 === 0 && i % 4 === 0){
    print = "LoopyLighthouse";
  }
  else if (i % 3 === 0 && i % 4 !== 0){
    print = "Loopy";
  }
  else if (i % 4 === 0 && i % 3 !== 0){
    print = "Lighthouse";
  }
  else{
    print = i;
  }
  console.log(print);
}