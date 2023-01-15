import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { TaskComponent } from './components/task/task.component';

import { DragDropModule } from '@angular/cdk/drag-drop'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { TaskDetailsComponent } from './components/task-details/task-details.component';


@NgModule({
  declarations: [
    TodoPageComponent,
    TaskComponent,
    TaskDetailsComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
  ]
})
export class TodoModule { }
