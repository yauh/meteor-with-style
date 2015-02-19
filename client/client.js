// counter starts at 0
Session.setDefault('counter', 0);

Template.linkList.helpers({
  links: function () {
    return LinksCollection.find();
  }
});

Template.addLink.events({
  'click button#save-link': function (evt) {
    evt.preventDefault();
    var url = $("input[id=link-url]").val();
    var text = $("input[id=link-text] ").val();
    LinksCollection.insert({url: url, text: text});
  }
});
