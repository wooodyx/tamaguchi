import { Component } from '@angular/core';
import { TamaComponentBaseClass } from '../../../class/component-base.class';

@Component({
  selector: 'tama-welcome-modal',
  templateUrl: './welcome-modal.component.html',
  styleUrls: ['./welcome-modal.component.scss']
})
export class TamaWelcomeModalComponent extends TamaComponentBaseClass {

  public showModal: boolean = true;

  constructor() {
    super();
  }

  init() {
    this.showModal = !(localStorage.getItem('TamaWelcomeModal') === "true");
  }

  public close() {
    localStorage.setItem('TamaWelcomeModal', 'true');
    this.showModal = false;
  }
}
