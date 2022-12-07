import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-progress-task',
  templateUrl: './progress-task.component.html',
  styleUrls: ['./progress-task.component.css'],
})
export class ProgressTaskComponent implements OnInit {
  progress: string[];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.progress = this.taskService.showProgressList();
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
