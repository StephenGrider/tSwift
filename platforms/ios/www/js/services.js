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
    { id:0, name:"The Last Time",videoUrl:"http://www.dailymotion.com/embed/video/k5eJl9iFz5BYqE7KkzM", imgUrl:"the_last_time.jpg", date:2013, locked:true, likes:240, postCount:100},
    { id:1, name:"Red",videoUrl:"http://www.dailymotion.com/video/k2kyOPaRmTfCHl7Kks4", imgUrl:"red.jpg", date:2013, locked:false, likes:153, postCount:211},
    { id:2, name:"Everything Has Changed",videoUrl:"http://www.dailymotion.com/video/k5gonqlMzfEkBe7KjXW", imgUrl:"everything_has_changed.jpg", date:2013, locked:true, likes:240, postCount:96},
    { id:3, name:"Highway Don't Care",videoUrl:"http://www.dailymotion.com/video/k7CALjAqT3W1mv7Knv8", imgUrl:"highway_dont_care.jpg", date:2013, locked:false, likes:59, postCount:189},
    { id:4, name:"22",videoUrl:"http://www.dailymotion.com/video/k3oxKD9TQfurBN7KjIy", imgUrl:"22.jpg", date:2013, locked:false, likes:54, postCount:107},
    { id:5, name:"I Knew You Were Trouble",videoUrl:"http://www.dailymotion.com/video/krRJfPuOUSl0fq7Kk8N", imgUrl:"i_knew_you_were_trouble.png", date:2012, locked:false, likes:74, postCount:160},
    { id:6, name:"Begin Again",videoUrl:"http://www.dailymotion.com/video/k1mHvHhDxF6Uun7KjPu", imgUrl:"begin_again.jpg", date:2012, locked:false, likes:156, postCount:83},
    { id:7, name:"We Are Never Ever Getting Back Together",videoUrl:"http://www.dailymotion.com/video/k6ZY2q1pXNgZDd7KkDD", imgUrl:"we_are_never_ever_getting_back_together.jpg", date:2012, locked:true, likes:151, postCount:139},
    { id:8, name:"Both of Us",videoUrl:"http://www.dailymotion.com/video/k6FQfSr7NCkqgj7Knwj", imgUrl:"both_of_us.jpg", date:2012, locked:false, likes:285, postCount:249},
    { id:9, name:"Safe & Sound",videoUrl:"http://www.dailymotion.com/video/k29ReOWbAFk6NB7KjDt", imgUrl:"safe_and_sound.jpg", date:2012, locked:false, likes:342, postCount:268},
    { id:10, name:"Ours",videoUrl:"http://www.dailymotion.com/video/k1p9NwrenyTN2Y7Kkol", imgUrl:"ours.jpg", date:2011, locked:false, likes:56, postCount:216},
    { id:11, name:"Sparks Fly",videoUrl:"http://www.dailymotion.com/video/k1xCtngIhTVsgt7KktA", imgUrl:"sparks_fly.jpg", date:2011, locked:false, likes:173, postCount:135},
    { id:12, name:"The Story of Us",videoUrl:"http://www.dailymotion.com/video/k3kDg53lXF0qTB7KkBx", imgUrl:"the_story_of_us.jpg", date:2011, locked:false, likes:281, postCount:135},
    { id:13, name:"Mean",videoUrl:"http://www.dailymotion.com/video/k2EC61hNyOswOf7KkgO", imgUrl:"mean.jpg", date:2011, locked:false, likes:196, postCount:136},
    { id:14, name:"Back to December",videoUrl:"http://www.dailymotion.com/video/k2Cqxrxz5RWiGR7KjMO", imgUrl:"back_to_december.jpg", date:2011, locked:false, likes:298, postCount:342},
    { id:15, name:"Mine",videoUrl:"http://www.dailymotion.com/video/k1oAxujhdcrVDY7KkkE", imgUrl:"mine.jpg", date:2010, locked:true, likes:143, postCount:348},
    { id:16, name:"Fearless",videoUrl:"http://www.dailymotion.com/video/kbAwhXDKMxypSn7Kk0z", imgUrl:"fearless.jpg", date:2010, locked:false, likes:274, postCount:312},
    { id:18, name:"Fifteen",videoUrl:"http://www.dailymotion.com/video/k6W2jG2ZJe89BK7Kk2U", imgUrl:"fifteen.jpg", date:2009, locked:false, likes:83, postCount:120},
    { id:19, name:"The Best Day",videoUrl:"http://www.dailymotion.com/video/k4IskOBPpl9se67Kky7", imgUrl:"the_best_day.jpg", date:2009, locked:false, likes:348, postCount:302},
    { id:20, name:"You Belong with Me",videoUrl:"http://www.dailymotion.com/video/k2MPfys8D4VzI57KkN4", imgUrl:"you_belong_with_me.jpg", date:2009, locked:true, likes:313, postCount:196},
    { id:22, name:"White Horse",videoUrl:"http://www.dailymotion.com/video/k5nqZVY1ikN3sp7KkFQ", imgUrl:"white_horse.jpg", date:2009, locked:false, likes:278, postCount:156},
    { id:23, name:"Love Story",videoUrl:"http://www.dailymotion.com/video/k1Z4Us10DDajHj7KkbT", imgUrl:"love_story.jpg", date:2008, locked:false, likes:273, postCount:60},
    { id:24, name:"Change",videoUrl:"http://www.dailymotion.com/video/kUTfES5hrzq4nS7KjVp", imgUrl:"change.jpg", date:2008, locked:true, likes:249, postCount:151},
    { id:26, name:"Picture to Burn",videoUrl:"http://www.dailymotion.com/video/k16fy5apAsx6QJ7Kkq0", imgUrl:"picture_to_burn.jpg", date:2008, locked:false, likes:89, postCount:243},
    { id:27, name:"I'm Only Me When I'm with You",videoUrl:"http://www.dailymotion.com/video/k5LlKHtvqQDeeG7Kkal", imgUrl:"im_only_me_when_im_with_you.jpg", date:2008, locked:false, likes:134, postCount:245},
    { id:28, name:"Our Song",videoUrl:"http://www.dailymotion.com/video/k5p07TJhCWPzTN7KkmC", imgUrl:"our_song.jpg", date:2007, locked:false, likes:283, postCount:294},
    { id:29, name:"Teardrops on My Guitar",videoUrl:"http://www.dailymotion.com/video/k74tjX3KOMPf7e7Kkvo", imgUrl:"teardrops_on_my_guitar.jpg", date:2007, locked:false, likes:219, postCount:234}
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
