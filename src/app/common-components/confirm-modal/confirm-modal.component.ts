import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  public dialog: string = '';
  constructor(
    private activeModal: NgbActiveModal
  ) { }

  dismiss(): void {
    this.activeModal.dismiss()
  }

  close(confirm: boolean = true) {
    this.activeModal.close(confirm)
  }
  
  ngOnInit(): void {
  }

}
