
const express = require("express")
const logger = require("morgan")
const errorhandler = require("errorhandler")
const bodyParser = require("body-parser")

const pos = require("./routes/posts.js");
const com = require("./routes/comment.js");

const app = express();

let store = {

  posts:[{

      id:"",
      url: "",
      text:"",

        comments:[{
          id:"",
          text:"",
        }]
    }]
};

store.posts = [];


app.use(pos.getPosts());
app.use(pos.addPost());


app.use(bodyParser.json());
app.use(logger("dev"));
app.use(errorhandler());

app.listen(3000);
console.log("Listening on http://localhost/3000");
