import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable, of } from 'rxjs';
import { MOCKTODOS } from './mockTodos';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private url = 'https://jsonplaceholder.typicode.com/todos';
  todos?: Todo[];

  constructor() {}

  getTodos(): Observable<Todo[]> {
    return of(MOCKTODOS);
  }

  addTodo(todo: Todo): Observable<Todo[]> {
    const id = MOCKTODOS[MOCKTODOS.length - 1].id + 1;
    const newTodo: Todo = {
      id,
      userId: 1,
      title: todo.title,
      body: todo.body,
      checked: todo.checked,
    };
    MOCKTODOS.push(newTodo);
    return of(MOCKTODOS);
  }

  deleteTodo(id: number): Observable<Todo[]> {
    const newList = MOCKTODOS.filter((t) => t.id !== id);
    return of(newList);
  }
}
