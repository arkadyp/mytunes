// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  
  tagName: 'table',
  className: 'songQueueView',

  render: function() {
    this.$el.html('<th>Queue</th>');
    return this.$el;
  }

});
