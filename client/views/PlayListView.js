var PlayListView = LibraryView.extend({
  tagName: 'table',

  id: 'playlistView',

  initialize: function() {
    this.render();
    this.collection.on('add', this.render, this );
    this.collection.on('remove', this.render, this );
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html('<th>Playlist</th>').append(
      this.collection.map(function(song){
        return new PlaylistEntryView({model: song}).render();
      })
    );
    return this.$el;
  }
});