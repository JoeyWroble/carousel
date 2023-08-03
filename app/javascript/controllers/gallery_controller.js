import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="gallery"
export default class extends Controller {
  connect() {
    this.checkImgUrls();
  }

  static targets = ["gallery"];

expandCar(event) {
    const imgs = event.currentTarget;
    const expandImg = document.getElementById("expandedImg");

    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
  }

expandMod(event) {
  const img = event.currentTarget;
  const modalExpandImg = document.getElementById("modalExpandImg");

  modalExpandImg.src = img.src;
}

checkImgUrls() {
  const imgBtns = document.querySelectorAll(".column img");
  imgBtns.forEach((img) => {
    const imgElement = img;
    const imageObj = new Image();
    imageObj.onload = function () {
      if (imageObj.naturalWidth == 0 && imageObj.naturalHeight == 0) {
        imgElement.parentElement.style.display = "none";
      }
    };
    imageObj.onerror = function () {
      imgElement.parentElement.style.display = "none";
    };
    imageObj.src = img.src;
  });
};
}
