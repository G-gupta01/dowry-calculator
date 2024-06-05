document.getElementById("btn").addEventListener("click", function () {
  const age = document.getElementById("age").value;
  const salary = document.getElementById("salary").value;
  const netWorth = document.getElementById("netWorth").value;

  const imageUrl = 'meme.jpg'; // Replace with the URL of the image you want to display
  const popupImage = document.getElementById('popupImage');
  popupImage.src = imageUrl;
  document.getElementById('popup').style.display = 'block';
});

// Close the popup when the user clicks on the close button
document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});

// Close the popup when the user clicks anywhere outside of the popup
window.addEventListener("click", function (event) {
  if (event.target === document.getElementById("popup")) {
    document.getElementById("popup").style.display = "none";
  }
});
