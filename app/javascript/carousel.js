function myFunction(imgs) {
    var expandImg2 = document.getElementById("expandedImg2");
    var imgText2 = document.getElementById("imgtext2");
    
    expandImg2.src = imgs.src;
    imgText2.innerHTML = imgs.alt;
    expandImg2.parentElement.style.display = "block";
    
  }
  
  function closeExpandedImage2() {
    var expandImg2 = document.getElementById("expandedImg2");
    
    expandImg2.src = "";
    expandImg2.parentElement.style.display = "none";
    
  }
  
  
  
  
  

  