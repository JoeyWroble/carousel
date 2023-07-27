import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="gallery"
export default class extends Controller {
  connect() {
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
}
