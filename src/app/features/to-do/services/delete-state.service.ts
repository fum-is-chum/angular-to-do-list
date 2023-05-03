import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class DeleteStateService {
  // Untuk trigger event delete activity item
  private deleteTriggerSubject: Subject<void>;
  constructor() {
    this.deleteTriggerSubject = new Subject();
  }

  get deleteEvent$(): Observable<void> {
    return this.deleteTriggerSubject.asObservable();
  }
  
  emitDeleteEvent(): void {
    this.deleteTriggerSubject.next();
  }
}