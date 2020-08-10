import { Component, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

import { WindowService } from './../window.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class ModalComponent {

  private windowScrolling: WindowService;

  @Output() closeModal = new EventEmitter();

  constructor(windowScrolling: WindowService) {
    this.windowScrolling = windowScrolling;
  }

  close(): void {
    this.windowScrolling.enable();
    this.closeModal.emit();
  }
}
