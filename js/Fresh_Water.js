let fresh_Water_Products = [];
var total_count_of_fresh_Water;
axios.get("https://agro-app-lpc.herokuapp.com/api/fishes/all?t=Fresh%20Water%20Fish")
.then(response=>{
    response.data.map(fish=>{
        fresh_Water_Products.push(fish);
    });
    total_count_of_fresh_Water = fresh_Water_Products.length;
    document.getElementById('supFresh_Water').innerHTML+= total_count_of_fresh_Water;    
  })
  .catch(error => comsole.log(error));