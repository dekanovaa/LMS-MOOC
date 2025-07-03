import { CommonModule, isPlatformBrowser, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { interval, map, Observable, of, startWith, Subscription, takeWhile } from 'rxjs';

@Component({
  selector: 'app-test-navigation',
  imports: [NgFor, NgIf,CommonModule],
  templateUrl: './test-navigation.component.html',
  styleUrl: './test-navigation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestNavigationComponent implements OnDestroy{
  private timerSubscription!:Subscription;
    
  timeLeft$: Observable<{ hours: string; minutes: string; seconds: string }> = of({hours: '00', minutes: '00', seconds: '00'});


  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit() { 
    if (isPlatformBrowser(this.platformId)) {
      // Only start timer if in browser
      this.timeLeft$ = this.startCountdown(30 * 60);
      this.timerSubscription = this.timeLeft$.subscribe();
    } 
  }


  startCountdown(totalSeconds: number): Observable<{ hours: string; minutes: string; seconds: string }>  {
    return interval(1000).pipe(
      map((elapsed) => totalSeconds - elapsed), // Sekundlarni kamaytirish
      takeWhile((seconds) => seconds >= 0), // 0 ga yetganda to‘xtash
      map((seconds) => this.formatTime(seconds)), // Formatga o‘tkazish
      startWith(this.formatTime(totalSeconds)) // Boshlang‘ich qiymat
    );
  }

  formatTime(totalSeconds: number) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { hours: this.pad(hours), minutes: this.pad(minutes), seconds: this.pad(seconds) };
  }

  pad(value: number) {
    return value.toString().padStart(2, '0'); // 1 -> "01"
  }

  

  ngOnDestroy() {
    console.log("NgOnDestroy");
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe(); // Unsubscribe to prevent memory leaks
    }
  }

}
