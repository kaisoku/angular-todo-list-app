import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos-detail',
  templateUrl: './todos-detail.component.html',
  styleUrls: ['./todos-detail.component.css'],
})
export class TodosDetailComponent implements OnInit {
  @Input() todo?: Todo;

  constructor() {}

  ngOnInit(): void {}
}
