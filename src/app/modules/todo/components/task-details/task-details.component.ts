import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA , MatDialogRef } from '@angular/material/dialog';
import { Task } from '@modules/todo/interfaces/task.interface';
import { TaskService } from '@modules/todo/services/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

  public task: Task = {
    id: 0,
    title: '',
    description: '',
    date: new Date,
  };
  
  public taskForm: FormGroup;

  public action: 'new-task' | 'edit' = 'new-task';
  
  constructor(
    private fb: FormBuilder,
    private _taskService: TaskService,
    private dialogRef: MatDialogRef<TaskDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { 

    this.taskForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
    this.getDataTask();
  }

  ngOnInit(): void {}

  getDataTask(): void{
    console.log(this.data);
    
    const { action, task } = this.data;
    this.task = task;
    this.action = action
    this.action === 'edit' && this.setValuesForm(this.task);
  }

  addTask(): void {
    const taskTodo: Task = {
      id: 3,
      ...this.taskForm.value,
      date: new Date(),
    }

    this._taskService.addNewTask(taskTodo);
    this.closeDialog();
  }

  closeDialog(): void{
    this.dialogRef.close();
  }

  setValuesForm(task: Task): void{
    this.taskForm.setValue({
      title: task.title,
      description: task.description
    });
  }

}
