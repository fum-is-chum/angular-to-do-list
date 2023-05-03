import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivityService } from 'src/app/features/to-do/services/activity.service';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  public dialog: string = '';
  public isDeleting: boolean = false;
  public id: number | undefined;
  constructor(
    private activeModal: NgbActiveModal,
    private _activityService: ActivityService,
  ) { }

  dismiss(): void {
    this.activeModal.dismiss()
  }

  async close(confirm: boolean = true): Promise<void> {
    await this.deleteActivity(this.id!);
    this.activeModal.close(true)
  }

  async deleteActivity(id: number): Promise<void> {
    if (this.isDeleting) return;
    try {
      this.isDeleting = true;
      await this._activityService.removeActivity(id);
    } catch (error) {
      console.error(error);
    } finally {
      this.isDeleting = false;
    }
  }

  ngOnInit(): void {
  }

}
