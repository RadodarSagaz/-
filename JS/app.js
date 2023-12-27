new Vue({
    el: '#app',
    data: {
      posts: [
        { title: 'Пост 1', content: 'Содержание 1', image: 'https://via.placeholder.com/400' },
        { title: 'Пост 2', content: 'Содержание 2', image: 'https://via.placeholder.com/400' },
      ],
      newPost: {
        title: '',
        content: '',
        image: ''
      }
    },
    methods: {
      addPost() {
        this.posts.push({
          title: this.newPost.title,
          content: this.newPost.content,
          image: this.newPost.image
        });
        this.newPost.title = '';
        this.newPost.content = '';
        this.newPost.image = '';
      }
    }
  });