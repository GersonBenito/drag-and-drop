import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public todo: Array<Task> = [
    {
      id: 1,
      title: 'Nuevos cambios',
      description: 'Agregar nuevos cambios al aplicativo',
      date: new Date(),
    },
    {
      id: 2,
      title: 'Solucionar bugs',
      description: 'Solucionar bug reportados por QA',
      date: new Date(),
    },
    {
      id: 3,
      title: 'Hacer pruebas al proyecto',
      description: 'Agregar diferentes pruebas al proyecto',
      date: new Date(),
    },
  ];

  public $todo = new BehaviorSubject<Array<Task>>(this.todo);

  constructor() { }

  addNewTask(task: Task){
    this.todo = [...this.todo, task];
    this.$todo.next(this.todo);
  }
}
