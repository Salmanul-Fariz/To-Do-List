export class TaskService {
  todo: string[] = ['Learn Angular', 'Typing'];

  progress: string[] = ['Learn JS'];

  done: string[] = [];

  showTodoList() {
    return this.todo;
  }

  showProgressList() {
    return this.progress;
  }

  showCompletedList() {
    return this.done;
  }

  addNewTaskList(task: string) {
    this.todo.push(task);
  }

  removeTaskList(task: string) {
    const todoTask = this.todo.indexOf(task);
    const progressTask = this.progress.indexOf(task);
    const doneTask = this.done.indexOf(task);
    console.log(todoTask);

    if (todoTask > -1) {
      this.todo.splice(todoTask, 1);
    } else if (progressTask > -1) {
      this.progress.splice(progressTask, 1);
    } else if (doneTask > -1) {
      this.done.splice(doneTask, 1);
    }
  }
}
