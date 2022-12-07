import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

import { TaskService } from '../task.service';
import { TaskDragService } from '../task-drag.service';

@Component({
  selector: 'app-to-do-task',
  templateUrl: './to-do-task.component.html',
  styleUrls: ['./to-do-task.component.css'],
})
export class ToDoTaskComponent implements OnInit {
  todo: string[];

  constructor(
    private taskService: TaskService,
    private taskDragService: TaskDragService
  ) {}

  ngOnInit(): void {
    this.todo = this.taskService.showTodoList();
  }

  drop(event: CdkDragDrop<string[]>) {
    this.taskDragService.drop(event);
  }
}
