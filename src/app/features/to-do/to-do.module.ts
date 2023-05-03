import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityPageComponent } from './pages/activity/activity-page.component';
import { PrimaryButtonModule } from 'src/app/common-components/primary-button/primary-button.module';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { ActivityService } from './services/activity.service';
import { ActivityItemCardComponent } from './components/activity-item-card/activity-item-card.component';
import { DeleteStateService } from './services/delete-state.service';

const routes: Routes = [
  {
    path: '',
    component: ActivityPageComponent
  }
]

@NgModule({
  declarations: [ActivityPageComponent, ActivityListComponent, ActivityItemCardComponent,],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrimaryButtonModule,
  ],
  providers: [
    ActivityService,
    DeleteStateService
  ]
})
export class ToDoModule { }
