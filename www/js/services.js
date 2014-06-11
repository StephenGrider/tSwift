angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

.factory('Songs', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var songs = [
    { id:0, name:"The Last Time",videoUrl:"http://www.dailymotion.com/embed/video/k5eJl9iFz5BYqE7KkzM", imgUrl:"the_last_time.jpg", date:2013, locked:false, likes:163, postCount:221},
    { id:1, name:"Red",videoUrl:"http://www.dailymotion.com/embed/video/k2kyOPaRmTfCHl7Kks4", imgUrl:"red.jpg", date:2013, locked:false, likes:121, postCount:268},
    { id:2, name:"Everything Has Changed",videoUrl:"http://www.dailymotion.com/embed/video/k5gonqlMzfEkBe7KjXW", imgUrl:"everything_has_changed.jpg", date:2013, locked:false, likes:118, postCount:306},
    { id:3, name:"Highway Don't Care",videoUrl:"http://www.dailymotion.com/embed/video/k7CALjAqT3W1mv7Knv8", imgUrl:"highway_dont_care.jpg", date:2013, locked:false, likes:182, postCount:165},
    { id:4, name:"22",videoUrl:"http://www.dailymotion.com/embed/video/k3oxKD9TQfurBN7KjIy", imgUrl:"22.jpg", date:2013, locked:false, likes:244, postCount:111},
    { id:5, name:"I Knew You Were Trouble",videoUrl:"http://www.dailymotion.com/embed/video/krRJfPuOUSl0fq7Kk8N", imgUrl:"i_knew_you_were_trouble.png", date:2012, locked:false, likes:284, postCount:211},
    { id:6, name:"Begin Again",videoUrl:"http://www.dailymotion.com/embed/video/k1mHvHhDxF6Uun7KjPu", imgUrl:"begin_again.jpg", date:2012, locked:false, likes:92, postCount:203},
    { id:7, name:"We Are Never Ever Getting Back Together",videoUrl:"http://www.dailymotion.com/embed/video/k6ZY2q1pXNgZDd7KkDD", imgUrl:"we_are_never_ever_getting_back_together.jpg", date:2012, locked:false, likes:64, postCount:129},
    { id:8, name:"Both of Us",videoUrl:"http://www.dailymotion.com/embed/video/k6FQfSr7NCkqgj7Knwj", imgUrl:"both_of_us.jpg", date:2012, locked:false, likes:331, postCount:108},
    { id:9, name:"Safe & Sound",videoUrl:"http://www.dailymotion.com/embed/video/k29ReOWbAFk6NB7KjDt", imgUrl:"safe_and_sound.jpg", date:2012, locked:false, likes:150, postCount:326},
    { id:10, name:"Ours",videoUrl:"http://www.dailymotion.com/embed/video/k1p9NwrenyTN2Y7Kkol", imgUrl:"ours.jpg", date:2011, locked:false, likes:65, postCount:102},
    { id:11, name:"Sparks Fly",videoUrl:"http://www.dailymotion.com/embed/video/k1xCtngIhTVsgt7KktA", imgUrl:"sparks_fly.jpg", date:2011, locked:false, likes:277, postCount:271},
    { id:12, name:"The Story of Us",videoUrl:"http://www.dailymotion.com/embed/video/k3kDg53lXF0qTB7KkBx", imgUrl:"the_story_of_us.jpg", date:2011, locked:false, likes:67, postCount:149},
    { id:13, name:"Mean",videoUrl:"http://www.dailymotion.com/embed/video/k2EC61hNyOswOf7KkgO", imgUrl:"mean.jpg", date:2011, locked:false, likes:283, postCount:245},
    { id:14, name:"Back to December",videoUrl:"http://www.dailymotion.com/embed/video/k2Cqxrxz5RWiGR7KjMO", imgUrl:"back_to_december.jpg", date:2011, locked:false, likes:162, postCount:224},
    { id:15, name:"Mine",videoUrl:"http://www.dailymotion.com/embed/video/k1oAxujhdcrVDY7KkkE", imgUrl:"mine.jpg", date:2010, locked:false, likes:172, postCount:207},
    { id:16, name:"Fearless",videoUrl:"http://www.dailymotion.com/embed/video/kbAwhXDKMxypSn7Kk0z", imgUrl:"fearless.jpg", date:2010, locked:false, likes:251, postCount:183},
    { id:18, name:"Fifteen",videoUrl:"http://www.dailymotion.com/embed/video/k6W2jG2ZJe89BK7Kk2U", imgUrl:"fifteen.jpg", date:2009, locked:false, likes:279, postCount:264},
    { id:19, name:"The Best Day",videoUrl:"http://www.dailymotion.com/embed/video/k4IskOBPpl9se67Kky7", imgUrl:"the_best_day.jpg", date:2009, locked:false, likes:234, postCount:124},
    { id:20, name:"You Belong with Me",videoUrl:"http://www.dailymotion.com/embed/video/k2MPfys8D4VzI57KkN4", imgUrl:"you_belong_with_me.jpg", date:2009, locked:false, likes:279, postCount:332},
    { id:22, name:"White Horse",videoUrl:"http://www.dailymotion.com/embed/video/k5nqZVY1ikN3sp7KkFQ", imgUrl:"white_horse.jpg", date:2009, locked:false, likes:251, postCount:261},
    { id:23, name:"Love Story",videoUrl:"http://www.dailymotion.com/embed/video/k1Z4Us10DDajHj7KkbT", imgUrl:"love_story.jpg", date:2008, locked:false, likes:186, postCount:125},
    { id:24, name:"Change",videoUrl:"http://www.dailymotion.com/embed/video/kUTfES5hrzq4nS7KjVp", imgUrl:"change.jpg", date:2008, locked:false, likes:316, postCount:59},
    { id:26, name:"Picture to Burn",videoUrl:"http://www.dailymotion.com/embed/video/k16fy5apAsx6QJ7Kkq0", imgUrl:"picture_to_burn.jpg", date:2008, locked:false, likes:174, postCount:164},
    { id:27, name:"I'm Only Me When I'm with You",videoUrl:"http://www.dailymotion.com/embed/video/k5LlKHtvqQDeeG7Kkal", imgUrl:"im_only_me_when_im_with_you.jpg", date:2008, locked:false, likes:190, postCount:70},
    { id:28, name:"Our Song",videoUrl:"http://www.dailymotion.com/embed/video/k5p07TJhCWPzTN7KkmC", imgUrl:"our_song.jpg", date:2007, locked:false, likes:81, postCount:141},
    { id:29, name:"Teardrops on My Guitar",videoUrl:"http://www.dailymotion.com/embed/video/k74tjX3KOMPf7e7Kkvo", imgUrl:"teardrops_on_my_guitar.jpg", date:2007, locked:false, likes:86, postCount:156}
  ];

  return {
    all: function() {
      return songs;
    },
    get: function(songId) {
      // Simple index lookup
      return songs[songId];
    },
    lockedSongs: function(){
      return _.filter(songs, function(song){
        return song.locked
      })
    }

  }
});
