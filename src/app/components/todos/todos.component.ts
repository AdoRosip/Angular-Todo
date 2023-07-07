import { Component } from '@angular/core';
import { todoItem } from 'src/assets/utils';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todosList: todoItem[] = [
    { text: 'My first todo item', active: true },
    { text: 'My second todo item', active: true },
  ];
  title: string = 'Todos';
  inputTodo: string = '';

  toggleActive(i: number): void {
    this.todosList.map((todoItem, index) => {
      if (i == index) todoItem.active = !todoItem.active;
      return todoItem;
    });
  }

  removeItem(index: number): void {
    this.todosList.splice(index, 1);
  }

  addNewItem(): void {
    this.todosList.push({ text: this.inputTodo, active: true });
    this.inputTodo = '';
  }

  testFunction(): void {
    console.log(this.todosList);
  }
}
