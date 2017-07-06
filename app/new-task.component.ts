import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'new-task',
  template: `
  <h1>New Task</h1>
   <div>
     <label>Enter Task Description:</label>
     <input #newDescription>
   </div>
   <div>
    <label>Task Priority:</label>
    <select #newPriority>
      <option [value]="1"> Low Priority </option>
      <option [value]="2"> Medium Priority </option>
      <option [value]="3"> High Priority </option>
    </select>
    <button (click)="submitForm(newDescription.value, newPriority.value)">Add</button>
    </div>
  `
 // #newDescription will wllow you to save a user's input in a newDescription variable.
 // We can then retrieve the user input by calling newDescription.value
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter();

//EventEmitter can only send one argument, so we hold all data in an object (array would also work)
  submitForm(description: string, priority: number) {
    var newTaskToAdd: Task = new Task(description, priority);
    this.newTaskSender.emit(newTaskToAdd);
  }
}
