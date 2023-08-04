import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teachers',
  template: `
        <ul>
          <li  (click)="onSelect(teacher)" *ngFor="let teacher of teachers">
            <button [class.selected]="isSelected(teacher)">{{teacher.id}}{{teacher.name}}</button>
          </li>
        </ul>
  `,
  styles: [`
    .selected{background-color : red}
    ul li{ padding : 20px}
  `]
})
export class TeachersComponent implements OnInit{
  public selectedId : number = 0;
  teachers = [
    { 'id' : 1 , name : 'Anto'},
    { 'id' : 2 , name : 'Ramkumar'},
    { 'id' : 3 , name : 'naveen'}
  ]

  constructor(private router : Router, private route : ActivatedRoute){

  }
  ngOnInit() {
    this.route.params.subscribe((params)=> {
      let id = parseInt(params['id']);
      this.selectedId = id;
    });
  }
  onSelect(teacher : any){
    // this.router.navigate(['/teachers',teacher.id]);
    this.router.navigate([teacher.id], { relativeTo : this.route});
  }

  isSelected(teacher : any){
    return teacher.id === this.selectedId;
  }

}
