// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('ended', function(model) {
      model.dequeue();
    });
  },

  playFirst: function(){
    this.models[0] && this.models[0].play();
  }

});