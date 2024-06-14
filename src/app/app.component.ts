
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
  const prepText = this.inputText.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');
    console.log(prepText)
    console.log({prepText})
    console.time('isPalindrome');

    this.result = prepText === prepText.split('').reverse().join('');
    console.log({result: this.result});
    console.timeEnd('isPalindrome');
  }

  isPalindrome2() {
    const prepText2 = this.inputText2.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');
      console.log(prepText2)
      console.log({prepText2})
      console.time('isPalindrome2');

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
        console.timeEnd('isPalindrome2');

      }



  graph: { [key: string]: string[] } = {
  a: ['b', 'c'],
  b: ['f'],
  c: ['d', 'e'],
  d: ['f'],
  e: ['f'],
  f: ['g']
    };

    fromCity: string = '';
    toCity: string = '';
    pathFound: boolean | null = null;
    error: string | null = null;
    


breadthSearch(graph: {[key: string]: string[]}, start:string, end:string): boolean {
  let queue = []
  queue.push(start);

  while (queue.length > 0) {
    const current = queue.shift() // берет начало из очереди
    console.log(`Checking city: ${current}`); // Лог текущего города

    if (current && graph[current]?.includes(end)) {
      console.log(`Path found from ${start} to ${end}`)
      return true
    } else if(current) {
      queue = [...queue, ...graph[current] || []]
    }
  }
  console.log(`No path found from ${start} to ${end}`)
  console.log({fromCity:this.fromCity} ,{toCity:this.toCity})

  return false
}

// console.log(breadthSearch(graph, start: 'a', end: 'e'))

findPath(from: string, to: string) {

  this.error = null;
  this.pathFound = this.breadthSearch(this.graph, from, to);

  if (this.pathFound) {
    this.error = null;
  } else {
    this.error = 'No way'
  }
  console.log(`Path found: ${this.pathFound}`);
}
    }




