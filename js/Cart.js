cartItems = localStorage.getItem("cartItems") == null ? [] : JSON.parse(localStorage.getItem("cartItems"));

let mediumColor = '#A0A0A0', smallColor = '#A0A0A0', largeColor = '#A0A0A0';
let mediumBackgroundColor = '#c7c7c7', smallBackgroundColor = '#c7c7c7', largeBackgroundColor = '#c7c7c7';
let price = 0;
let design = "";
let Subtotal = 0;
let Total = 0;
let Shipping = 100;
console.log(cartItems);

if (cartItems.length == 0) {
  document.getElementById("cartItems").innerHTML += "There are no items in the cart";

  document.getElementById("shippingDetails").innerHTML = "";

} else {
  cartItems.map(cartItem => {

    if (cartItem.large > 0) {
      largeBackgroundColor = '#3375E5';
      largeColor = 'white';

      price = cartItem.largePrice;

      if (cartItem.medium > 0) {
        mediumColor = 'black';
      }
      if (cartItem.small > 0) {
        smallColor = 'black';
      }
    } else {
      if (cartItem.medium > 0) {
        mediumBackgroundColor = '#3375E5';
        mediumColor = 'white';

        price = cartItem.mediumPrice;

        if (cartItem.small > 0) {
          smallColor = 'black';
        }
      } else {
        if (cartItem.small > 0) {
          smallBackgroundColor = '#3375E5';
          smallColor = 'white';

          price = cartItem.smallPrice;
        }
      }
    }

    // console.log(largeBackgroundColor + ' ' + mediumBackgroundColor + ' ' + smallBackgroundColor);


    design = `<div id="${cartItem._id}" class="cart-items">
              <div class="row">
                <img style="height:80px; width:80px; margin-left: 15px; margin-right: 30px;" src="${cartItem.avatar}"
                  alt="" />
                <div class="col">
                  <div class="row" style="margin-bottom:15px">
                    <div style="font-size: 20px; font-weight: 700; margin-left: 5%;">${cartItem.name}</div>
                  </div>
                  <div class="size">
                    <div class="value-button" id="small-size_${cartItem._id}" name="small-size" onclick="getSmall(this, ${cartItem.smallPrice}, '${cartItem._id}')"
                    style="background: ${smallBackgroundColor};">
                      <strong style="color: ${smallColor}">S</strong>
                    </div>
                    <div class="value-button" id="medium-size_${cartItem._id}" name="medium-size" onclick="getMedium(this, ${cartItem.mediumPrice}, '${cartItem._id}')" 
                    style="background: ${mediumBackgroundColor};">
                      <strong style="color: ${mediumColor};">M</strong>
                    </div>
                    <div class="value-button" id="large-size_${cartItem._id}" name="large-size" onclick="getLarge(this, ${cartItem.largePrice}, '${cartItem._id}')" 
                    style="background: ${largeBackgroundColor}">
                      <strong style="color: ${largeColor};">L</strong>
                    </div>
                  </div>
                  </br>
                  <br>
                  <div style="position: absolute; bottom: 0;" class="quantity">
                    <div class="value-button" onclick="decrementFunction('${cartItem._id}')">
                      <strong>-</strong>
                    </div>
                    <div class="value-button">
                      <input style="width: 24.02px; height: 24.02px; text-align: center;" type="number" id="amount_${cartItem._id}"
                        value="1" disabled />
                    </div>
                    <div class="value-button" onclick="incrementFunction('${cartItem._id}')">
                      <strong>+</strong>
                    </div>
                  </div>
                </div>
                <br>
                <div class="col">
                  <div class="float-right" onclick="cancelCart('${cartItem._id}')"
                    style="font-size: 20px; cursor:pointer; padding-right: 20px;">&#215</div>
                  </br>
                  </br>
                  </br>
                  <br>
                  <br>
                  <div style="position: absolute; bottom: 0;" class="float-right">
                    <h6 id="price" style="padding-right: 20px; font-size: 20px;">&#2547 <span id="price_${cartItem._id}"> ${price} </span> /-</h6>
                    <input type="hidden" id="selectedOriginalUnitPrice_${cartItem._id}" value="${price}" />
                  </div>
                </div>
              </div>
              <hr style="border-color: #257b9d;">
            </div>`;

    document.getElementById("cartItems").innerHTML += design;

    Subtotal += price;
  });


  document.getElementById("subTotalValue").innerHTML = Subtotal;

  Total = Subtotal + Shipping;

  document.getElementById("totalValue").innerHTML = Total;
}



function incrementFunction(id) {
  var x = $("#amount_" + id).val();
  x = parseInt(x) + 1;
  $("#amount_" + id).val(x);

  let price = parseInt($("#selectedOriginalUnitPrice_" + id).val());

  changePricesValues(id, price);
}
function decrementFunction(id) {
  var x = $("#amount_" + id).val();
  x = parseInt(x);
  if (x > 0) {
    x = x - 1;
  }
  $("#amount_" + id).val(x);

  let price = parseInt($("#selectedOriginalUnitPrice_" + id).val());

  changePricesValues(id, price);
}

function cancelCart(id) {
  cartItems = JSON.parse(localStorage.getItem("cartItems"));

  for (let i = 0; i < cartItems.length; i++) {
    if ((cartItems[i]._id = id)) {
      cartItems.splice(i, 1);
      break;
    }
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  location.reload();
}

function getLarge(element, price, id) {
  if (element.children[0].style.color != "rgb(160, 160, 160)") {
    var mediumButton = document.getElementById("medium-size_" + id);
    var smallButton = document.getElementById("small-size_" + id);

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

    changePricesValues(id, price);
  }
}

function getMedium(element, price, id) {
  if (element.children[0].style.color != "rgb(160, 160, 160)") {
    var largeButton = document.getElementById("large-size_" + id);
    var smallButton = document.getElementById("small-size_" + id);

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

    changePricesValues(id, price);
  }
}
function getSmall(element, price, id) {
  if (element.children[0].style.color != "rgb(160, 160, 160)") {
    var largeButton = document.getElementById("large-size_" + id);
    var mediumButton = document.getElementById("medium-size_" + id);

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

    changePricesValues(id, price);
  }
}

function changePricesValues(id, price) {

  $("#selectedOriginalUnitPrice_" + id).val(price);

  let quantity = parseInt($('#amount_' + id).val());
  let previousPrice = parseInt($('#price_' + id).text());

  console.log(quantity + ' ' + previousPrice);

  price = quantity * parseInt(price);

  let Subtotal = parseInt($('#subTotalValue').text()) - previousPrice;
  Subtotal += price;

  let Total = Subtotal + Shipping;

  document.getElementById("subTotalValue").innerHTML = Subtotal;

  document.getElementById("totalValue").innerHTML = Total;

  document.getElementById("price_" + id).innerHTML = price;
}