import { Component } from '@angular/core';
import { Course, CourseCartComponent } from "../../course-cart/course-cart.component";
import { CoursesService } from '../../courses.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
  imports: [CourseCartComponent, NgFor, RouterLink]
})
export class WelcomeComponent {

  courses: Course[];
  constructor(private coursesService: CoursesService) {
    this.courses = this.coursesService.getAllCourses(); // ✅ funksiya chaqirilmoqda

  }
}
