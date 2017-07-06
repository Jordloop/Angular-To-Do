import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
      <h3>{{currentFocus}}</h3>
      <hr>
      <task-list [childTaskList]="masterTaskList" (clickSender)="editTask($event)"></task-list>
      <div class="Well">
      <edit-task [childSelectedTask]="selectedTask" (doneButtonClickedSender)="finishedEditing()"></edit-task>
      </div>
      <new-task (newTaskSender)="addTask($event)"></new-task>
    </div>
  `
  // childTaskList ready to receive mosterTaskList (an array of Tasks)
  //clickSender calls editTask() with the clicked task as its argument, it sent from list-task.component
})

export class AppComponent {
  currentFocus: string = 'Things To Do';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedTask = null;
//Data Down
  masterTaskList: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course', 3),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on GitHub', 2)
  ];

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  finishedEditing() {
    this.selectedTask = null;
  }

  addTask(newTaskFromChild: Task) {
    this.masterTaskList.push(newTaskFromChild);
  }
}
