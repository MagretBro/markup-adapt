// import {MatInputModule} from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { FormsModule } from '@angular/forms';

import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  inputText: string = '';
  isPalindrome() {
    const prepText = this.inputText.toLowerCase().replace(/[^a-z]/g, '');
    console.log(prepText)
    console.log({prepText})
  }

}

