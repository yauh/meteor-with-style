// methods running both on the server and the client
Meteor.methods({
  'AddLink': function (data) {
    check(data, {
      url: String,
      text: String,
      category: String
    });
    if (!this.userId) {
      throw new Meteor.Error('You have to login');
    }
    data.timestamp = new Date();
    data.votes = 0;
    data.userId = this.userId;
    data.creator = Meteor.users.findOne(data.userId).username;
    return LinksCollection.insert(data);
  },
  'AddVote': function (data) {
    check(data, {
      linkId: String
    });
    if (!this.userId) {
      throw new Meteor.Error('You have to login to be able to vote for links');
    }
    data.userId = this.userId;
    // check if user voted already
    if (LinksCollection.find({
        _id: data.linkId,
        voters: data.userId
      }).count() === 0) {
      return LinksCollection.update(
        data.linkId, {
          $push: {
            voters: data.userId
          },
          $inc: {
            votes: 1
          }
        }
      );
    } else {
      throw new Meteor.Error('You have already upvoted this link');
    }
  },
  'RemoveLink': function (data) {
    check(data, {
      linkId: String
    });
    if (this.userId !== LinksCollection.findOne({
        _id: data.linkId
      }).userId) {
      throw new Meteor.Error(
        'You cannot delete this link because you did not add it'
      );
    }
    data.userId = this.userId;
    LinksCollection.remove({
      _id: data.linkId
    });
  }
});