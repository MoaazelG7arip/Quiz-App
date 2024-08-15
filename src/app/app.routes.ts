import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ExamComponent } from './exam/exam.component';
import { AddExamComponent } from './add-exam/add-exam.component';
import { canActivateStudent, canActivateTeacher, canActivateStudentChild, canActivateTeacherChild } from './auth.guard';
import { AddQuestionComponent } from './add-exam/add-question/add-question.component';
import { ViewComponent } from './view/view.component';
import { UserInformationComponent } from './user-information/user-information.component';

export const routes: Routes = [
    {path: '', redirectTo:'home',pathMatch: 'full'},
    {path: 'home',component: HomeComponent},
    {path: 'login',component: LoginComponent, canDeactivate:[(comp:LoginComponent)=>comp.canExit()]},
    {path: 'register',component:RegisterComponent,  canDeactivate:[(comp:RegisterComponent)=>comp.canExit()]},
    {path: 'exam',component: ExamComponent, canActivate: [canActivateStudent]},
    {path: 'exam', children:[
        {path: 'view', component: ViewComponent}
    ]},
    {path: 'addexam',component: AddExamComponent, canActivate: [canActivateTeacher]},
    {path: 'addexam', canActivateChild: [canActivateTeacherChild], children:[
        {path: 'addquestion', component: AddQuestionComponent}
    ]},
    {path: 'userinformation', component: UserInformationComponent},
    {path: '**', component: NotFoundComponent}
];
