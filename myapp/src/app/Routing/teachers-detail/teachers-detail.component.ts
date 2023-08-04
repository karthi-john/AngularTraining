import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teachers-detail',
  template: `
  <div>
    <p>
      TeacherID.{{teacherId}}
    </p>
    <button (click)="goPrevious()">Previous</button><br><br>
    <button (click) ="goNext()">Next</button><br><br>
    <button (click)="goBack()">Back</button>
  </div>
  `,
  styles: [`
    div{padding : 30px}
  `]
})
export class TeachersDetailComponent implements OnInit{

  public teacherId : number = 0;
  constructor(private route : ActivatedRoute, private router : Router){

  }

  ngOnInit(): void {

    // let id = this.route.snapshot.paramMap.get('id');
    // if(id !== null)
    //   this.teacherId = parseInt(id);

    this.route.params.subscribe((params)=> {
        let id = parseInt(params['id']);
        this.teacherId = id;
      });


  }

  goPrevious(){
    let previousID = this.teacherId - 1;
    // this.router.navigate(['/teachers',previousID]);
    this.router.navigate(['../',previousID],{relativeTo : this.route});
  }

  goNext(){
    let nextID = this.teacherId + 1;
    // this.router.navigate(['/teachers',nextID]);
    this.router.navigate(['../',nextID],{relativeTo : this.route});
  }

  goBack(){
    // this.router.navigate(['/teachers',{id : this.teacherId}]);
    this.router.navigate(['../',{id : this.teacherId}],{relativeTo : this.route});
  }
}
