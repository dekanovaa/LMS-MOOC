import { Component } from '@angular/core';

@Component({
  selector: 'app-course-module',
  imports: [],
  templateUrl: './course-module.component.html',
  styleUrl: './course-module.component.css'
})
export class CourseModuleComponent {
  Module = false;
  openModule() {
    this.Module = !this.Module;
    console.log("funksiya ishladi");
    
  }

}
