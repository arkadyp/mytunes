// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = LibraryEntryView.extend({

  className: 'queueEntry',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.dequeue();
      this.render();
    }
  }

});
