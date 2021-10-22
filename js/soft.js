let SoftShell_Products = [];
var total_count_of_soft_shell;
axios.get("https://agro-app-lpc.herokuapp.com/api/fishes/all?t=Soft%20Shell%20Crab")
.then(response=>{
    response.data.map(fish=>{
        SoftShell_Products.push(fish);
    });
    total_count_of_soft_shell = SoftShell_Products.length;
    document.getElementById('supSoft_Shell').innerHTML+= total_count_of_soft_shell;    
  })
  .catch(error => comsole.log(error));