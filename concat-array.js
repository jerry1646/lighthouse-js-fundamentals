var concat = function(a,b){
  var newarr = [];
  for (var i = 0; i < a.length; i++){
    newarr.push(a[i]);
  }
  for (var i = 0; i < b.length; i++){
    newarr.push(b[i]);
  }
  return newarr;
}

console.log(concat([1], [1,2,3,4]))