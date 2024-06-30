import { isSameDay,isSameMonth } from 'date-fns'; 
import { Component } from '@angular/core';
import { CalendarWeekViewComponent ,CalendarWeekViewBeforeRenderEvent } from 'angular-calendar';

import {
  CalendarEvent,
  CalendarView
} from 'angular-calendar';
import { startOfDay, endOfDay } from 'date-fns';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  view: CalendarView = CalendarView.Week;
  viewDate: Date = new Date();
  dayStartHour: number = 8;
    dayEndHour: number = 17;
  
  
  CalendarView=CalendarView;


   
 
  events: CalendarEvent[] = [];
  activeDayIsOpen=false;
  constructor()

  {
    const event1 =
    {
      title:"déclaration fiscale",
      start : new Date("2024-06-09T10:00"),
      end:new Date("2024-06-09T13:00"),
    }
    const event2 =
    {
      title:"comptabilité",
      start : new Date("2024-06-11T11:00"),
      end:new Date("2024-06-11T13:00"),
    }
    const event3 =
    {
      title:"comptabilité",
      start : new Date("2024-06-12T10:00"),
      end:new Date("2024-06-12T16:00"),
    }
    this.events.push(event1);
    this.events.push(event2);
    this.events.push(event3);
  }
    // Configuration des heures de début et de fin de la journée
    
  setView(view:CalendarView)
  {
    this.view=view;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }
     
}