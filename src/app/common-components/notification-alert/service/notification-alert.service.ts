import { Injectable } from '@angular/core';
import { Alert } from '../model/notification.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class NotificationAlertService {
  public alertListSubject: BehaviorSubject<Alert[]>;
  constructor() {
    this.alertListSubject = new BehaviorSubject<Alert[]>([]);
  }


  get alertList$(): Observable<Alert[]> {
    return this.alertListSubject.asObservable()
  }

  alert(type: string, message: string) {
    this.alertListSubject.next([...this.alertListSubject.value, { type, message }])
    console.log(this.alertListSubject.value)
  }

  close(index: number) {
    this.alertListSubject.value.splice(index, 1)
    this.alertListSubject.next(
      this.alertListSubject.value
    )
  }
}
