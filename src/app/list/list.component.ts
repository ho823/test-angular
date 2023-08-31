import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  todo$: Observable<string[]>

  constructor(private store: Store<{ todo: string[] }>) {
    this.todo$ = store.pipe(select('todo'))
  }
  trackArray = (index: number) => {
    return index;
  }

}
