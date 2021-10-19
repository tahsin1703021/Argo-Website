var soft_shell_crab=[];
var seafood = [];
var sundarban = [];
var fresh_water = []; 
var all_items = [];
var total_count_of_all_items;
var total_count_of_soft_shell;
var count = 1200;

const loadAllFish = async () => {
  console.log('loading all fishes');
  const soft_shell_API = "https://agro-app-lpc.herokuapp.com/api/fishes/all?t=Soft%20Shell%20Crab"
  const seafood_API = "https://agro-app-lpc.herokuapp.com/api/fishes/all?t=Seafood&fbclid=IwAR1M-DhFCSHolLln0QXbeovzt8zJgkzLixEXUkJNLiRjkYCdnMLpSJnzM00"
  const sundarban_API = "https://agro-app-lpc.herokuapp.com/api/fishes/all?t=Sundarbans%20Firm"
  const fresh_water_API = "https://agro-app-lpc.herokuapp.com/api/fishes/all?t=Fresh%20Water%20Fish"
  

  const request_soft_shell = axios.get(soft_shell_API);
  const request_seafood = axios.get(seafood_API);
  const request_sundarban = axios.get(sundarban_API);
  const request_fresh = axios.get(fresh_water_API);
  
  axios.get("https://agro-app-lpc.herokuapp.com/api/fishes/all?fbclid=IwAR3Ye39kLxBKKtZI6b_IFbW40OKMk0hWLSnstbLtPGlDh1MSB4M0-CgVt8c")
  .then(response=>{
    response.data.map(result=>{
      all_items.push(result); 
    });
    all_items.map(items=>{
      const divElement= 
       `<div class="item" onmouseenter="addtocart(this)" onmouseleave="vanishingcart(this)" id=${items._id} name=${items.name} onclick="FoundIt(this)">
            <img id="chooseFavourite" class="favClick" src="img/WhiteHeart.svg" alt="Like">
              <div class="item-background">
              <img src=${items.avatar} style="width:100%;height:auto" alt=${items.name}>  
                <button> Add to cart </button>
              </div>
              <div class="cart-caption" style="float: right;">${items.largePrice}</div>
              <div class="cart-caption">${items.name}</div>
              <div class="cart-lower">
                  <div class="size"- style="float:right;">
                    <div class="value-button" id="small-size" ><strong>S</strong></div> 
                    <div class="value-button" id="medium-size"><strong>M</strong></div> 
                    <div class="value-button" id="large-size" ><strong>L</strong></div> 
                  </div>
                  <div class="quantity">
                  <div class="value-button" id="decrease"  value="Decrease Value" onclick="decreaseValue(this)"><strong>-</strong></div>
                  <input type="number" id="numbers" class="number" style="height:22.7px;top:-2px" value="0"/>
                  <div class="value-button" id="increase" value="Increase Value" onclick="increaseValue(this)"><strong>+</strong></div>      
                  </div>
            </div>
          </div>`;
     const products = document.getElementById('All_Products');
     if(products != null){
      products.innerHTML+=divElement;
      // console.log("not null");this is will onlyu execute when someone enters the all products page
      }
     });
     total_count_of_all_items = all_items.length;
     document.getElementById('supAll_Products').innerHTML+=total_count_of_all_items;

  })
  .catch(error => console.log(error));
  
 
  
  axios.all([request_soft_shell, request_seafood, request_sundarban, request_fresh])
  .then(axios.spread((...responses)=>{
      const response_soft_shell = responses[0];
      // console.log(response_soft_shell);
      const response_seafood = responses[1];
      const response_sundarban = responses[2];
      const response_fresh = responses[3];
     

      response_soft_shell.data.map(response =>{
        soft_shell_crab.push(response);        
      });
      // console.log(soft_shell_crab);
    
      response_seafood.data.map(response =>{
        seafood.push(response);        
      });
      // console.log(seafood);

      response_sundarban.data.map(response =>{
        sundarban.push(response);        
      });
      // console.log(sundarban);

      response_fresh.data.map(response =>{
        fresh_water.push(response);        
      });
      // console.log(fresh_water);
     

      soft_shell_crab.map(items=>{
       const divElement= 
        `<div class="item" name=${items.name} onmouseenter="addtocart(this)" onmouseleave="vanishingcart(this)" id=${items._id} onclick="FoundIt(this)">
          <img id="chooseFavourite" class="favClick" src="img/WhiteHeart.svg" alt="Like">
          <div class="item-background">
            <img src=${items.avatar} style="width:100%;height:auto" alt=${items.name}>  
            <button> Add to cart </button>
          </div>
          <div class="cart-caption" style="float: right;">${items.largePrice}</div>
          <div class="cart-caption">${items.name}</div>
          <div class="cart-lower">
              <div class="size"- style="float:right;">
                <div class="value-button" id="small-size" ><strong>S</strong></div> 
                <div class="value-button" id="medium-size"><strong>M</strong></div> 
                <div class="value-button" id="large-size" ><strong>L</strong></div> 
              </div>
              <div class="quantity">
                <div class="value-button" id="decrease"  value="Decrease Value" onclick="decreaseValue(this)"><strong>-</strong></div>
                <input type="number" id="numbers" class="number" style="height:22.7px;top:-2px" value="0"/>
                <div class="value-button" id="increase" value="Increase Value" onclick="increaseValue(this)"><strong>+</strong></div>
              </div>
        </div>
      </div>`;
      const slide = document.getElementById('slide_soft_shell_crab');
      if(slide != null){
        slide.innerHTML+=divElement;
      }
      const softproducts = document.getElementById('Soft_Products');
      if(softproducts != null){
       softproducts.innerHTML+=divElement;
       // console.log("not null");this is will only execute when someone enters the all products page
       }
      });
      
      seafood.map(items=>{
        const divElement= 
         `<div class="item" name=${items.name} onmouseenter="addtocart(this)" onmouseleave="vanishingcart(this)" id=${items._id} onclick="FoundIt(this)">
            <img class="favClick" src="img/whiteHeart.svg" alt="Like">
             <div class="item-background">
            <img src=${items.avatar} style="width:100%;height:auto" alt=${items.name}>  
             <button> Add to cart </button>
           </div>
           <div class="cart-caption" style="float: right;">${items.largePrice}</div>
           <div class="cart-caption">${items.name}</div>
           <div class="cart-lower">
               <div class="size"- style="float:right;">
                 <div class="value-button" id="small-size" style=""><strong>S</strong></div> 
                 <div class="value-button" id="medium-size"style=""><strong>M</strong></div> 
                 <div class="value-button" id="large-size" style=""><strong>L</strong></div> 
               </div>
               <div class="quantity">
                 <div class="value-button" id="decrease"  value="Decrease Value" onclick="decreaseValue(this)"><strong>-</strong></div>
                 <input type="number" class="number" id="numbers" style="height:22.7px;top:-2px" value="0"/>
                 <div class="value-button" id="increase" value="Increase Value" onclick="increaseValue(this)"><strong>+</strong></div>
               </div>
         </div>
       </div>`;
       const slide = document.getElementById('slide_seafood');
       if(slide != null){
        slide.innerHTML+=divElement;
      }
       });
       
       sundarban.map(items=>{
        const divElement= 
         `<div class="item" name=${items.name} onmouseenter="addtocart(this)" onmouseleave="vanishingcart(this)" id=${items._id} onclick="FoundIt(this)">
         <img class="favClick" src="img/whiteHeart.svg" alt="Like">
           <div class="item-background">
           <img src=${items.avatar} style="width:100%;height:auto" alt=${items.name}>  
             <button> Add to cart </button>
           </div>
           <div class="cart-caption" style="float: right;">${items.largePrice}</div>
           <div class="cart-caption">${items.name}</div>
           <div class="cart-lower">
               <div class="size"- style="float:right;">
                 <div class="value-button" id="small-size" ><strong>S</strong></div> 
                 <div class="value-button" id="medium-size"><strong>M</strong></div> 
                 <div class="value-button" id="large-size" ><strong>L</strong></div> 
               </div>
               <div class="quantity">
                 <div class="value-button" id="decrease"  value="Decrease Value" onclick="decreaseValue(this)"><strong>-</strong></div>
                 <input type="number" class="number" id="numbers" style="height:22.7px;top:-2px" value="0"/>
                 <div class="value-button" id="increase" value="Increase Value" onclick="increaseValue(this)"><strong>+</strong></div>
               </div>
         </div>
       </div>`;
       const slide = document.getElementById('slide_sundarban');
       if(slide != null){
        slide.innerHTML+=divElement;
      }
       });

       fresh_water.map(items=>{
        const divElement= 
         `<div class="item" name=${items.name} onmouseenter="addtocart(this)" onmouseleave="vanishingcart(this)" id=${items._id} onclick="FoundIt(this)">
          <img class="favClick" src="img/whiteHeart.svg" alt="Like" onclick="chooseFav(this)">
           <div class="item-background">
           <img src=${items.avatar} style="width:100%;height:auto" alt=${items.name}>  
             <button> Add to cart </button>
           </div>
           <div class="cart-caption" style="float: right;">${items.largePrice}</div>
           <div class="cart-caption">${items.name}</div>
           <div class="cart-lower">
               <div class="size" style="float:right;">
                 <div class="value-button" id="small-size" ><strong>S</strong></div> 
                 <div class="value-button" id="medium-size"><strong>M</strong></div> 
                 <div class="value-button" id="large-size" ><strong>L</strong></div> 
               </div>
               <div class="quantity">
                 <div class="value-button" id="decrease"  value="Decrease Value"><strong>-</strong></div>
                 <input type="number" class="number" id= "numbers" style="height:22.7px;top:-2px" value="0"/>
                 <div class="value-button" id="increase" value="Increase Value" onclick="increaseValue(this)"><strong>+</strong></div>
               </div>
         </div>
       </div>`;
       const slide = document.getElementById('slide_fresh');
       if(slide != null){
        slide.innerHTML+=divElement;
      }
       });
       
  }))
  .catch(error => console.log('On get all fish error', error));
  

}
const chooseFav = (element) =>{
  console.log("hello");
}
const FoundIt = (element) => {
    let name,largePrice,smallPrice;  
   all_items.map(card => {
     // console.log(card);
     if(element.id === card._id){
       name = card.name;
       largePrice = card.largePrice;
       smallPrice = card.smallPrice;

      }
   });
   const URL = "http://127.0.0.1:5500/ItemDetails.html?name="+name+";smallPrice="+smallPrice+";largePrice="+largePrice;
   document.location.href = URL;
}
const addtocart = (element) =>{
  // console.log(element);
     element.getElementsByTagName('*')[6].style.display = "block";
     element.getElementsByTagName('*')[3].style.display = "block";
     element.getElementsByTagName('*')[0].style.display = "block";
   }
   const vanishingcart = (element) =>{
    element.getElementsByTagName('*')[6].style.display = "none";
    element.getElementsByTagName('*')[3].style.display = "none";
    element.getElementsByTagName('*')[0].style.display = "none";
    
}
function increaseValue(element) {
  console.log(element);
  // let divs = element.getElementsByTagName('*')[1];

  // console.log(divs);
    var value = parseInt(document.getElementById('numbers').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('numbers').value = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('numbers').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('numbers').value = value;
  }

function modal_func_PRODUCTS(){
  var modal = document.getElementById("productsModal");
  
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
 
}
function modal_func_ACCOUNT(){
  var modal = document.getElementById("accountModal");
  
  // Get the button that opens the modal
  var btn = document.getElementById("account");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("closed")[0];
  
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      console.log('account modal closed');
    }
  }
 
}
function modal_func_ACCOUNT_SETTINGS(){
  var modal = document.getElementById("accountSettingsModal");
  
  // Get the button that opens the modal
  var btn = document.getElementById("settingsModal");
  
  //b  Get the <span> element that closes the modal
  var span = document.getElementsByClassName("closes")[0];
  
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      console.log('account settings modal closed');
      modal_func_ACCOUNT();
    }
  }
 
}