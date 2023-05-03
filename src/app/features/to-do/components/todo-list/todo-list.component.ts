import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../models/to-do.model';
import { TodoStateService } from '../../services/todo-state.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[] | null = [];
  constructor(
    private _todoStateService: TodoStateService
  ) { }

  emitAddEvent(): void {
    this._todoStateService.emitAddEvent();
  }

  ngOnInit(): void {
  }

}
