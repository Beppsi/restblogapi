module.exports = {

  getPosts(req, res) {
    app.get("/posts", (req, res) => {
      res.status(200).send(store.posts);
    });
  },

  addPost(req, res) {
    app.post("/posts", (req, res) => {

      let id = store.posts.length;

      let message = {
        id,
        text: req.body.text,
      };

      store.posts.push(message);

      res.status(201).send({id: id});

    });
  },

  updatePost(req, res) {
    app.put("/posts/:postId/", (req, res) => {
      store.posts[req.params.id] = req.body;

      res.status(200).send(store.posts[req.params.id]);


    });
  },

  removePost(req, res) {
    app.delete("/posts/:postId/", (req, res) => {
      store.posts.splice(req.params.id, 1);

      res.status(204).send();
    });
  }
}
