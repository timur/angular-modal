import { Component } from '@angular/core';

import { WindowService } from './window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  private windowScrolling: WindowService;

  title = 'angular-modal';

  showModal: Boolean = false;

  constructor(windowScrolling: WindowService) {
    this.windowScrolling = windowScrolling;
  }

  openModal(): void {
    this.windowScrolling.disable();
    this.showModal = !this.showModal;
  }
}
