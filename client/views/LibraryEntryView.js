// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',
  className: 'libraryEntry',

  template: _.template('<td class="song">(<%= artist %>)</td>\
                        <td class="song"><%= title %></td>\
                        <td><%= playCount %></td>\
                        <td><button class="addToPlayList">Add to Playlist</button></td>'),

  events: {
    'click .song': function() {
      this.model.enqueue();
    },
    'click .addToPlayList' :function(){
      this.model.addToPlayList();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
