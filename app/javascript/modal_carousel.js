function myFunction2(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    var closeBtn = document.getElementById("closeBtn");
    
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
    
    closeBtn.style.display = "block";
  }
  
  function closeExpandedImage() {
    var expandImg = document.getElementById("expandedImg");
    var closeBtn = document.getElementById("closeBtn");
    
    expandImg.src = "";
    expandImg.parentElement.style.display = "none";
    
    closeBtn.style.display = "none";
  }
  
  
  
  
  

  