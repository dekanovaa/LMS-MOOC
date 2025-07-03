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
    
    {
      title: 'Angular haqida boshlang\'ich tushunchalar',
      url: 'https://www.youtube.com/embed/MPduddgZqQs?si=rZT9GbUSbh_xrP0N'
    },
        
    {
      title: 'Angular | Service tushunchasi, Event binding ',
      url: 'https://www.youtube.com/embed/BmbfeYhlSxo?si=IZ1tvKbyF0pV1Ira'
    },
    {
      title: 'Angular | Service tushunchasi, Routing ',
      url: 'https://www.youtube.com/embed/BdMAdgvKE6E?si=WbFDFLwCMdzqMSJe'
    },
    {
      title: 'Angular forms, Json server, Fetch, Git va GitHub ',
      url: 'https://www.youtube.com/embed/JCeJVsKyxH8?si=7qJtUVUXvAe4bkMP'
    },
    {
      title: 'Angular Routing: redirectTo & wildCard, VSCode extentions for Angular',
      url: 'https://www.youtube.com/embed/JCeJVsKyxH8?si=7qJtUVUXvAe4bkMP'
    },
    {
      title: 'Eager loading vs Lazy loading ',
      url: 'https://www.youtube.com/embed/hypS5kG_g9g?si=NwAGPtuINDbFVJ-v'
    },
    {
      title: 'Ng Zorro UI kutubxonasi va Swagger tushunchasi ',
      url: 'https://www.youtube.com/embed/8TxAlvQP1CE?si=VmrEbosVaM5fmbiF'
    },
    {
      title: 'CRUD (HttpClient orqali get request)',
      url: 'https://www.youtube.com/embed/zdeKBICn_6M?si=s87g9FzFE9rAaUB9'
    },
   
  ]
  openVideo(videoUrl: string) {
    this.activeVideo.set(this.$santizier.bypassSecurityTrustResourceUrl(videoUrl));
  }

}
