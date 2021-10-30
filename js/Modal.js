
function modal_func_PRODUCTS(){
    var modal = document.getElementById("productsModal");

    modal.style.display = "block";
    
    // Get the button that opens the modal
    // var btn = document.getElementById("myBtn");
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks the button, open the modal 
    // btn.onclick = function() {
      
    // }
    
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

    modal.style.display = "block";
    
    // Get the button that opens the modal
    // var btn = document.getElementById("account");
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("closed")[0];
    
    // When the user clicks the button, open the modal 
    // btn.onclick = function() {
      
    // }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        console.log('account modal closed');
        // modal_func_ACCOUNT_SETTINGS();
      }
    }
   
  }
  function modal_func_ACCOUNT_SETTINGS(){
    var modal = document.getElementById("accountSettingsModal");

    modal.style.display = "block";
    
    // Get the button that opens the modal
    // var btn = document.getElementById("settingsModal");
    
    //b  Get the <span> element that closes the modal
    var span = document.getElementsByClassName("closes")[0];
    
    // When the user clicks the button, open the modal 
    // btn.onclick = function() {
      
    // }
    
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

  function modal_func_CART(){
    console.log("cart clicked");
    var modal = document.getElementById("cartMODAL");

    modal.style.display = "block";
    
    // Get the button that opens the modal
    // var butn = document.getElementById("CARTmodal");
    
    // //b  Get the <span> element that closes the modal
     var span = document.getElementsByClassName("closes")[1];
    
    // When the user clicks the button, open the modal 
    // butn.onclick = function() {
      
    // }
    
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

  function modal_func_CARTSUBMIT(){
    const URL = "http://127.0.0.1:5500/CheckOut.html";
    document.location.href = URL;
  }