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
  inputText2: string = '';
  result2: boolean | null = null;

  isPalindrome() {
  const prepText = this.inputText.toLowerCase().replace(/[^a-zа-яё]/g, '');
    console.log(prepText)
    console.log({prepText})

    this.result = prepText === prepText.split('').reverse().join('');
    console.log({result: this.result})
  }

  isPalindrome2() {
    const prepText2 = this.inputText2.toLowerCase().replace(/[^a-zа-яё]/g, '');
      console.log(prepText2)
      console.log({prepText2})

      let left = 0;
      let right = prepText2.length -1;

      while(left < right) {
        if (prepText2[left] !== prepText2[right]) {
          this.result2 = false;
          return;
        }
        left++;
        right--;
      }

        this.result2 = true;
        console.log(prepText2);
        console.log({ result2: this.result2 });
      }
      
    }




