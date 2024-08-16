import { inject, Injectable } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  student:User[];
  studentLogged = new BehaviorSubject(false);
  router = inject(Router);

  constructor(){
    if(window.localStorage.getItem('student')){
      this.student = JSON.parse(window.localStorage.getItem('student'));
    } else {
      this.student = [];
    }
    if(window.localStorage.getItem('studentlogged')){
      this.studentLogged.next(JSON.parse(window.localStorage.getItem('studentlogged')));
    }
  }

  addStudent(role:string,username:string,email:string,password:string,country:string,city:string){
    this.student.push(new User(role,username,email,password,country,city))
    window.localStorage.setItem('student',JSON.stringify(this.student));
    this.studentLogged.next(true);
    window.localStorage.setItem('studentlogged',JSON.stringify(true));
    window.localStorage.setItem('studentinfo',JSON.stringify(new User(role,username,email,password,country,city)))
  }
  checkStudent(username:string,password:string){
    const getStd = this.student.find((ele)=>{
      return ele.username === username && ele.password === password;
    })
    if(getStd){
      this.studentLogged.next(true);
      window.localStorage.setItem('studentlogged',JSON.stringify(true));
      alert(`Welcome  ${username} You Are Logged in`);
      window.localStorage.setItem('studentinfo',JSON.stringify(getStd))
      this.router.navigate(['/exam'])
    }else{
      alert('the password or username is incorrect')
    }
  }
}
