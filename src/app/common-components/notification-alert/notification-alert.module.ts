import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NotificationAlertComponent } from './notification-alert.component';
import { NotificationAlertService } from './service/notification-alert.service';

@NgModule({
  declarations: [NotificationAlertComponent],
  imports: [
    CommonModule,
    NgbAlertModule
  ],
  exports: [
    NotificationAlertComponent
  ],
  providers: [NotificationAlertService]
})
export class NotificationAlertModule { }
