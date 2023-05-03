import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Activity, ActivityList } from "../models/activity.model";
import { environment } from "src/environments/environment";



@Injectable()
export class ActivityService {
  constructor(
    private _http: HttpClient
  ) {

  }

  getActivities(): Promise<ActivityList> {
    return new Promise((resolve, reject) => {
      this._http.get<ActivityList>(`/activity-groups?email=${encodeURI(environment.email)}`, { responseType: 'json' })
        .subscribe({
          next: (resp) => resolve(resp),
          error: (err) => reject(err),
          complete: () => { }
        })
    })
  }

  getActivity(id: number): Promise<Activity> {
    return new Promise((resolve, reject) => {
      this._http.get<Activity>(`/activity-groups/${id}`, { responseType: 'json' }).subscribe({
        next: (resp) => resolve(resp),
        error: (err) => reject(err),
        complete: () => { }
      })
    })
  }

  addActivity(data: Activity): Promise<Activity> {
    return new Promise((resolve, reject) => {
      this._http.post<Activity>(`/activity-groups`, data, { responseType: 'json' }).subscribe({
        next: (resp) => resolve(resp),
        error: (err) => reject(err),
        complete: () => { }
      })
    })
  }

  removeActivity(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this._http.delete<void>(`/activity-groups/${id}`, { responseType: 'json' }).subscribe({
        next: (resp) => resolve(resp),
        error: (err) => reject(err),
        complete: () => { }
      })
    })
  }
}
