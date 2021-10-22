let sundarban_Products = [];
var total_count_of_sundarban;
axios.get("https://agro-app-lpc.herokuapp.com/api/fishes/all?t=Sundarbans%20Firm")
.then(response=>{
    response.data.map(fish=>{
        sundarban_Products.push(fish);
    });
    total_count_of_sundarban = sundarban_Products.length;
    document.getElementById('supSundarBan_Firm').innerHTML+= total_count_of_sundarban;    
  })
  .catch(error => comsole.log(error));