import { Component,Input,Output,EventEmitter } from '@angular/core';

/**
 * Component for the header of the application.
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() title: string = '';

  /**
   * Event emitter for the text input in the header.
   */
  @Output() textEmitter = new EventEmitter<string>();

  /**
   * The text input in the header.
   */
  inputText: string = '';

  /**
   * Emits the text input in the header as an event.
   */
  emitText() {
    this.textEmitter.emit(this.inputText);
    this.inputText = ''; // Clear input after emitting
  }
}
