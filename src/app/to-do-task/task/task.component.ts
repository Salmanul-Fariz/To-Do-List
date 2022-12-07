import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
}
