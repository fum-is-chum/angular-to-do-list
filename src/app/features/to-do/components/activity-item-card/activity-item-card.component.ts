import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Activity } from '../../models/activity.model';
import { ActivityService } from '../../services/activity.service';
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
  ) { }

  ngOnInit(): void {
  }


  async deleteActivity(id: number): Promise<void> {
    try {
      await this._activityService.removeActivity(id);
      this.onDelete.emit();
    } catch (e) {

    } finally {

    }
  }
}
