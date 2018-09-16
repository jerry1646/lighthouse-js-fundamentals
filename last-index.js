var lastIndexOf = function(a, n){
  var index = -1;
  if (n in a){
    for (var i = 0; i < a.length; i++){
      if(a[i]===n){
        index = i;
      }
    }
  }
  return index;
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));
console.log(lastIndexOf([0],0));
console.log(lastIndexOf([0,0,0,0,0,0,1],0));