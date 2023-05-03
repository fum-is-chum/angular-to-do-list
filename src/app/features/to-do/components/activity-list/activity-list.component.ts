import { Component, Input, OnInit } from '@angular/core';
import { DeleteStateService } from '../../services/delete-state.service';

@Component({
  selector: 'activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {
  @Input() activities: any[] | null = [];
  constructor(
    private _deleteStateService: DeleteStateService
  ) { }

  emitDeleteEvent(): void {
    this._deleteStateService.emitDeleteEvent();
  }

  ngOnInit(): void {
  }

}
