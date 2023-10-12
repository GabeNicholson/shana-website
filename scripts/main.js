
modal = document.getElementById("myModal")
img = document.getElementById("image1")
span = document.getElementsByClassName("close")[0]
realImage = document.getElementById("realImage")
const imageContainer = document.getElementById("image-container")
const numImages = 6

for (let i = 1; i <= numImages; i++) {
  const imgElement = document.createElement('img');
  imgElement.id = `image${i}`
  imgElement.src = "images/question_mark.avif"
  imgElement.className = "question-mark-image"
  imgElement.alt = ''
  imageContainer.appendChild(imgElement)
  imgElement.addEventListener('click', function() {
    modal.style.display = "block"
    realImage.src = `images/${i}.png`
    realImage.className = "real-image"
  })
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