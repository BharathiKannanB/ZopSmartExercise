const {Given, Then, When} = require('cucumber');

Given('Go to browser',() => {
    browser.url("https://lambdatest.github.io/sample-todo-app/");
});