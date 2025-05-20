import { Injectable } from '@angular/core';
import { Course } from './course-cart/course-cart.component';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private courses: Course[] = [
    {
      id: 1,
      img: 'assets/image/phyton.png',
      title: 'Python'
    },
    {
      id: 2,
      img: 'assets/image/js.png',
      title: 'JavaScript'
    },
    {
      id: 3,
      img: 'assets/image/ty.png',
      title: 'TypeScript'
    },
    {
      id: 4,
      img: 'assets/image/react.png',
      title: 'React'
    },
    {
      id: 5,
      img: 'assets/image/angular.png',
      title: 'Angular'
    },
    {
      id: 6,
      img: 'assets/image/english.png',
      title: 'English'
    },
   

  ]
  getCourseById(id: number): Course | undefined {
    return this.courses.find(course => course.id === id);
  }

  // Agar kerak bo‘lsa boshqa metodlar:
  getAllCourses(): Course[] {
    return this.courses;
  }
    
  

  constructor() { }
}
