import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
   openLiveChat(): void {
    console.log('Opening live chat...');
    
    // Add your live chat logic here
  }
}
