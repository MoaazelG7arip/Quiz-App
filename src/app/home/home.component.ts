import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { StudentService } from '../services/student.service';
import { StaffService } from '../services/staff.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  router = inject(Router);
  studentService = inject(StudentService);
  staffService = inject(StaffService);

  goExam(){
    if(JSON.parse(window.localStorage.getItem('studentlogged'))){
      this.router.navigate(['/exam']);
    }else{
      const confirmation = confirm('you are not logged in as Student, please login');
      if(confirmation){
        this.router.navigate(['/login']);
      }
    }
  }
  addExam(){
    if(JSON.parse(window.localStorage.getItem('teacherlogged'))){
      this.router.navigate(['/addexam']);
    } else {
      const confirmation = confirm('you are not logged in as Teacher, please login');
      if(confirmation){
        this.router.navigate(['/login']);
      }
    }
  }
}
