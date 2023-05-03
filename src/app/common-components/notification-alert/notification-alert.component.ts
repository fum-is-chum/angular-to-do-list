import { Component, OnInit } from '@angular/core';
import { NotificationAlertService } from './service/notification-alert.service';
import { Alert } from './model/notification.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'notification-alert',
  templateUrl: './notification-alert.component.html',
  styleUrls: ['./notification-alert.component.scss']
})
export class NotificationAlertComponent implements OnInit {

  constructor(
    private _notificationAlertService: NotificationAlertService
  ) { }

  get alerts$(): Observable<Alert[]> {
    return this._notificationAlertService.alertList$;
  }

  close(idx: number): void {
    this._notificationAlertService.close(idx)
  }

  ngOnInit(): void {
  }

}
