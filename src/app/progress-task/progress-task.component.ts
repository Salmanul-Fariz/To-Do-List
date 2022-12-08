import { Component, OnInit } from '@angular/core';

import { CdkDragDrop } from '@angular/cdk/drag-drop';

import { TaskService } from '../task.service';
import { TaskDragService } from '../task-drag.service';

@Component({
  selector: 'app-progress-task',
  templateUrl: './progress-task.component.html',
  styleUrls: ['./progress-task.component.css'],
})
export class ProgressTaskComponent implements OnInit {
  progress: string[];

  constructor(
    private taskService: TaskService,
    private taskDragService: TaskDragService
  ) {}

  // Pass progress list tasks to progress array from service
  ngOnInit(): void {
    this.progress = this.taskService.showProgressList();
  }

  // drag and drop functinality
  drop(event: CdkDragDrop<string[]>) {
    this.taskDragService.drop(event);
  }
}
