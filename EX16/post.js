//classe Post -> recebe comentários e pertence a um autor.
const Comment = require('./comment.js')

class Post {
    constructor(name){
        this.name = name
        this.comments = new Comment().comment
        this.size = this.comments.length
    }
    addComment(comment){
        this.comments.push(comment)
    }

}

module.exports = Post