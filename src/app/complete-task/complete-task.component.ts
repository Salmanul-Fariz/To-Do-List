import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-complete-task',
  templateUrl: './complete-task.component.html',
  styleUrls: ['./complete-task.component.css'],
})
export class CompleteTaskComponent implements OnInit {
  done: string[];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.done = this.taskService.showCompletedList();
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
