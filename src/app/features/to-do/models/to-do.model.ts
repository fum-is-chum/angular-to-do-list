export class Todo {
  is_active: boolean;
  priority: 'very-high' | 'high' | 'normal' | 'low' | 'very-low';
  created_at?: string;
  updated_at?: string;
  id?: number;
  activity_group_id: number;
  title: string;

  constructor(data: any = {}) {
    if (data) {
      this.id = data.id;
      this.created_at = data.created_at;
      this.updated_at = data.updated_at;
    }
    this.is_active = data.is_active ?? true;
    this.priority = data.priority || 'very-high';
    this.activity_group_id = data.activity_group_id || null;
    this.title = data.title || null;
  }
}
