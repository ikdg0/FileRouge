import { Component, OnDestroy, OnInit, input, output, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  @Output() timeChanged = new EventEmitter<Date>();
  time: Date = new Date();

  private timerId: any;

  ngOnInit(): void {
    this.timerId = setInterval(() => {
      this.time = new Date(this.time.getTime() + 1000);
      this.timeChanged.emit(this.time); 
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
    this.timeChanged.emit(this.time);
  }

}
