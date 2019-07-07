
const FirebaseComponent = {
  init: function () {
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
  }
};

export default FirebaseComponent;
