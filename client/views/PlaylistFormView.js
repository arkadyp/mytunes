var PlaylistFormView = Backbone.View.extend({
  id: 'playlistForm',
  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.html('<form><input type="text" name="playlist" placeholder="new playlist"></form>');
  }
});