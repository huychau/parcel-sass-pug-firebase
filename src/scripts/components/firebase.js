
const FirebaseComponent = {
  init() {
    // Set the configuration for your app
    // TODO: Replace with your project's config object
    var firebaseConfig = {
      apiKey: "AIzaSyCSAnwAwb74Q9BFYFAhneKn2uKF_jsd3OY",
      authDomain: "parcel-sass-pug-firebase.firebaseapp.com",
      databaseURL: "https://parcel-sass-pug-firebase.firebaseio.com",
      projectId: "parcel-sass-pug-firebase",
      storageBucket: "",
      messagingSenderId: "10997895787",
      appId: "1:10997895787:web:07e18707d478ccdf"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  },

  /**
   * Convert A Firebase Database Snapshot/Collection To An Array In Javascript
   * @param {*} data
   */
  convertData(data) {
    var results = [];

    Object.keys(data).forEach(function (key) {
      var item = data[key];
      item.key = key;

      results.push(item);
    });

    return results;
  },

  /**
   * Get an item of resource by ID/Key
   * @param {String} source The resource of data
   * @param {String} id ID/Key of item
   * @param {Function} successCallback
   * @param {Function} errorCallback
   */
  get(source, id, successCallback, errorCallback) {
    let ref = firebase.database().ref(source + id);
    return ref.once('value', successCallback, errorCallback);
  },

  /**
   * Get list of items by resource
   * @param {String} source The resource of data
   * @param {Function} successCallback
   * @param {Function} errorCallback
   */
  getAll(source, successCallback, errorCallback) {
    let ref = firebase.database().ref(source);
    return ref.on('value', successCallback, errorCallback);
  },

  /**
   * Add new item to data resource
   * @param {String} source The resource of data
   * @param {Object} item New object item
   */
  add(source, item) {
    let ref = firebase.database().ref(source);
    return ref.push(item);
  },

  /**
   *
   * @param {String} source The resource of data
   * @param {String} id ID/Key of item
   * @param {Object} updatedItem The update item object
   */
  update(source, id, updatedItem) {
    let ref = firebase.database().ref(`${source}/${id}`);
    return ref.update(updatedItem);
  },

  /**
   *
   * @param {String} source The resource of data
   * @param {String} id ID/Key of item
   */
  remove(source, id) {
    let ref = firebase.database().ref(`${source}/${id}`);
    return ref.remove();
  }
};

export default FirebaseComponent;
