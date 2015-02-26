Meteor.publish('links', function (options) {
  console.log(options);
  check(options, {
    linksLimit: Number
  });
  var qryOptions = {
    limit: options.linksLimit,
    sort: {
      votes: -1
    }
  };
  console.log(qryOptions);
  return LinksCollection.find({}, qryOptions);
});

Meteor.publish('categories', function () {
  return CategoriesCollection.find({}, {
    sort: {
      name: 1
    }
  });
});