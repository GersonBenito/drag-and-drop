import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { TaskDetailsComponent } from '../task-details/task-details.component';
import { TaskService } from '@modules/todo/services/task.service';
import { Task } from '@modules/todo/interfaces/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  public todo: Array<Task> = [];
  public progress: Array<Task> = [];
  public done: Array<Task> = [];
  public task: string = '';

  constructor( 
    private dialog: MatDialog, 
    public _taskService: TaskService,
  ) { }

  ngOnInit(): void {
    this.getAllTask();
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  openDialog(action: string, task?: Task, task_info?: string): void {
    this.dialog.open(TaskDetailsComponent, {
      data: {
        action: action,
        task_info,
        task
      },
      width: '50%',
    });
  }

  getAllTask(): void{
    this._taskService.$todo.subscribe({
      next: (result) =>{
        this.todo = result;
      },
      error: (error) =>{
        console.log('error -->', error);
      }
    });
  }

}
