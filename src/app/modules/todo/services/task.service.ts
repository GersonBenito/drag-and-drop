import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public todo: Array<Task> = [];

  public $todo = new BehaviorSubject<Array<Task>>([]);

  constructor() { 

    this.todo = [
      {
        id: this.makeRandomId(20),
        title: 'Nuevos cambios',
        description: 'Agregar nuevos cambios al aplicativo',
        date: new Date(),
      },
      {
        id: this.makeRandomId(20),
        title: 'Solucionar bugs',
        description: 'Solucionar bug reportados por QA',
        date: new Date(),
      },
      {
        id: this.makeRandomId(20),
        title: 'Hacer pruebas al proyecto',
        description: 'Agregar diferentes pruebas al proyecto',
        date: new Date(),
      },
    ];

    this.$todo.next(this.todo);
    
  }

  addNewTask(task: Task){
    this.todo = [...this.todo, task];
    this.$todo.next(this.todo);
  }

  makeRandomId= (length: number): string => {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   return result;
  }

}
