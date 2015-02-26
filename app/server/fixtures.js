Meteor.startup(function () {
  if (CategoriesCollection.find().count() === 0) {
    var categories = [{
      name: 'Blogs'
    }, {
      name: 'News'
    }, {
      name: 'Projects'
    }, {
      name: 'Other'
    }];

    while (categories.length > 0) {
      CategoriesCollection.insert(categories.pop());
    }
    console.log('Added categories');
  }
});