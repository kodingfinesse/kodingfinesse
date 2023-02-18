const path = require("path")
const fs = require("fs")

const dirPath = path.join(__dirname, "../src/content")
let postlist = []

const getPosts = () => {
    fs.readdir(dirPath, (err, files) => {
        files.forEach(file => {
          postlist.push(file)
        });
        console.log(postlist)
      });
}



getPosts()

console.log(postlist)
