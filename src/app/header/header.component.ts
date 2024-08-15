import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { StudentService } from '../services/student.service';
import { StaffService } from '../services/staff.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  studentService = inject(StudentService);
  staffService = inject(StaffService);
  router = inject(Router);
  studentLogged;
  teacherLogged;

  ngOnInit(): void {
    this.studentService.studentLogged.subscribe((data)=>{
      this.studentLogged = data;
    })
    this.staffService.teacherLogged.subscribe((data)=>{
      this.teacherLogged = data;
    })

  }
  logOut(){
    const confirmation = confirm('Are you sure you want to log out');
    if(confirmation){
      this.studentLogged = false;
      this.teacherLogged = false;
      window.localStorage.setItem('studentlogged',JSON.stringify(this.studentLogged));
      window.localStorage.setItem('teacherlogged',JSON.stringify(this.teacherLogged));
      this.router.navigate(['/']);
      alert('Logged Out Successfully');
    }
  }

}
