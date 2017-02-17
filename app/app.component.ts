import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';


@Component({
	selector: 'my-articles',
	template: `<div>This is first component!</div>
				<p>Today is {{ days[0] }} and the current month is {{ month }}.</p>`
})

export class AppComponent {
	days: string[];
	month: string;

	constructor() {
		this.days = ['Monday', 'Tuesday', 'Wednesday'];
		this.month = 'January';
	}

}