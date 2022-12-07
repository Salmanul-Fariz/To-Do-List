import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { TaskService } from '../task.service';

@Component({
  selector: 'app-to-do-task',
  templateUrl: './to-do-task.component.html',
  styleUrls: ['./to-do-task.component.css'],
})
export class ToDoTaskComponent implements OnInit {
  todo: string[];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.todo = this.taskService.showTodoList();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
