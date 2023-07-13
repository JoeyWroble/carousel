function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    var closeBtn = document.getElementById("closeBtn");
    
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

//popup window code

document.addEventListener('DOMContentLoaded', function() {
  const showMoreBtn = document.getElementById('showMoreBtn');
  

  showMoreBtn.addEventListener('click', function() {
    const images = this.dataset.images.split(',');
    
    const popupWindow = window.open('', '_blank', 'width=800,height=600,top=100,left=100');
    popupWindow.document.write('<div style="display: flex; flex-wrap: wrap;">');

    images.forEach(function(imageUrl) {
      popupWindow.document.write(`<div style="flex: 0 0 25%; padding: 5px;">`);
      popupWindow.document.write(`<img src="${imageUrl}" style="width: 100%; height: auto;">`);
      popupWindow.document.write(`</div>`);
      
    });

    popupWindow.document.write('</div>');
    popupWindow.document.close();
  });
});

  
  
  
  
  

  