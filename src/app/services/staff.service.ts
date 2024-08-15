import { inject, Injectable } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StaffService {

  teacher:User[];
  teacherLogged = new BehaviorSubject(false);
  router = inject(Router)

  constructor(){
    if(window.localStorage.getItem('teacher')){
      this.teacher = JSON.parse(window.localStorage.getItem('teacher'));
    } else {
      this.teacher = [];
    }
    if(window.localStorage.getItem('studentlogged')){
      this.teacherLogged.next(JSON.parse(window.localStorage.getItem('teacherlogged')));
    }
  }

  addTeacher(role:string,username:string,email:string,password:string,country:string,city:string){
    this.teacher.push(new User(role,username,email,password,country,city))
    window.localStorage.setItem('teacher',JSON.stringify(this.teacher))
    this.teacherLogged.next(true);
    window.localStorage.setItem('teacherlogged',JSON.stringify(true));  }
  checkTeacher(username:string,password:string){
    const getTech = this.teacher.find((ele)=>{
      return ele.username === username && ele.password === password;
    })
    if(getTech){
      console.log('teacher checked')
      this.teacherLogged.next(true);
      window.localStorage.setItem('teacherlogged',JSON.stringify(true));      
      alert(`Welcome ${username} You Are Logged in`);
      window.localStorage.setItem('teacherinfo',JSON.stringify(getTech))
      this.router.navigate(['/addexam'])
    }else{
      alert('the password or username is incorrect')
    }
  }
}
