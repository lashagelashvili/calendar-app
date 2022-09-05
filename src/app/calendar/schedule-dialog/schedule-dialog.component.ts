import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CalendarEvent } from 'src/app/models/calendar';
import { CalendarStateService } from 'src/app/services/calendar-state.service';

@Component({
  selector: 'app-schedule-dialog',
  templateUrl: './schedule-dialog.component.html',
  styleUrls: ['./schedule-dialog.component.scss'],
})
export class ScheduleDialogComponent implements OnInit {
  scheduleForm = new FormGroup({
    title: new FormControl('asd', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    description: new FormControl('dddd', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    startDate: new FormControl(new Date().toISOString(), {
      nonNullable: true,
      validators: [Validators.required],
    }),
    endDate: new FormControl(new Date().toISOString(), {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  constructor(
    private dialogRef: MatDialogRef<ScheduleDialogComponent>,
    private calendarService: CalendarStateService
  ) {}

  ngOnInit(): void {}

  onSave() {
    const event: CalendarEvent = {
      title: this.scheduleForm.value.title ?? '',
      description: this.scheduleForm.value.description ?? '',
      startDate: this.scheduleForm.value.startDate
        ? new Date(this.scheduleForm.value.startDate)
        : new Date(),
      endDate: this.scheduleForm.value.endDate
        ? new Date(this.scheduleForm.value.endDate)
        : new Date(),
    };

    this.calendarService.addEvent(event);
    this.dialogRef.close();
  }
}
