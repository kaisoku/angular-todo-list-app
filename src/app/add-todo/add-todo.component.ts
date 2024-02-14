import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  todo: Todo = { title: '', body: '' } as Todo;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  onSubmit(todoForm: NgForm) {
    console.log(todoForm.value.title, todoForm.value.body);
    const todo: Todo = {
      title: todoForm.value.title,
      body: todoForm.value.body,
    } as Todo;
    this.todoService.addTodo(todo).subscribe((t) => console.log(t));
    todoForm.reset();
  }
}
