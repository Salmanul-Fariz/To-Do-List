import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToDoTaskComponent } from './to-do-task/to-do-task.component';
import { ProgressTaskComponent } from './progress-task/progress-task.component';
import { CompleteTaskComponent } from './complete-task/complete-task.component';
import { TaskComponent } from './to-do-task/task/task.component';
import { AddNewTaskComponent } from './to-do-task/add-new-task/add-new-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoTaskComponent,
    ProgressTaskComponent,
    CompleteTaskComponent,
    TaskComponent,
    AddNewTaskComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatDialogModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
