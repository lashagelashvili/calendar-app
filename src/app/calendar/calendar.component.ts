import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarEvent } from '../models/calendar';
import { CalendarStateService } from '../services/calendar-state.service';
import { ScheduleDialogComponent } from './schedule-dialog/schedule-dialog.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  hours = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ];

  schedules: CalendarEvent[] = [];

  selected!: Date | null;

  constructor(
    private dialog: MatDialog,
    private calendarStateService: CalendarStateService
  ) {}

  ngOnInit(): void {
    this.selected = new Date();

    this.calendarStateService.getEvents().subscribe((res) => {
      console.log(res);
      this.schedules = res;
    });
  }

  addDate(index: number) {
    this.openDialog('0ms', '0ms');
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(ScheduleDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  getEventOnHour(hour: number): CalendarEvent | undefined {
    const result = this.schedules.find((x) => x.startDate.getHours() === hour);
    console.log(result, hour);
    return result;
  }
}
