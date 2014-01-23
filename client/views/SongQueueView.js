// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = LibraryView.extend({

  id: 'queueView',

  initialize: function() {
    this.render();
    this.collection.on('add', this.render, this );
    this.collection.on('add', this.collection.playFirst, this.collection);
    this.collection.on('remove', this.render, this );
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
    return this.$el;
  }

});
