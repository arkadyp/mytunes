// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  initialize: function() {
    this.render();
    this.collection.on('add', function(song) {
      console.log(this);
    });
  },
  tagName: 'table',
  className: 'songQueueView',
  render: function() {
    this.$el.html('<th>Queue</th>');
    return this.$el;
  }

});
