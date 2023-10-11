
var modal = document.getElementById("myModal")
var img = document.getElementById("image1")
var span = document.getElementsByClassName("close")

img.onclick = function() {
    modal.style.display = "block"
}

// Close the modal when the 'x' is clicked
span.onclick = function() {
    modal.style.display = "none";
  }

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }