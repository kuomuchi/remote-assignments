function count(input) { // your code here 

  let check1 = []; // 確認key
  let check2 = []; // 確認value

  for(let i=0; i<input.length; i++){ //將input倒入
    let replace = input[i]; //取代array的數值，不然會炸掉
    let find = 1; //當作bool使用
    
    for(let u=0; u < check1.length + 1; u++){

      if(check1[u] == replace){//檢查是否有相同的key，如果有將其放入check1
        check2[u]++;
        find = 0; //找到了。
        break;
      }
    }

    if(find == 1){//建立新的key
      check1.push(replace); //將新的key丟入array
      check2.push(replace); //創建一個新的空間
      check2[check2.length - 1] = 0; //將check2的空間設為數字。
    }

  }
  console.log("{");
  for(let i=0; i<check1.length; i++){
    check2[i]+=1;
    console.log(check1[i]+':'+check2[i]+', ');
  }
  console.log("}");
  return '';

  //經曾經的我，想要將「物件」的key，使用input[0]取代。
  //看來我還太天真了 orz
  // let select = {};

  // for(let i=0; i<input.length; i++){
  //   let replace = '';
  //   replace = input[0];
  //   console.log(replace);

  //   if(select.replace == undefined){
  //     select.replace = 1;
  //   }else{
  //     select.replace += 1;
  //   }
  // }
  // return select;
}



let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'x'];
console.log(count(input1)); // should print {a:3, b:1, c:2, x:1}

function groupByKey(input) { // your code here 
  let number = {input}; // 將所有的數字入number裡面
  let point = [];

  for(let i=0; i<number.input.length; i++){
    let inside = number.input[i];//縮短
    let find = 1; //一樣當作bool用


    for(let u=0; u<=point.length + 1; u++){
      
      console.log(inside.key + " 以及 " + point[u])

      if(inside.key == point[u]){//如果有相同的key，將新的keyValue加入舊的
        let re = number.input[u].value;
        // console.log(re+"加上"+inside.value); 測試用orz
         re += inside.value;
         number.input[u].value = re;
        find = 0;
      }
    }

    if(find == 1){
      point.push(inside.key);
      console.log(inside.key + "加入" + point[i]);
    }
    
  }

  let cruel = number.input.length - point.length;
  for(let i=0; i<cruel; i++){
    number.input.pop();
  }

  return number.input;
  
}

let input2 = [ 
  {key: 'a', value: 3},
  {key: 'b', value: 1},
  {key: 'c', value: 2},
  {key: 'a', value: 3},
  {key: 'c', value: 5}
]
console.log(groupByKey(input2)); // should print {a:6, b:1, c:7}




// let test = {};
// let ni = ['a', 'b', 'c', 'a', 'c', 'a', 'x'];
// let st = ni[0]

// test.ni;

// console.log(test.ni, ni);