range = function(start,stop,step){
  var numbers = [];
  if (start !== undefined && stop !== undefined && step !== undefined && start < stop && step > 0){
    for (var i = start; i <= stop; i += step){
      numbers.push(i);
    }
  }
  return numbers;
}


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));