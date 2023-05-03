import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityPageComponent } from './pages/activity/activity-page.component';
import { PrimaryButtonModule } from 'src/app/common-components/primary-button/primary-button.module';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { ActivityService } from './services/activity.service';
import { ActivityItemCardComponent } from './components/activity-item-card/activity-item-card.component';
import { ActivityStateService } from './services/delete-state.service';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalModule } from 'src/app/common-components/confirm-modal/confirm-modal.module';
import { ActivityDetailComponent } from './pages/activity-detail/activity-detail.component';
import { ActivityDetailResolver } from './resolver/activity-detail.resolver';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineEditModule } from 'src/app/common-components/inline-edit/inline-edit.module';

const routes: Routes = [
  {
    path: '',
    component: ActivityPageComponent
  },
  {
    path: 'detail/:id',
    resolve: {
      activity: ActivityDetailResolver
    },
    component: ActivityDetailComponent
  },
  // {
  //   path: '**',
  //   redirectTo: ''
  // }
]

@NgModule({
  declarations: [ActivityPageComponent, ActivityListComponent, ActivityItemCardComponent, ActivityDetailComponent,],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    PrimaryButtonModule,
    NgbModalModule,
    ConfirmModalModule,
    InlineEditModule
  ],
  providers: [
    ActivityService,
    ActivityStateService,
    ActivityDetailResolver
  ]
})
export class ToDoModule { }
