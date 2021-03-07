function avg(data) { // your code here 

  //console.log(data.products);
  let Aws = 0;

  for(let i=0; i<data.products.length; i++){

    Aws += data.products[i].price;
  }
  Aws /= data.products.length;

  return Aws;

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