const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 5000;

// Blog yazılarını JSON dosyasından al
app.get('/api/posts', (req, res) => {
  fs.readFile(path.join(__dirname, 'posts.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading posts' });
    }
    res.json(JSON.parse(data));
  });
});

// Tek bir yazıyı almak için API
app.get('/api/posts/:id', (req, res) => {
  const { id } = req.params;
  fs.readFile(path.join(__dirname, 'posts.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading posts' });
    }
    const posts = JSON.parse(data);
    const post = posts.find(post => post.id === parseInt(id));
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  });
});

// Yeni bir blog yazısı eklemek için API
app.post('/api/posts', express.json(), (req, res) => {
  const { title, content } = req.body;
  fs.readFile(path.join(__dirname, 'posts.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading posts' });
    }
    const posts = JSON.parse(data);
    const newPost = { id: posts.length + 1, title, content };
    posts.push(newPost);

    fs.writeFile(path.join(__dirname, 'posts.json'), JSON.stringify(posts, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error saving post' });
      }
      res.status(201).json(newPost);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
