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
  result: boolean | null = null;

  isPalindrome() {
  const prepText = this.inputText.toLowerCase().replace(/[^a-zа-яё]/g, '');
    console.log(prepText)
    console.log({prepText})

    this.result = prepText === prepText.split('').reverse().join('');
    console.log({result: this.result})
  }
}

