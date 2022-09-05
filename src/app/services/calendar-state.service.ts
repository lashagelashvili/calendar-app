import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CalendarEvent } from '../models/calendar';

@Injectable({
  providedIn: 'root',
})
export class CalendarStateService {
  private calendarEvents$ = new BehaviorSubject<CalendarEvent[]>([]);

  constructor() {}

  addEvent(event: CalendarEvent) {
    const events = this.calendarEvents$.value;
    events.push(event);
    this.calendarEvents$.next(events);
  }

  getEvents(): Observable<CalendarEvent[]> {
    return this.calendarEvents$.asObservable();
  }
}
