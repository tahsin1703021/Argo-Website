function incrementFunction(i) {
  var x = $("#amount_" + i).val();
  x = parseInt(x) + 1;
  $("#amount_" + i).val(x);
}
function decrementFunction(i) {
  var x = $("#amount_" + i).val();
  x = parseInt(x);
  if (x > 0) {
    x = x - 1;
  }
  $("#amount_" + i).val(x);
}

function cancelCart(id) {
  cartItems = JSON.parse(localStorage.getItem("cartItems"));

  for (let i = 0; i < cartItems.length; i++) {
    if ((cartItems[i].item._id = id)) {
      cartItems.splice(i, 1);
      break;
    }
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  location.reload();
}

function getLarge(element, price, id) {
  if (element.children[0].style.color == "rgb(160, 160, 160)") {
  } else {
    var mediumButton = document.getElementById("medium-size");
    var smallButton = document.getElementById("small-size");

    if (smallButton.style.background == "rgb(51, 117, 229)") {
      smallButton.style.background = "#c7c7c7";
      smallButton.children[0].style.color = "black";
    }
    if (mediumButton.style.background == "rgb(51, 117, 229)") {
      mediumButton.style.background = "#c7c7c7";
      mediumButton.children[0].style.color = "black";
    }

    element.children[0].style.color = "white";
    element.style.background = "#3375E5";

    let Subtotal = price;
    let Total = 0;
    let Shipping = 100;
    document.getElementById("subTotalValue").innerHTML  = "&#2547 " + Subtotal + "/-";

    Total = Subtotal + Shipping;

    document.getElementById("totalValue").innerHTML  = "&#2547 " + Total + "/-";

    document.getElementById('price_' + id).innerHTML = "&#2547 " + price + "/-";
  }
}

function getMedium(element, price, id) {
  if (element.children[0].style.color == "rgb(160, 160, 160)") {
  } else {
    var largeButton = document.getElementById("large-size");
    var smallButton = document.getElementById("small-size");

    if (smallButton.style.background == "rgb(51, 117, 229)") {
      smallButton.style.background = "#c7c7c7";
      smallButton.children[0].style.color = "black";
    }
    if (largeButton.style.background == "rgb(51, 117, 229)") {
      largeButton.style.background = "#c7c7c7";
      largeButton.children[0].style.color = "black";
    }

    element.children[0].style.color = "white";
    element.style.background = "#3375E5";

    let Subtotal = price;
    let Total = 0;
    let Shipping = 100;
    document.getElementById("subTotalValue").innerHTML = "&#2547 " + Subtotal + "/-";

    Total = Subtotal + Shipping;

    document.getElementById("totalValue").innerHTML  = "&#2547 " + Total + "/-";

    document.getElementById('price_' + id).innerHTML = "&#2547 " + price + "/-";
  }
}
function getSmall(element, price, id) {
  if (element.children[0].style.color == "rgb(160, 160, 160)") {
  } else {
    var largeButton = document.getElementById("large-size");
    var mediumButton = document.getElementById("medium-size");

    if (mediumButton.style.background == "rgb(51, 117, 229)") {
      mediumButton.style.background = "#c7c7c7";
      mediumButton.children[0].style.color = "black";
    }
    if (largeButton.style.background == "rgb(51, 117, 229)") {
      largeButton.style.background = "#c7c7c7";
      largeButton.children[0].style.color = "black";
    }

    element.children[0].style.color = "white";
    element.style.background = "#3375E5";

    let Subtotal = price;
    let Total = 0;
    let Shipping = 100;
    document.getElementById("subTotalValue").innerHTML = "&#2547 " + Subtotal + "/-";

    Total = Subtotal + Shipping;

    document.getElementById("totalValue").innerHTML = "&#2547 " + Total + "/-";

    document.getElementById('price_' + id).innerHTML = "&#2547 " + price + "/-";
  }
}

cartItems = JSON.parse(localStorage.getItem("cartItems"));
let design = "";
let Subtotal = 0;
let Total = 0;
let Shipping = 100;
for (var i = 0; i < cartItems.length; i++) {
  design = `<div id="${cartItems[i].item._id}" class="cart-items">
            <div class="row">
              <img style="height:80px; width:80px; margin-left: 15px; margin-right: 30px;" src="${cartItems[i].item.avatar}"
                alt="" />
              <div class="col">
                <div class="row" style="margin-bottom:15px">
                  <div style="font-size: 20px; font-weight: 700; margin-left: 5%;">${cartItems[i].item.name}</div>
                </div>
                <div class="size">
                  <div class="value-button" id="small-size" name="small-size" onclick="getSmall(this, ${cartItems[i].item.smallPrice}, '${cartItems[i].item._id}')"
                  style="background: #c7c7c7;">
                    <strong>S</strong>
                  </div>
                  <div class="value-button" id="medium-size" name="medium-size" onclick="getMedium(this, ${cartItems[i].item.mediumPrice}, '${cartItems[i].item._id}')" 
                  style="background: #3375E5;">
                    <strong style="color: white;">M</strong>
                  </div>
                  <div disabled class="value-button" id="large-size" name="large-size" onclick="getLarge(this, ${cartItems[i].item.largePrice}, '${cartItems[i].item._id}')" 
                  style="background: #c7c7c7">
                    <strong style="color: #A0A0A0;">L</strong>
                  </div>
                </div>
                </br>
                <div class="quantity">
                  <div class="value-button" onclick="decrementFunction('${cartItems[i].item._id}')">
                    <strong>-</strong>
                  </div>
                  <div class="value-button">
                    <input style="width: 24.02px; height: 24.02px; text-align: center;" type="number" id="amount_${cartItems[i].item._id}"
                      value="0" disabled />
                  </div>
                  <div class="value-button" onclick="incrementFunction('${cartItems[i].item._id}')">
                    <strong>+</strong>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="float-right" onclick="cancelCart('${cartItems[i].item._id}')"
                  style="font-size: 20px; cursor:pointer; padding-right: 20px;">&#215</div>
                </br>
                </br>
                </br>
                <div class="float-right">
                  <h6 id="price_${cartItems[i].item._id}" style="padding-right: 20px; font-size: 20px;">&#2547 ${cartItems[i].item.smallPrice}/-</h6>
                </div>
              </div>
            </div>
          </div>`;

  document.getElementById("cartItems").innerHTML += design;

  Subtotal += cartItems[i].item.smallPrice;
}

document.getElementById("subTotalValue").innerHTML = "&#2547 " +  Subtotal + "/-";

Total = Subtotal + Shipping;

document.getElementById("totalValue").innerHTML = "&#2547 " + Total + "/-";
