import { environment } from "src/environments/environment";
import { Todo } from "./to-do.model";

export class Activity {
  id?: number;
  title: string | null;
  email: string | null;
  created_at?: string;
  modified_at?: string;
  todo_items?: Todo[]

  constructor(data: any = {}) {
    if (data) {
      this.id = data.id;
      this.created_at = data.created_at;
      this.modified_at = data.modified_at;
      this.todo_items = data.todo_items;
    }
    this.title = data.title || 'New Activity';
    this.email = data.email || environment.email;
  }
}

export interface ActivityList {
  total: number;
  limit: number;
  skip: number;
  data: Activity[]
}

