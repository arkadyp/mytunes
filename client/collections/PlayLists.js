var PlayLists = Backbone.Collection.extend({
  model: Songs,
  _currentPlayListName: 'default',
  initialize: function(){
  },
  addPlaylist: function(name) {
    var playlist = new Songs();
    playlist.name = name;
    // debugger;
    this.collection.add(playlist);
    this._currentPlayListName = name;
  },
  appendToCurrentPlaylist: function(song){
    var currentPlaylist = this.collection.where({name: _currentPlayListName});

  }

});