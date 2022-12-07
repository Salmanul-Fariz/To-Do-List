import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoTaskComponent } from './to-do-task/to-do-task.component';
import { ProgressTaskComponent } from './progress-task/progress-task.component';
import { CompleteTaskComponent } from './complete-task/complete-task.component';
import { TaskComponent } from './to-do-task/task/task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    ToDoTaskComponent,
    ProgressTaskComponent,
    CompleteTaskComponent,
    TaskComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
