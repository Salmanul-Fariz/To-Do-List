import { Component } from '@angular/core';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.css'],
})
export class AddNewTaskComponent {
  inputValue: string = '';

  openModal(modal: HTMLElement, overlay: HTMLElement) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }

  closeModal(modal: HTMLElement, overlay: HTMLElement) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    this.inputValue = '';
  }

  addNewTask(task: string) {
    console.log(task);
  }
}
