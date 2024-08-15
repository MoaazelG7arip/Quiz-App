import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { Quiz } from '../models/quiz';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.css'
})
export class ExamComponent implements OnInit {
  
  quizService = inject(QuizService);
  quiz: Quiz[];
  quizSubmitted:boolean;
  @ViewChild('quizForm') quizForm:NgForm;

  ngOnInit(): void {
    this.quizSubmitted = this.quizService.quizSubmitted;
    if(this.quizService.quizSubmitted){
      this.quiz =this.quizService.getQuiz();
    }
  }

  onSubmitting(){
    this.quizService.getScore(this.quizForm.value)
  }

}
