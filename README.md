# BrokenTodoApp

Your boss has asked you to write a simple todo app using Angular 6. This app allows you to add "todo" items
as well as toggle the completed status for each individual todo.

Your coworker has written the beginning portion of this project and you must now complete it.
Before you can deliver it to your boss, you must first fix all issues, test, add a few more features,
and finally submit everything as a pull request to be reviewed by your coworker.

![alt text](https://raw.githubusercontent.com/vincentjames501/angular-broken-todo-app/master/example.png)

## Instructions

- Your new company uses github to manage its git repositories. Your coworker left the broken todo app at
https://github.com/vincentjames501/angular-broken-todo-app. Clone the repository and create a branch 
called `exercise`

- After running the app for the first time, your boss noticed there is an issue: You can add a blank todo!
Add a fix that prevents an empty todo from being submitted while also disabling the submit button until
the field is valid. Your boss also likes each feature/fix to have an associated test case!

- As management typically does, they would now like the todo field to be a minimum of 3 characters and a max 
of 64. Your coworker thinks it would be best to use one of Angular's form modules for form submission and 
validation. 

- After using your beautiful application for a few weeks, your boss now has tons of todos and they are getting 
difficult to manage. Your boss would like to be able to delete a todo and remove it from the list. Hint: 

```angular2html
<button mat-icon-button class="delete-button">
  <mat-icon aria-label="Delete a todo">delete</mat-icon>
</button>
```

- Wouldn't you know it; your boss wants another feature! Your boss would like to be able to see some 
statistics of the following when clicking the statistics menu item link:

  - Total number of todos (excluding deleted)
  - Total number of completed todos
  - Total number of incomplete todos

- Now that you're done, submit a pull request in Github into the master branch of this project!

## Running

Make sure you have the angular cli installed:

```npm install -g @angular/cli```

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Testing

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
