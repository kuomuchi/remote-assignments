function avg(data) { // your code here 

  //console.log(data.products);
  let aws = 0;

  for(let i=0; i<data.products.length; i++){

    aws += data.products[i].price;
  }
  aws /= data.products.length;

  return aws;

}

console.log(
  avg({


    size:3, products:[ {


      //10瓶麥香
      name:"Product 1", price:100


    }, 
    {

      //70瓶麥香
      name:"Product 2", price:700


    }, 
    {

      //25瓶麥香
      name:"Product 3", price:250


    }


  ]


}) 
) // should print the average price of all products
//醫院整間整間住起來！看整7小時！