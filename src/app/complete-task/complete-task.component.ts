import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { TaskService } from '../task.service';
import { TaskDragService } from '../task-drag.service';

@Component({
  selector: 'app-complete-task',
  templateUrl: './complete-task.component.html',
  styleUrls: ['./complete-task.component.css'],
})
export class CompleteTaskComponent implements OnInit {
  done: string[];

  constructor(
    private taskService: TaskService,
    private taskDragService: TaskDragService
  ) {}

  // Pass complete list tasks to complete array from service
  ngOnInit(): void {
    this.done = this.taskService.showCompletedList();
  }

  // drag and drop functinality
  drop(event: CdkDragDrop<string[]>) {
    this.taskDragService.drop(event);
  }
}
