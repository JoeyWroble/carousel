import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = [
    "form", "dialog"
  ];

  connect() {
    // The class we should toggle on the container
    this.toggleClass = this.data.get('class') || 'hidden';

  }

  disconnect() {
    this.close();
  }

  open( e ) {

    this.dialogTarget.showModal();

    this.formTarget.addEventListener( 'submit', event => {
      this.close();
    })

  }

  close( e ) {
    this.dialogTarget.close();
  }

  click( e ) {

    if( e.target === this.dialogTarget ) {
      this.close(e);
    }

  }
  

}
