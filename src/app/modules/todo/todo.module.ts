import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { TaskComponent } from './components/task/task.component';

import { DragDropModule } from '@angular/cdk/drag-drop'
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    TodoPageComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    DragDropModule,
    FormsModule,
    MatInputModule,
  ]
})
export class TodoModule { }
