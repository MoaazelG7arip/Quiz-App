import { Component, inject } from '@angular/core';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  
  quizService = inject(QuizService);
  score:number;
  ngOnInit(): void {
    this.score = this.quizService.score;
    
  }

}
