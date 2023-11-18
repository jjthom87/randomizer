// Get the modal
var modal = document.getElementById("set-randomized-list-title-modal");

// Get the <span> element that closes the modal
var span = document.getElementById("close-set-randomized-list-title-modal");

document.querySelector("body").addEventListener("click", function(e){ 
    switch(e.target.id){
      case "save-randomized-list-button":
        modal.style.display = "block";
        break;
      case "save-randomized-list-title":
        modal.style.display = "none";
        break;
    }
})

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