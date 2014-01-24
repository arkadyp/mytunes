// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({
  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());
    this.set('playlists', new PlayLists());

    this.get('songQueue').on('play', function(song){
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song){
      this.get('songQueue').add(song);
    }, this);

    params.library.on('addToPlayList', function(song){
      this.get('playlists').add(song);
    }, this);

    this.get('songQueue').on('dequeue', function(song){
      this.get('songQueue').remove(song);
      this.get('songQueue').playFirst();
    }, this);
  },

  addPlaylist: function(name) {
    this.get('playlists').addPlaylist(name);
  }
});
