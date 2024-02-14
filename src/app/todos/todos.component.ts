import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos?: Todo[];
  selectedTodo?: Todo;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.todoService.getTodos().subscribe((t) => (this.todos = t));
  }

  onSelect(todo: Todo) {
    this.selectedTodo = todo;
  }

  delete(id: number) {
    return this.todoService.deleteTodo(id).subscribe((t) => (this.todos = t));
  }
}
