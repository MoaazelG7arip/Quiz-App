import { Component, inject } from '@angular/core';
import { StudentService } from '../services/student.service';
import { StaffService } from '../services/staff.service';

@Component({
  selector: 'app-user-information',
  standalone: true,
  imports: [],
  templateUrl: './user-information.component.html',
  styleUrl: './user-information.component.css'
})
export class UserInformationComponent {
  
  studentService = inject(StudentService);
  staffService = inject(StaffService);
  student;
  teacher;

  ngOnInit(): void {
    if(JSON.parse(window.localStorage.getItem('studentlogged'))){
      this.student = JSON.parse(window.localStorage.getItem('studentinfo'));
    }
    if(JSON.parse(window.localStorage.getItem('teacherlogged'))){
      this.teacher = JSON.parse(window.localStorage.getItem('teacherinfo'));
    }
    
  }
}
