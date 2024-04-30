//classe Author
const Post = require('./post.js')

class Author {
    constructor(name){
        this.account = new Post(name)
    }

    createPost(posting){
        this.account.addComment(posting)
        this.account.size ++
        return posting
    }
    removePost(index){
        index --
        this.account.size --
        this.account.comments.splice(index,1)
    }
}

module.exports = Author