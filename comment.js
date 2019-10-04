module.exports = {
    getComments(req, res) {
      app.get("/posts/:postId/comments", (req, res) => {
        res.status(200).send(store.posts);
      });
    },

    addComment(req, res) {
      app.post("/posts/:postId/comments", (req, res) => {
        let newPost = req.body;
        let id = store.posts.length;

        store.posts.push(newPost);

        res.status(201).send({id: id});

      });
    },

    updateComment(req, res) {
      app.put("/posts/:postId/comments/commentId", (req, res) => {
        store.posts[req.params.id] = req.body;

        res.status(200).send(store.posts[req.params.id]);


      });
    },

    removeComment(req, res) {
      app.delete("/posts/:postId/comments/commentId", (req, res) => {
        store.posts.splice(req.params.id, 1);

        res.status(204).send();
      });
    }

};
