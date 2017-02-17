import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';


@Component({
	selector: 'my-articles',
	template: `
						<ul>
							<li *ngFor = "#day of days">{{ day }}</li>
						</ul>
						`
})

export class AppComponent {
	days: string[];
	month: string;

	constructor() {
		this.days = ['Monday', 'Tuesday', 'Wednesday'];
		this.month = 'January';
	}

}