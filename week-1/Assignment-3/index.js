function countAandB(input) {

  var a=0;
  var b=0;
  var c = input.length;

  for(var i=0; i<c; i++){
    if(input[i] == "a")
      a++;
    if(input[i] == "b")
      b++;
  }

  return "a "+  a + ", and " + "b "+b ;

}

function toNumber(input) {

  var array = [];

  for(var i=0; i<input.length; i++){
    if(input[i] == 'a'){
      array[i] = 1;
    }else if(input[i] == 'b'){
      array[i] = 2;
    }else if(input[i] == 'c'){
      array[i] = 3;
    }else if(input[i] == 'd'){
      array[i] = 4;
    }else if(input[i] == 'e'){
      array[i] = 5;
    }

  }

  return array;

}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];

console.log(countAandB(input1));

console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]




let input2 = ['e', 'd', 'c', 'd', 'e'];

console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2); // should print [5, 4, 3, 4, 5]
