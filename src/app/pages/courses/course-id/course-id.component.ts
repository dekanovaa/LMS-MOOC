import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CoursesService } from '../../../courses.service';
import { NgIf } from '@angular/common';
import { CourseModuleComponent } from "../../../course-module/course-module.component";
export interface Course {
  id: number;
  img: string;
  title: string;
}

@Component({
  selector: 'app-course-id',
  imports: [NgIf, CourseModuleComponent],
  standalone: true,
  templateUrl: './course-id.component.html',
  styleUrl: './course-id.component.css'
})
export class CourseIdComponent implements OnInit  {
  @Input() courses!: Course;
  course?: Course;

  constructor(private route: ActivatedRoute, private coursesService: CoursesService, private router: Router) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.course = this.coursesService.getCourseById(id);
  }

  gotoStart() {
    this.router.navigate(['/start']);
  }

 

}
