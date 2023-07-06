// Create web server
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// get all comments
app.get('/comments', (req, res) => {
    const comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));
    res.json(comments);
});

// get comment by id
app.get('/comments/:id', (req, res) => {
    const comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));
    const comment = comments.find(c => c.id == req.params.id);
    res.json(comment);
});

// create new comment
app.post('/comments', (req, res) => {
    const comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));
    const comment = {
        id: comments.length + 1,
        title: req.body.title,
        body: req.body.body
    }
    comments.push(comment);});