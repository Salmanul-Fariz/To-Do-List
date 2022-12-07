import { Component } from '@angular/core';
import { TaskDragService } from './task-drag.service';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TaskService, TaskDragService],
})
export class AppComponent {}
