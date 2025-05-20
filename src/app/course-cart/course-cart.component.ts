import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
export interface Course {
  id: number;
  img: string;
  title: string;
}

@Component({
  selector: 'app-course-cart',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './course-cart.component.html',
  styleUrl: './course-cart.component.css'
})
export class CourseCartComponent{
  @Input() course!: Course;

  constructor(private router: Router) {}

  goToCourse() {
    this.router.navigate(['/courses', this.course.id]);
  }
 

}
