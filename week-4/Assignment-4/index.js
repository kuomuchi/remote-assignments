function delayedResultPromise(n1, n2, delayTime) { // your code here
  let answer = n1 + n2;
  
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve(answer);
    }, delayTime);
    
  });
  
} 

async function main(){
  await delayedResultPromise(4, 5 , 3000).then(console.log);
  await delayedResultPromise(4, 5 , 3000).then(console.log);
  return ;
}

main();