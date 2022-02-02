var categoryToBeShown = [];
var href = document.location.href;//url
var link = href.split('?')[1];//attributes in the url
var FullName = link.split(';')[0].split('=')[1];//name with percentage
var typePercentage = link.split(';')[3].split('=')[1];//the type of food that is selected with percentage
var typeArray = typePercentage.split('%20'); //type array
var type="";
for (var i =0;i<1;i++){
    type= type + typeArray[i];//loop including the array elements of strings
}
// console.log(type);
var str = FullName.split('%20');//array that holds the full name seperated by spaces
var a  = "";//string that holds the full name including spaces and will be displayed
for (var i =0;i<str.length;i++){
    a= a + str[i] + " ";//loop including the array elements of strigs
}
var smallPrice = link.split(';')[1].split('=')[1];
var largePrice = link.split(';')[2].split('=')[1];
const loading = () => {
    axios.get("https://agro-app-lpc.herokuapp.com/api/fishes/all?fbclid=IwAR3Ye39kLxBKKtZI6b_IFbW40OKMk0hWLSnstbLtPGlDh1MSB4M0-CgVt8c")
    .then(result=>{
        result.data.map(item=>{
            if(item.itemType.includes(type)){
                categoryToBeShown.push(item);
            }
        });
        categoryToBeShown.map(card=>{
            // console.log("inside slide equals to null");
            const sliderItem =`<div class="item" onmouseenter="addtocart(this)" onmouseleave="vanishingcart(this)" name=${card.name}>
            <img id="chooseFavourite" class="favClick" src="./img/WhiteHeart.svg" alt="Like">
              <div class="item-background">
                <img src=${card.avatar} style="width:100%;height:auto" alt=${card.name} id=${card._id} onclick="FoundIt(this)">  
                  <button> Add to cart </button>
              </div>
              <div class="cart-caption" style="float: right;">${card.largePrice}</div>
              <div class="cart-caption">${card.name}</div>
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
          
          const slide = document.getElementById('cart');
          if(slide != null){
            //   console.log("inside slide equals to null");
            slide.innerHTML+=sliderItem;
            }
        });
    
    })
    .catch(error=>console.log(error));

  
    let detailedID = document.getElementById('DetailedSection');
    let details = `<div class="productBox">
    <div class="itemPic">
        <img src="img/breadedshellcrab.svg" alt="item">
    </div>
    <div class="itemDetails">
        <div class="itemHeader">
            <div class="itemHeading"><h1 id="itemHeading" style="color: white;">${a}</h1></div>
            <div class="chooseFavourite"><img id="chooseFavourite" class="favClick" src="img/WhiteHeart.svg" alt=""></div>    
        </div>
        <div class="itemPrice">
            <h4 style="color: white;">&#2547; <span>${smallPrice}-${largePrice}</span>/-</h4>
        </div>
        <div style="display: flex;justify-content: space-between;">
            <div>Select Quantity</div>
            <div>Available Sizes</div>
        </div>
        <div class="itemConfig">
            <div class="quantity">
                <div class="value-button" id="decrease"  value="Decrease Value" onclick="decreaseValue(this)"><strong>-</strong></div>
                <input type="number" id="numbers" class="number" style="height:22.7px;top:-2px" value="0"/>
                <div class="value-button" id="increase" value="Increase Value" onclick="increaseValue(this)"><strong>+</strong></div>
            </div>
            <div class="size"- style="float:right;">
                <div class="value-button" id="small-size" ><strong>S</strong></div> 
                <div class="value-button" id="medium-size"><strong>M</strong></div> 
                <div class="value-button" id="large-size" ><strong>L</strong></div> 
            </div>
        </div>
        <button class="addToCartButton" style="margin-top: 30px;"> Add to Cart </button>
        <button class="buyButton" style="margin-top: 10px;"> Buy </button>
        
    </div>
    </div>`;
    detailedID.innerHTML += details;


}
const buttonRight = document.getElementById('rightNavigate');
const buttonLeft = document.getElementById('leftNavigate');

buttonRight.onclick = function () {
  document.getElementById('cart').scrollLeft += 500;
//   console.log("clicked");
}
buttonLeft.onclick = function() {
    document.getElementById('cart').scrollLeft -=500;
}
