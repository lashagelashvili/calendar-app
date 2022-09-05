/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CalendarStateService } from './calendar-state.service';

describe('Service: CalendarState', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalendarStateService]
    });
  });

  it('should ...', inject([CalendarStateService], (service: CalendarStateService) => {
    expect(service).toBeTruthy();
  }));
});
