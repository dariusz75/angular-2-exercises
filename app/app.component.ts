import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Article} from './article';
import {ArticleComponent} from './article.component';


@Component({
	selector: 'my-articles',
	directives: [ArticleComponent],
	templateUrl: `app/app.component.html`
})

export class AppComponent {

	articles: Article[];
	articles = ARTICLES;

}

var ARTICLES: Article[] = [

	new Article('Bootstrap', 'http://getbootstrap.com/', 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.', 'http://getbootstrap.com/apple-touch-icon.png', 0),

	new Article('Angular2', 'https://angular.io/', 'The latest Angular release is 2.4. Learn about the latest updates to the documentation. View the Angular change log for enhancements, fixes, and breaking changes in Angular itself.', 'https://angular.io/resources/images/logos/angular2/angular.svg', 0),

	new Article('ReactJS', 'https://facebook.github.io/react/', 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.', 'https://cdn.auth0.com/blog/react-js/react.png', 0),

]