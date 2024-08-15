import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { StaffService } from '../services/staff.service';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @ViewChild('loginForm') loginForm: NgForm;
  staffService = inject(StaffService);
  studentService = inject(StudentService);
  router = inject(Router);

  checkUser(){
    const val = this.loginForm.value;
    if(this.loginForm.valid){
      if(val.role == 'Teacher'){
        this.staffService.checkTeacher(val.username,val.password);
      } else if(val.role == 'Student'){
        this.studentService.checkStudent(val.username,val.password);
      }
    }
  }

  canExit(){
    if(this.loginForm.dirty && !this.loginForm.submitted){
      const confimation = confirm('Are you sure you want to leave this page?\nyou have unsaved changes');
      return confimation
    } else {
      return true;
    }
  }

}
