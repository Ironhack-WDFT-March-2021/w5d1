const express = require('express');
const app = express();

// this line is needed to parse the request body
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'hbs');

let accessCount = 0;
// middleware
const count = () => {
    return (req, res, next) => {
        accessCount++;
        console.log(accessCount);
        next();
    }
}

const log = () => {
    return (req, res, next) => {
        console.log('hello');
        next();
    }
}
// register a middleware globally -> for every route:
app.use(count());

// this registers the count middleware for this route
// you can also add multiple
app.get('/', count(), log(), (req, res) => {
    res.render('form');
})


app.post('/post-example', (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    res.render('dashboard', { username: username })
})

app.listen(3000);