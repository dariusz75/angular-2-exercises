System.register(['angular2/core', './article', './article.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, article_1, article_component_1;
    var AppComponent, ARTICLES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (article_1_1) {
                article_1 = article_1_1;
            },
            function (article_component_1_1) {
                article_component_1 = article_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.articles = ARTICLES;
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-articles',
                        directives: [article_component_1.ArticleComponent],
                        templateUrl: "app/app.component.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            ARTICLES = [
                new article_1.Article('Bootstrap', 'http://getbootstrap.com/', 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.', 'http://getbootstrap.com/apple-touch-icon.png', 0),
                new article_1.Article('Angular2', 'https://angular.io/', 'The latest Angular release is 2.4. Learn about the latest updates to the documentation. View the Angular change log for enhancements, fixes, and breaking changes in Angular itself.', 'https://angular.io/resources/images/logos/angular2/angular.svg', 0),
                new article_1.Article('ReactJS', 'https://facebook.github.io/react/', 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.', 'https://cdn.auth0.com/blog/react-js/react.png', 0),
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map