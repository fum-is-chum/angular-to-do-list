import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from './confirm-modal.component';
import { PrimaryButtonModule } from '../primary-button/primary-button.module';

@NgModule({
  declarations: [
    ConfirmModalComponent
  ],
  imports: [
    CommonModule,
    NgbModalModule,
    PrimaryButtonModule
  ],
  providers: []
})
export class ConfirmModalModule { }
