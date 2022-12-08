import { Component, Input } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() todoTasks: string;

  constructor(private taskService: TaskService) {}

  // Remove task from tasks list
  removeTask(task: string) {
    this.taskService.removeTaskList(task);
  }
}
