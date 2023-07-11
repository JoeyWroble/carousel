function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    var closeBtn = document.getElementById("closeBtn"); // Add this line to get the close button element
    
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
    
    closeBtn.style.display = "block"; // Show the close button
  }
  
  function closeExpandedImage() {
    var expandImg = document.getElementById("expandedImg");
    var closeBtn = document.getElementById("closeBtn");
    
    expandImg.src = "";
    expandImg.parentElement.style.display = "none";
    
    closeBtn.style.display = "none"; // Hide the close button
  }
  