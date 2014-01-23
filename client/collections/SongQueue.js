// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('ended', function(){
      console.log('Ended from SongQueue');
    })
  },

  playFirst: function(){
    this.models[0].play();
  }

});