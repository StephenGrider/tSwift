angular.module('starter.controllers', ['ngSanitize'])

.controller('DashCtrl', function($scope) {
})

.controller('BuyCtrl', function($scope, Songs) {

  $scope.songs = Songs.lockedSongs()


})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope, Songs) {

  $scope.songs = Songs.all();

  $scope.getItemHeight = function(item, index) {
    return 445;
  };
})

.controller('SongDetailCtrl', function($scope, $stateParams, Songs, $sce){
  $scope.song = Songs.get($stateParams.songId)
  var postRef = new Firebase('https://intense-fire-1410.firebaseio.com/' + $scope.song.id);
  var limitRef = postRef.limit(20);
  $scope.firebaseLoaded = false;

  limitRef.on('value', function(existingPosts) {
    $scope.firebaseLoaded = true;
    var postArray = [];
    for(key in existingPosts.val()){
      postArray.unshift(existingPosts.val()[key]);
    }
    $scope.posts = postArray;
    $scope.$apply();
  });

  $scope.user = {name: 'guest', last: 'visitor'};

  $scope.postSubmit = function(){
    if(this.postData.username && this.postData.message){
      postRef.push({
        username: this.postData.username,
        message: this.postData.message
      });
      this.postData.username = ""
      this.postData.message = ""
    } else{
      alert('Make sure you enter both a username and message');
    }
  }
  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }
});
