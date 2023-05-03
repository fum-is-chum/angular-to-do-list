import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Activity } from '../../models/activity.model';
import { ActivityService } from '../../services/activity.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from 'src/app/common-components/confirm-modal/confirm-modal.component';
import { NotificationAlertService } from 'src/app/common-components/notification-alert/service/notification-alert.service';
@Component({
  selector: 'activity-item-card',
  templateUrl: './activity-item-card.component.html',
  styleUrls: ['./activity-item-card.component.scss']
})
export class ActivityItemCardComponent implements OnInit {
  @Input() activity!: Activity;
  @Output() onDelete = new EventEmitter<void>();
  public isDeleting: boolean = false;
  constructor(
    private _activityService: ActivityService,
    private _modalService: NgbModal,
    private _notificationService: NotificationAlertService
  ) { }

  ngOnInit(): void {
  }

  confirmDeletetion(activity: Activity) {
    const modalRef = this._modalService.open(ConfirmModalComponent, {
      centered: true
    })

    modalRef.componentInstance.dialog = `Apakah anda yakin menghapus activity<br/><b>"${activity.title}"?</b>`

    modalRef.result
      .catch(() => { }) // user dismiss
      .then((shouldDelete) => {
        if (shouldDelete) {
          this.deleteActivity(activity.id!)
        }
      }) // user close
  }

  async deleteActivity(id: number): Promise<void> {
    try {
      this.isDeleting = true;
      await this._activityService.removeActivity(id);

      // tampilkan alert notifikasi setelah berhasil hapus
      this._notificationService.alert('light', 'Activity berhasil dihapus')
      this.onDelete.emit();
    } catch (e) {

    } finally {
      this.isDeleting = false;
    }
  }
}
