import { Component } from '@angular/core';

class Todo { 
	title: string; 
	completed: boolean;
}

const todos: Todo[] = [
	{
		title: 'Изучить JavaScript',
		completed: true
	},
	{
		title: 'Изучить Angular 2',
		completed: false
	},
	{
		title: 'Изучить TypeScript',
		completed: false
	}
];

@Component({
	moduleId: module.id,
	selector: 'app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css']
})
export class AppComponent {
	title: string = 'Angular 2Do';
	todos: Todo[] = todos;

	toggle(todo: Todo) {
		todo.completed = !todo.completed;
	}

	delete(todo: Todo) {
		let index = this.todos.indexOf(todo);

		if (index > -1) {
			this.todos.splice(index, 1);
		}
	}
}