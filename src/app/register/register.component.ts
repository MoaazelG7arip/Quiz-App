import { inject } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule, NgForm } from '@angular/forms';
import { StaffService } from '../services/staff.service';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  @ViewChild('registerForm') regForm: NgForm;
  staffService = inject(StaffService);
  studentService = inject(StudentService);
  router = inject(Router);
  addUser(){
    const val = this.regForm.value;
    if(this.regForm.valid){
      if(val.role == 'Teacher'){

        this.staffService.addTeacher(val.role,val.username,val.emailAddress,val.password,val.country,val.state);
        this.router.navigate(['/addexam']);
      } else if(val.role == 'Student'){
        
        this.studentService.addStudent(val.role,val.username,val.emailAddress,val.password,val.country,val.state);
        this.router.navigate(['/exam']);
      }
    }
  }

  canExit(){
    if(this.regForm.dirty && !this.regForm.submitted){
      const confimation = confirm('Are you sure you want to leave this page?\nyou have unsaved changes');
      return confimation
    } else {
      return true;
    }
  }
}
