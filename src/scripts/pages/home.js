
/**
 * Homepage scripts
 */
import Common from '../common.js';
import FirebaseComponent from '../components/firebase.js';

const Homepage = {
  init() {
    Common.init();

    this.getPosts();
  },

  /**
   * Create post
   * @param {Object} post
   */
  createPost(post) {
    FirebaseComponent.add('posts', post)
  },

  /**
   * Get a single post by ID
   * @param {String} id
   */
  getPost(id) {
    FirebaseComponent.get('posts', id,
      function (snapshot) {
        console.log(snapshot.val());
      }, function (errorObject) {
        console.log('The read failed: ' + errorObject.code);
      }
    );
  },

  /**
   * Get all posts
   */
  getPosts() {
    FirebaseComponent.getAll('posts',
      function (snapshot) {
        let posts = FirebaseComponent.convertData(snapshot.val());
        console.log(posts);
      }, function (errorObject) {
        console.log('The read failed: ' + errorObject.code);
      }
    );
  },

  /**
   * Update a post by ID
   * @param {String} id
   * @param {Object} postUpdated
   */
  updatePost(id, postUpdated) {
    FirebaseComponent.add('posts', id, postUpdated)
  },

  /**
   * Remove a post by ID
   * @param {String} id
   */
  removePost(id) {
    FirebaseComponent.add('posts', id)
  }

};

Homepage.init();
