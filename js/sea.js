let sea_Products = [];
var total_count_of_sea_food;
axios.get("https://agro-app-lpc.herokuapp.com/api/fishes/all?t=Seafood&fbclid=IwAR1M-DhFCSHolLln0QXbeovzt8zJgkzLixEXUkJNLiRjkYCdnMLpSJnzM00")
.then(response=>{
    response.data.map(fish=>{
        sea_Products.push(fish);
    });
    total_count_of_sea_food = sea_Products.length;
    document.getElementById('supSea').innerHTML+= total_count_of_sea_food;    
  })
  .catch(error => comsole.log(error));