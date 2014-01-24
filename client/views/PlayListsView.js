var PlayListsView = Backbone.View.extend({
  initialize: function(){
    this.render();
    this.collection.on('add', this.addPlaylist, this);
  },
  render: function(){
    var html = '<br><br><div class="playlists">~~PLAYLISTS~~\
                  <select class="choosePlaylist">\
                    <option>default</option>\
                  </select>\
                </div>';
    return this.$el.html(html);
  },
  addPlaylist: function(model) {
    console.log(model);
  }
});