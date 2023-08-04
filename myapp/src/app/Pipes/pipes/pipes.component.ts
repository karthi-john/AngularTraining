import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: []
})
export class PipesComponent {
  title = 'my-first-app';
  todaydate = new Date();
  jsonval = {name: 'Alex', age: '25', address:{a1: 'Paris', a2: 'France'}};
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',
    'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
}
