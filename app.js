var app = require('express')()

var posts = [
  {
    id: 1,
    author: 'Tashi',
    title: 'Templating with EJS',
    body: 'Blog post number 1'
  },
  {
    id: 2,
    author: 'Misty',
    title: 'Express: Starting from the Bottom',
    body: 'Blog post number 2'
  },
  {
    id: 3,
    author: 'Gary',
    title: 'Streams',
    body: 'Blog post number 3'
  },
  {
    id: 4,
    author: 'Ash',
    title: 'Events',
    body: 'Blog post number 4'
  }
];

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('home', {posts: posts });
});

app.get('/post/:id', function (req, res) {
  var post = posts.filter(function (post) {
    return post.id == req.params.id;
  })[0];

  res.render('post', {
    author: post.author,
    title: post.title,
    body: post.body
  });
});

app.listen(8080);

console.log('listenting on port 8080');
