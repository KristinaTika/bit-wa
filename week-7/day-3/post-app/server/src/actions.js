const Post = require("./entities.js");
const lorem = require("lorem-ipsum");

const createPosts = () => {
   let listOfPosts = [];
   for (var i = 0; i < 10; i++){
       const id = parseInt(Math.random() *(150-100) +100);
       const title = lorem({
           count: 3,
           units: 'words'
       });
       const intro = lorem({
           count: 2,
           units: 'sentences'
       });
       const post = new Post(id, title, intro);
       listOfPosts.push(post);
   } 
   return listOfPosts;
}

module.exports = {createPosts};