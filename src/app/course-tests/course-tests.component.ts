import { Component } from '@angular/core';
import { TestNavigationComponent } from './test-navigation/test-navigation.component';
import { TestContentComponent } from './test-content/test-content.component';

@Component({
  selector: 'app-course-tests',
  standalone:true,
  imports: [TestNavigationComponent, TestContentComponent],
  templateUrl: './course-tests.component.html',
  styleUrl: './course-tests.component.css'
})
export class CourseTestsComponent {

}
