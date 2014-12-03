define("scribe-plugin-loading", ["jquery"], function($) {
  return function(options) {
    options = options || {};
    var uniqueId = 0;

    return function(scribe) {
      scribe.loading = function() {
        this.insertHTML("<img id='scribe-loading-"+ ++uniqueId +"' class='"+ options.class +"'></img>");
        return uniqueId;
      };

      scribe.replaceLoading = function(id, node) {
        $(this.el).find("#scribe-loading-"+ id).replaceWith(node);
      };
    };
  };
});
