function max(numbers) { // your code here, for-loop method preferred
  let biggerOne = numbers[0];
  for(let i=0; i<numbers.length; i++){
    let challenger = numbers[i];
    console.log("導入:"+challenger);
    //HERE IS CHALLENGER!!!!

    if(challenger > biggerOne){
      biggerOne = challenger;
      console.log('新的:'+biggerOne);
      //Ah~  Nice <3  Big! 
      //I'm mean number :D
    }
    
  }

  return biggerOne; // ME :D the number!
  
}

function findPosition(numbers, target) { // your code here, for-loop method preferred 
  
  let find = -1;

  //Dora: Hi! I'm Dora!
  //Dora: where is the number?

  //Me: Here!  ->> target

  for(let i=0; i<numbers.length; i++){
    if(numbers[i] == target){
      find = i;
      break;

    }
  }

  //me: Hey Dora! Here it's!!
  //Dora: where?
  //me: in the "find" variable
  //Dora: where?
  
  return find;

}

console.log( max([1, 2, 4, 5]) ); // should print 5 
console.log( max([5, 2, 7, 1, 6]) ); // should print 7

console.log( findPosition([5, 2, 7, 1, 6], 5) ); // should print 0
console.log( findPosition([5, 2, 7, 1, 6], 7) ); // should print 2
console.log( findPosition([5, 2, 7, 7, 7, 1, 6], 7) ); // should print 2 (the first position)
console.log( findPosition([5, 2, 7, 1, 6], 8) ); // should print -1

//我在這裡看成，要算有多少target。orz