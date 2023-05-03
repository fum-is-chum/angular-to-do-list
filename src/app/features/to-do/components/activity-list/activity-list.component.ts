import { Component, Input, OnInit } from '@angular/core';
import { ActivityStateService } from '../../services/delete-state.service';

@Component({
  selector: 'activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {
  @Input() activities: any[] | null = [];
  constructor(
    private _activityStateService: ActivityStateService
  ) { }

  emitDeleteEvent(): void {
    this._activityStateService.emitDeleteEvent();
  }

  emitAddEvent(): void {
    this._activityStateService.emitAddEvent();
  }
  ngOnInit(): void {
  }

}
