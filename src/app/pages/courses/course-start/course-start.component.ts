import { Component, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-course-start',
  imports: [],
  standalone: true,
  templateUrl: './course-start.component.html',
  styleUrl: './course-start.component.css'
})
export class CourseStartComponent {
  private $santizier = inject(DomSanitizer)
  activeVideo = signal<SafeResourceUrl>('');
  mockData = [
    'https://www.youtube.com/embed/HYr3j8Emy4s?si=U6MHVV8uQRuIAisQ',
    'https://www.youtube.com/embed/O2x0NjQUvdg?si=7tlvFHk0qBgO7LSc',
    'https://www.youtube.com/embed/HYr3j8Emy4s?si=U6MHVV8uQRuIAisQ',
    'https://www.youtube.com/embed/HYr3j8Emy4s?si=U6MHVV8uQRuIAisQ',
    'https://www.youtube.com/embed/HYr3j8Emy4s?si=U6MHVV8uQRuIAisQ',
    'https://www.youtube.com/embed/HYr3j8Emy4s?si=U6MHVV8uQRuIAisQ',
    'https://www.youtube.com/embed/HYr3j8Emy4s?si=U6MHVV8uQRuIAisQ',
    'https://www.youtube.com/embed/HYr3j8Emy4s?si=U6MHVV8uQRuIAisQ',
    'https://www.youtube.com/embed/HYr3j8Emy4s?si=U6MHVV8uQRuIAisQ',
    
    'https://www.youtube.com/embed/O2x0NjQUvdg?si=7tlvFHk0qBgO7LSc',
    'https://www.youtube.com/embed/HYr3j8Emy4s?si=U6MHVV8uQRuIAisQ',
    'https://www.youtube.com/embed/HYr3j8Emy4s?si=U6MHVV8uQRuIAisQ',
    'https://www.youtube.com/embed/HYr3j8Emy4s?si=U6MHVV8uQRuIAisQ',
    'https://www.youtube.com/embed/HYr3j8Emy4s?si=U6MHVV8uQRuIAisQ',
    'https://www.youtube.com/embed/HYr3j8Emy4s?si=U6MHVV8uQRuIAisQ',
    'https://www.youtube.com/embed/HYr3j8Emy4s?si=U6MHVV8uQRuIAisQ',
    'https://www.youtube.com/embed/HYr3j8Emy4s?si=U6MHVV8uQRuIAisQ',
    
    'https://www.youtube.com/embed/O2x0NjQUvdg?si=7tlvFHk0qBgO7LSc',
    'https://www.youtube.com/embed/HYr3j8Emy4s?si=U6MHVV8uQRuIAisQ',
    'https://www.youtube.com/embed/HYr3j8Emy4s?si=U6MHVV8uQRuIAisQ',
    'https://www.youtube.com/embed/HYr3j8Emy4s?si=U6MHVV8uQRuIAisQ',
    'https://www.youtube.com/embed/HYr3j8Emy4s?si=U6MHVV8uQRuIAisQ',
    'https://www.youtube.com/embed/HYr3j8Emy4s?si=U6MHVV8uQRuIAisQ',
    'https://www.youtube.com/embed/HYr3j8Emy4s?si=U6MHVV8uQRuIAisQ',
    'https://www.youtube.com/embed/HYr3j8Emy4s?si=U6MHVV8uQRuIAisQ',
  ]
  openVideo(video: string) {
    this.activeVideo.set(this.$santizier.bypassSecurityTrustResourceUrl(video));
  }

}
