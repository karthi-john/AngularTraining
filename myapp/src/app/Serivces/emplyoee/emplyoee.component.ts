import { Component } from '@angular/core';
import { EmplyoeeService } from './emplyoee.service';

@Component({
  selector: 'app-emplyoee',
  templateUrl: './emplyoee.component.html',
  styleUrls: ['./emplyoee.component.css']
})
export class EmplyoeeComponent {
  emplyoees : any = [];
  errorMsg: any;
  status : any = '';

  constructor(private emplyoeeService : EmplyoeeService){
    this.emplyoees = emplyoeeService.getEmplyoees()
        .subscribe(next => this.emplyoees = next,
                   error => this.errorMsg = error);
  }
}
