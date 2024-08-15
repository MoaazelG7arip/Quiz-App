import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { QuizService } from '../services/quiz.service';
import { Quiz } from '../models/quiz';
import { RouterLink } from '@angular/router';
import { JsonPipe, NgClass } from '@angular/common';
import { UpdateQuestionComponent } from './update-question/update-question.component';

@Component({
  selector: 'app-add-exam',
  standalone: true,
  imports: [RouterLink, NgClass,FormsModule,UpdateQuestionComponent],
  templateUrl: './add-exam.component.html',
  styleUrl: './add-exam.component.css'
})
export class AddExamComponent {

  quizService = inject(QuizService);
  fullExam: Quiz [];
  examSubmitted:boolean = false;
  questionUpdating:boolean = false;
  idUpdated:number;
  theFullQuestion;
  ngOnInit(): void {
    this.fullExam = this.quizService.getQuiz();
    this.examSubmitted = JSON.parse(window.localStorage.getItem('quizsubmitted'));
  }
  submitExam(){
    this.examSubmitted = true;
    window.localStorage.setItem('quizsubmitted', 'true')
    this.quizService.getData();
  }
  unsubmitExam(){
    this.examSubmitted = false;
    window.localStorage.setItem('quizsubmitted', 'false')
    this.quizService.getData();
  }
  removeQuestion(question: Quiz){
    this.quizService.removeQuestion(question);
    this.fullExam = this.quizService.getQuiz();
  }
  updateQuestion(question:Quiz){
    this.questionUpdating = true;
    this.idUpdated = question.id;
    this.theFullQuestion = question;
  }
  updateValue(value){
    this.questionUpdating = value;
    this.fullExam = this.quizService.getQuiz()
  }

}
