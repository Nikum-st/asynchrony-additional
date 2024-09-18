export default class Post {
    constructor(post = {},comments = []){
        this.post = post;
        this.comments = comments;

        this.$post = document.createElement('div');
        this.$post.id = 'post';
        this.$post.classList.add('post');

        const $titlePost = document.createElement('h1');
        $titlePost.classList.add('post__title');
        $titlePost.textContent = this.post.title;

        const $textPost = document.createElement('p');
        $textPost.classList.add('post__text');
        $textPost.textContent = this.post.body;

        const $commentsText = document.createElement('b');
        $commentsText.classList.add('post__comments-text');
        $commentsText.textContent = 'Комментарии';

        const $postCommenst = document.createElement('div');
        $postCommenst.classList.add('post__comments');

        this.$post.append($titlePost);
        this.$post.append($textPost);
        this.$post.append($commentsText);
        this.$post.append($postCommenst);
        
        this.comments.forEach(comment => {
            const $author = document.createElement('span');
            $author.classList.add('post-comment__author');
            $author.textContent = comment.email;

            const $commentText = document.createElement('div');
            $commentText.classList.add('post-comment__text');
            $commentText.textContent = comment.body;

            $postCommenst.appendChild($author);
            $postCommenst.appendChild($commentText);
        })
    }
    setup(){
        return this.$post
    }
}