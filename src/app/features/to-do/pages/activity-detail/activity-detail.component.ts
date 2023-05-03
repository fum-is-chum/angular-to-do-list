import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from '../../models/activity.model';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.scss']
})
export class ActivityDetailComponent implements OnInit {
  private activity!: Activity;
  public form: FormGroup;
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _fb: FormBuilder,
    private _activityService: ActivityService
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

  addTodo(): void { }

  async updateTitle(newTitle: string): Promise<void> {
    const { title, id } = this.form.getRawValue()
    if (title !== newTitle) {
      try {
        // // Panggil API update jika ada perubahan judul
        this.f['title'].patchValue(newTitle);
        await this._activityService.updateActivityTitle(newTitle, id);
        this.activity.title = newTitle;
      } catch (error) {
        this.f['title'].patchValue(title);
      }
    }
  }

  back(): void {
    this._router.navigate(['../../'], { relativeTo: this._route })
  }

  ngOnInit(): void {

    console.log(this.form.getRawValue())
  }

}
