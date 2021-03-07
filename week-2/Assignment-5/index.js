function findPosition(numbers, target) { // your code here, for-loop method preferred 

  let N = 1;
  let left = -1;
  let right = numbers.length;
  let aws = 0;

  while(N == 1){
    let mid = (left + right)/2;
    mid = Math.round(mid);

    if(target == numbers[mid]){
      aws = mid;
      N = 0;
    }else if(target < numbers[mid]){
      console.log(target+"「較小」L:"+left+" R:"+right+" M:"+mid);
      right = mid;
    }else if(target > numbers[mid]){
      console.log(target+"「較大」L:"+left+" R:"+rigth+"M:"+mid);
      left = mid;
    }

  }







  // function find(left, right){
    
  //   let mid = (left + right)/2;
  //   mid = Math.round(mid);

  //   console.log("r:"+right+"  l:"+left+ "m:"+mid);
  //   console.log(numbers[mid]);
    
    
  //   if(target == numbers[mid]){

  //     return mid;
  //   }else if(target < numbers[mid]){

  //     console.log("4");
  //     console.log(target+"比較小"+"往左邊找，目前的L:"+left+"目前的R:"+rigth);
  //     right = mid;
  //     find(left, rigth);
  //   }else if(target > numbers[mid]){
  //     console.log("5");

  //     console.log(target+"比較大"+"往右邊找，目前的L:"+left+"目前的R:"+rigth);
  //     left = mid;
  //     find(left, rigth);
  //   }
  // }

  return aws;

}

//key:1 2 5 6 7
//val:0 1 2 3 4   aws: 1

// 2+4 / 2 = 
// 6
// 3+4 / 2 = 3.5 => 4
// 4

console.log( findPosition([1, 2, 5, 6, 7], 1) );

// should print 2 (the first position)

//我在這裡看成，要算有多少target。orz