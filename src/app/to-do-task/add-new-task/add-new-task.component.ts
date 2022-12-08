import { Component } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.css'],
})
export class AddNewTaskComponent {
  inputValue: string = '';

  constructor(private taskService: TaskService) {}

  // open modal for enter the task
  openModal(modal: HTMLElement, overlay: HTMLElement) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }

  // close modal
  closeModal(modal: HTMLElement, overlay: HTMLElement) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    this.inputValue = '';
  }

  // add new task and send to service
  addNewTask(task: string, modal: HTMLElement, overlay: HTMLElement) {
    this.taskService.addNewTaskList(task);
    this.closeModal(modal, overlay);
  }
}
