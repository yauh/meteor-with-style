// Configuration
Router.configure({
  layoutTemplate: 'mainLayout'
});

// Routes
Router.route('/', function () {

  this.render('linkList');
}, {
  name: 'home'
});

Router.route('/new', {
  name: 'new',
  subscriptions: function () {
    return Meteor.subscribe('categories');
  },
  onBeforeAction: function () {
    if (!Meteor.userId()) {
      // if the user is not logged in, render the Login template
      this.render('loginRequest');
    } else {
      // otherwise don't hold up the rest of hooks or our route/action function
      // from running
      this.next();
    }
  },

  action: function () {
    if (this.ready()) {
      this.render('addLink');
    } else {
      this.render('Loading categories');
    }
  },
  data: function () {
    return {
      categories: CategoriesCollection.find()
    };
  }
});