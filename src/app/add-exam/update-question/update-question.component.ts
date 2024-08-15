import { Component, inject, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { QuizService } from '../../services/quiz.service';
import { Router } from '@angular/router';
import { Quiz } from '../../models/quiz';

@Component({
  selector: 'app-update-question',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-question.component.html',
  styleUrl: './update-question.component.css'
})
export class UpdateQuestionComponent {
  @ViewChild('updateForm') updateForm: NgForm;
  quizService = inject(QuizService);
  router = inject(Router);

  @Input() theFullQuestion:Quiz;
  @Output() onDataUpdated : EventEmitter<boolean> = new EventEmitter()

  updateQuestion(){
    this.quizService.updateQuestion()
    this.onDataUpdated.emit(false)
  }
}
