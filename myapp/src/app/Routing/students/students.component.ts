import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-students',
  template: `
      <h2>Student<h2><br>
      <button (click)="showDetails()">StudentsDetails</button>
     <button (click)="showMarks()">StudentMarks</button>
     <router-outlet></router-outlet>
  `,
  styles: []
})
export class StudentsComponent {

  constructor(private router : Router,private route : ActivatedRoute){

  }
  showDetails(){
    this.router.navigate(['details'],{relativeTo : this.route});
  }

  showMarks(){
    this.router.navigate(['marks'],{relativeTo : this.route});
  }
}
