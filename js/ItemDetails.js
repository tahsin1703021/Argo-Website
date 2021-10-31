var href = document.location.href;
var link = href.split('?')[1];
var FullName = link.split(';')[0].split('=')[1];
var str = FullName.split('%20');
var a  = "";
var all_items = [];

for (var i =0;i<str.length;i++){
    a= a + str[i] + " ";
}
var smallPrice = link.split(';')[1].split('=')[1];
var largePrice = link.split(';')[2].split('=')[1];
var id = link.split(';')[3].split('=')[1];

const loading = () => {
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
        <button onclick="addtocart('${id}')" class="addToCartButton" style="margin-top: 30px;"> Add to Cart </button>
        <button class="buyButton" style="margin-top: 10px;"> Buy </button>
        
    </div>
    </div>`;
    detailedID.innerHTML += details;

    axios.get("https://agro-app-lpc.herokuapp.com/api/fishes/all?fbclid=IwAR3Ye39kLxBKKtZI6b_IFbW40OKMk0hWLSnstbLtPGlDh1MSB4M0-CgVt8c")
    .then(response => {
      response.data.map(result => {
        all_items.push(result);
      });

    })
    .catch(error => console.log(error));

}
