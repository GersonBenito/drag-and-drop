import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { TaskComponent } from './components/task/task.component';

import { DragDropModule } from '@angular/cdk/drag-drop'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TodoPageComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    DragDropModule,
    FormsModule
  ]
})
export class TodoModule { }
