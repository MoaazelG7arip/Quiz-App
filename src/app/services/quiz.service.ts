import { inject, Injectable } from '@angular/core';
import { Quiz } from '../models/quiz';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quiz:Quiz[];
  quizSubmitted:boolean;
  score:number = 0;
  router = inject(Router);
  examFinished:boolean = false;

  constructor() {
    this.getData()
  }

  
  addQuestion(question:Quiz){
    question.id = (this.getQuiz().length + 1);
    this.quiz.push(question);
    window.localStorage.setItem('quiz',JSON.stringify(this.quiz));
    this.getData()
  }

  getQuiz(){
    return this.quiz;
  }

  getData(){
    if(window.localStorage.getItem('quiz')){
      this.quiz = JSON.parse(window.localStorage.getItem('quiz'));
    } else {
      this.quiz = [];
    }
    if(window.localStorage.getItem('quizsubmitted')){
      this.quizSubmitted = JSON.parse(window.localStorage.getItem('quizsubmitted'));
    } else {
      this.quizSubmitted = false;
    }
    if(window.localStorage.getItem('score')){
      this.score = JSON.parse(window.localStorage.getItem('score'))
    }
  }

  getScore(quizAnswered:any){
    this.score = 0;
    const quizAns = Object.entries(quizAnswered);
    for(let i=0; i< this.quiz.length; i++){
      for(let j=0; j< quizAns.length; j++){
        
        if(+quizAns[j][0] == this.quiz[i]['id']){
          if(quizAns[j][1] == this.quiz[i]['answer']){
            this.score++;
          }
        }
      }
    }
    window.localStorage.setItem('score',JSON.stringify(this.score));
    this.examFinished = true;
    this.router.navigate(['/exam/view']);
  }

  removeQuestion(question:Quiz){
    let confirmation = confirm('Are You Sure You Want To Remove This Question ?');
    if(confirmation){
      this.quiz.splice(this.quiz.indexOf(question),1);
      window.localStorage.setItem('quiz',JSON.stringify(this.quiz));
      this.getData()
    }
  }

  updateQuestion(){
    window.localStorage.setItem('quiz',JSON.stringify(this.quiz));
    this.getData()
  }
}
