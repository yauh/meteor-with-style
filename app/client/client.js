// defines how many links to load by default
Session.setDefault('linksLimit', 10);

Tracker.autorun(function () {
  Meteor.subscribe('links', {
    linksLimit: parseInt(Session.get('linksLimit'))
  });
});

Template.registerHelper('isActiveRoute', function (routeName) {
  return Router.current().route.getName() === routeName;
});

Template.registerHelper('isMyLink', function () {
  return Meteor.userId() === this.userId;
});

Template.registerHelper('hasMyVote', function () {
  var style = '';
  if (this.voters && this.voters.indexOf(Meteor.userId()) > 0) {
    style = 'disabled';
  }
  return style;
});