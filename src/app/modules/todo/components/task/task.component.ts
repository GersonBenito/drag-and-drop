import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  public todo: Array<string> = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  public progress: Array<string> = [];
  public done: Array<string> = [];
  public task: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
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

  addTaskToDo(){
    if(this.task.trim() === ''){
      return;
    }
    
    this.todo = [this.task, ...this.todo];
    this.task = '';
  }

}
