import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from 'src/app/common-components/confirm-modal/confirm-modal.component';
import { NotificationAlertService } from 'src/app/common-components/notification-alert/service/notification-alert.service';
import { Activity } from '../../models/activity.model';
import { ActivityService } from '../../services/activity.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'activity-item-card',
  templateUrl: './activity-item-card.component.html',
  styleUrls: ['./activity-item-card.component.scss']
})
export class ActivityItemCardComponent implements OnInit {
  @Input() activity!: Activity;
  @Output() onDelete = new EventEmitter<void>();
  constructor(
    private _activityService: ActivityService,
    private _modalService: NgbModal,
    private _notificationService: NotificationAlertService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }


  confirmDeletetion(activity: Activity) {
    const modalRef = this._modalService.open(ConfirmModalComponent, {
      centered: true
    })

    modalRef.componentInstance.dialog = `Apakah anda yakin menghapus activity<br/><b>"${activity.title}"?</b>`
    modalRef.componentInstance.id = activity.id
    modalRef.result
      .catch(() => { }) // user dismiss
      .then((isDeleted) => {
        if (isDeleted) {
          this._notificationService.alert('Activity berhasil dihapus')
          this.onDelete.emit();
        }
      }) // user close
  }

  activityDetail(): void {
    this._router.navigate(['detail', this.activity.id], { relativeTo: this._route })
  }

  ngOnInit(): void {
  }
}
