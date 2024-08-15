import { inject } from "@angular/core"
import { StudentService } from "./services/student.service"
import { StaffService } from "./services/staff.service";
import { QuizService } from "./services/quiz.service";

export const canActivateStudent = ()=>{
    const studentService = inject(StudentService);
    let val:boolean;
    studentService.studentLogged.subscribe((data)=> val = data)
    return val;
}

export const canActivateTeacher = ()=>{
    const teacherService = inject(StaffService);
    let val:boolean;
    teacherService.teacherLogged.subscribe(data=> val = data)
    return val;
}

export const canActivateStudentChild = ()=>{
    return canActivateStudent();
}

export const canActivateTeacherChild = ()=>{
    return canActivateTeacher();
}
