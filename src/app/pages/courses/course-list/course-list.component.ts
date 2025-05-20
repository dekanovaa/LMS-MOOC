import { Component } from '@angular/core';
import { Course, CourseCartComponent } from '../../../course-cart/course-cart.component';
import { CoursesService } from '../../../courses.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CourseCartComponent, NgFor],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  courses: Course[];
  constructor(private coursesService: CoursesService) {
    this.courses = this.coursesService.getAllCourses(); // ✅ to‘g‘ri

  }

}