Template.addLink.events ( {
  'submit form': function (evt) {
    evt.preventDefault ();
    // Ensure that URL always has a correct prefix
    var url = ensureHttpPrefix ( $ ( 'input[id=link-url]' ).val () );
    var text = $ ( 'input[id=link-text]' ).val ();
    var category = $ ( 'select[id=link-category]' ).val ();
    Meteor.call (
      'AddLink',
      { url: url, text: text, category: category },
      function (error) {
        if (error) {
          return alert ( 'Error: ' + error.error );
        }
        else {
          Router.go ( '/' );
        }
      } );
  }
} );
