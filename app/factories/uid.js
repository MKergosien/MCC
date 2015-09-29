define([
  "angular",
], function(angular) {
  angular
  .module("MCCApp.uid", [])
  .factory("uid", function() {
    var uid = null;
    return {
      getUid: function() {
        return uid;
      },
      setUid: function(sentID) {
        uid = sentID;
      }
    };
  });
});