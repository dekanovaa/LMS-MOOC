import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { CourseListComponent } from './pages/courses/course-list/course-list.component';
import { CourseStartComponent } from './pages/courses/course-start/course-start.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseIdComponent } from './pages/courses/course-id/course-id.component';
import { CodesComponent } from './pages/codes/codes.component';
import { CinemaComponent } from './pages/cinema/cinema.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'sign-in', component: SignInComponent },
  {
    path: 'codes',
    component: CodesComponent,
  },
  {
    path: 'cinema',
    component: CinemaComponent

  },
  {
    path: 'courses',
    component: CoursesComponent,
    children: [
      { path: '', component: CourseListComponent },
      { path: 'start', component: CourseStartComponent },
      { path: ':id', component: CourseIdComponent },
    ],
  },
];
