Template.linkList.helpers({
  links: function () {
    return LinksCollection.find({}, {
      sort: {
        votes: -1
      }
    });
  }
});

Template.linkList.events({
  'click button#show-more': function () {
    var newLimit = Session.get('linksLimit') + 10;
    Session.set('linksLimit', newLimit);
  }
});

Template.link.events({
  'click button.btn-danger': function (evt) {
    // delete link
    evt.preventDefault();
    Meteor.call('RemoveLink', {
      linkId: this._id
    }, function (error) {

      if (error) {
        return alert('Error: ' + error.error);
      } else {
        console.log('yeah, deleted');
      }
    });
  },
  'click button.btn-success': function (evt) {
    // upvote link
    evt.preventDefault();
    Meteor.call('AddVote', {
      linkId: this._id
    }, function (error) {

      if (error) {
        return alert('Error: ' + error.error);
      } else {
        console.log('yeah, upvoted');
        $(evt.currentTarget).addClass('disabled');
      }
    });
  }
});