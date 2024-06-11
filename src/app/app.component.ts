// import {MatInputModule} from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { FormsModule } from '@angular/forms';

import { NgIf } from '@angular/common';
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

  isPalindrome2() {
    const prepText = this.inputText.toLowerCase().replace(/[^a-zа-яё]/g, '');
      console.log(prepText)
      console.log({prepText})

      let left = 0;
      let right = prepText.length -1;

      while(left < right) {
        if (prepText[left] !== prepText[right]) {
          this.result == false;
          return;
        }
        left++;
        right--;
      }

        this.result = true;
        console.log(prepText);
        console.log({ result: this.result });
      }
      
    }




