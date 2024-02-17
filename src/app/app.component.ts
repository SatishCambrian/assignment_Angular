import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /**
    * Header title for the application.
    */
  //  One way binding 
  headerTitle: string = 'Satish Awal';

  /**
   * Content text for the application.
   */
  contentText: string = '';

  /**
   * Event handler for when text is submitted.
   */
  onTextSubmitted(text: string) {
    this.contentText = text;
  }
}
