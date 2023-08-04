import { Component, OnChanges, OnInit } from '@angular/core';
import { User } from './user';
import { Address } from './address';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  isTopicValid = false;
  address : Address = new Address('jones','chennai');
  userModel : User= new User('javith','javi@mail.com',this.address,8056438940,'default','evening',true);
  successMessage : string = '';
  constructor(private enrollmentService : EnrollmentService){}
  validateTopic(value: string){
    if(value === 'default')
      this.isTopicValid = false;
    else
      this.isTopicValid = true;
  }

  OnSubmit(){
    this.enrollmentService.enroll(this.userModel)
      .subscribe(next => alert(next.message),
                 error => alert(error.message));
  }

}
