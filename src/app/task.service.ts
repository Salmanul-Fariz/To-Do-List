export class TaskService {
  todo: string[] = ['Get to work', 'Pick up groceries'];

  progress: string[] = ['Get up', 'Brush teeth'];

  done: string[] = ['Get up'];

  showTodoList() {
    return this.todo;
  }

  showProgressList() {
    return this.progress;
  }

  showCompletedList() {
    return this.done;
  }
}
