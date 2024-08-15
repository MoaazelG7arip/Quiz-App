import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { QuizService } from '../../services/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-question',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-question.component.html',
  styleUrl: './add-question.component.css'
})
export class AddQuestionComponent {

  @ViewChild('questionForm') questionForm: NgForm;
  quizService = inject(QuizService);
  router = inject(Router);

  addQuestion(){
    this.quizService.addQuestion(this.questionForm.value);
    this.router.navigate(['/addexam'])
  }
}
