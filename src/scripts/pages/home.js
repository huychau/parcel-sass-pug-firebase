
/**
 * Homepage scripts
 */
import Common from '../common.js';
import FirebaseComponent from '../components/firebase.js';

const Homepage = {
  init: function () {
    Common.init();

    this.getPosts();
  },

  /**
   * Create simple post object
   * @param {String} title
   * @param {String} content
   */
  createPost: function (title, content) {
    let post = {
      createAt: new Date().valueOf(),
      title: title,
      content: content,
    };

    let ref = firebase.database().ref('posts/');

    ref.push(post);
  },

  /**
   * Get a single post by ID
   * @param {String} id
   */
  getPost: function (id) {
    let ref = firebase.database().ref('posts/' + id);
    ref.once('value', function (snapshot) {
      console.log(snapshot.val());

    }, function (errorObject) {
      console.log('The read failed: ' + errorObject.code);
    });
  },

  /**
   * Get all posts
   */
  getPosts: function () {
    let ref = firebase.database().ref('posts/');
    ref.on('value', function (snapshot) {
      let posts = FirebaseComponent.convertData(snapshot.val());

      console.log(posts);

    }, function (errorObject) {
      console.log('The read failed: ' + errorObject.code);
    });
  },

  /**
   * Update a post by ID
   * @param {String} id
   * @param {Object} postUpdated
   */
  updatePost: function (id, postUpdated) {
    let ref = firebase.database().ref('posts/' + id);

    ref.update(postUpdated);
  },

  /**
   * Remove a post by ID
   * @param {String} id
   */
  removePost: function (id) {
    let ref = firebase.database().ref('posts/' + id);
    ref.remove();
  }

};

Homepage.init();
