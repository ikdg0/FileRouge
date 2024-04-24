import { Component, OnDestroy, OnInit, input, output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  time: Date = new Date();

  private timerId: any;

  ngOnInit(): void {
    this.timerId = setInterval(() => {
      // Ajouter une seconde à l'heure actuelle
      this.time = new Date(this.time.getTime() + 1000);
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  addThirtyMinutes(): void {
    const minutes = 30;
    const newTime = new Date(this.time.getTime() + minutes * 60000);
    this.time = newTime;
  }

}
