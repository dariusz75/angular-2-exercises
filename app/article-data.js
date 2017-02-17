System.register(['./article'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var article_1;
    var ARTICLES;
    return {
        setters:[
            function (article_1_1) {
                article_1 = article_1_1;
            }],
        execute: function() {
            ARTICLES = [
                new article_1.Article('Bootstrap', 'http://getbootstrap.com/', 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.', 'http://getbootstrap.com/apple-touch-icon.png', 0),
                new article_1.Article('Angular2', 'https://angular.io/', 'The latest Angular release is 2.4. Learn about the latest updates to the documentation. View the Angular change log for enhancements, fixes, and breaking changes in Angular itself.', 'https://angular.io/resources/images/logos/angular2/angular.svg', 0),
                new article_1.Article('ReactJS', 'https://facebook.github.io/react/', 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.', 'https://cdn.auth0.com/blog/react-js/react.png', 0),
            ];
        }
    }
});
//# sourceMappingURL=article-data.js.map