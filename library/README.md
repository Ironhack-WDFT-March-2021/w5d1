## Library CRUD Project

### Boilerplate created with Ironlauncher
```bash
$ npx ironlauncher
or
$ npm install -g ironlauncher
$ ironlauncher <name of the project>
```

### To run the application
```bash
$ npm run dev
```

### Features

Seed the database with the json data ✅

When i visit the URL /books i want to see a list of all my book titles from the database ✅
- we need a route to /books that gets all the books from the database
- we need a view books that gets all the books and renders the titles as a list


When i click on a book title from the list i want to be taken to a route /books/:id and want to see all the details from the book ✅
- we need to change the view that renders the book titles so that every title is a link
- we need a route /books/:id that gets the specific book from the database
- we need a view that shows the book details



When i click on a link 'add a book' under the books list i am taken to a form to add a book ✅
- we need a link under the titles list that goes to /books/add
- we need a route that displays a form to add a book

When i click on Add i want to be taken to the detail view of the added book and the book should be added to the database ✅
- we need a post route /books
- we need to create a new document in the database
- we need to redirect to the book details page



When i click on a link 'edit' under the book details i want to be taken to a form where i can edit the book ✅
- we need a link that goes to /books/edit/:id
- we need a get route for this 
- we need to retrieve that book from the database
- we need to render the fields of that book in a form


When i click on edit i want to be taken to the book details view showing the changed fields of the book and the book should be updated in the database
- we need a post route /books/edit/:id
- we need to update that book
- we need ro redirect to the book details view for this book


When i click on a link 'delete' under a book details view i want to be able to delete the book and be redirected to the books list