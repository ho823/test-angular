import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { changeText, removeText, addTodoList } from '../todo.action';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  todo$: Observable<string[]> 
  taskText:Array<string> = []
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(private store: Store<{ todo: string[] }>) {
    this.todo$ = store.pipe(select('todo'))
  }

  addTask = (value: string) => {
    //this.taskText.push(value)
    this.store.dispatch(changeText(value))
  }

  trackArray = (index: number) => {
    return index;
  }
  
  removeTask = (index: number) => {
    //this.taskText.splice(index, 1)
    this.store.dispatch(removeText(index))
  }

  addTodoList = () => {
    this.store.dispatch(addTodoList())

  }
}
