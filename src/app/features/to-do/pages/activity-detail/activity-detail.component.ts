import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from '../../models/activity.model';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivityService } from '../../services/activity.service';
import { NotificationAlertService } from 'src/app/common-components/notification-alert/service/notification-alert.service';
import { TodoStateService } from '../../services/todo-state.service';
import { Subject, takeUntil } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TodoModalComponent } from '../../components/todo-modal/todo-modal.component';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.scss']
})
export class ActivityDetailComponent implements OnInit, OnDestroy {
  private activity!: Activity;
  private _onDestroy: Subject<void> = new Subject();
  public form: FormGroup;
  public todosIsLoading: boolean = false;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _fb: FormBuilder,
    private _activityService: ActivityService,
    private _notificationService: NotificationAlertService,
    private _todoStateService: TodoStateService,
    private _modalService: NgbModal
  ) {
    this.activity = this._route.snapshot.data['activity'];
    this.form = this._fb.group(this.activity);
    this.initTodoList();
  }

  get f(): { [key: string]: AbstractControl; } {
    return this.form.controls;
  }

  control(formName: string) {
    return this.f[formName] as FormControl;
  }

  initTodoList(): void {
    this.f['todo_items'].patchValue(this.activity.todo_items);
  }

  addTodo(): void {
    if (!this.f['id'].value) {
      this._notificationService.errorAlert('Terjadi kesalahan: activity_id tidak valid, silahkan kembali ke halaman sebelumnya');
      return;
    }
    const modalRef = this._modalService.open(TodoModalComponent, {
      centered: true,
      size: 'lg'
    })

    modalRef.componentInstance.activity_group_id = this.f['id'].value;

    modalRef.result
      .then(() => { })
      .catch(() => { })
  }

  async updateTitle(newTitle: string): Promise<void> {
    const { title, id } = this.form.getRawValue()
    if (title !== newTitle) {
      try {
        // // Panggil API update jika ada perubahan judul
        this.f['title'].patchValue(newTitle);
        // throw new Error('test')
        await this._activityService.updateActivityTitle(newTitle, id);
        this.activity.title = newTitle;
      } catch (error) {
        this._notificationService.errorAlert(`Terjadi kesalahan: Gagal mengupdate judul`)
        console.error(error);
        this.f['title'].patchValue(title);
      }
    }
  }

  back(): void {
    this._router.navigate(['../../'], { relativeTo: this._route })
  }

  ngOnInit(): void {

    this._todoStateService.addEvent$.pipe(takeUntil(this._onDestroy))
      .subscribe(() => this.addTodo())
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
