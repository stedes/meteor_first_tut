// Create a MongoDB Collection
PlayersList = new Mongo.Collection('players');


if(Meteor.isClient){
  console.log("Hello client");

  Template.leaderboard.helpers({
    'player': function(){
      return PlayersList.find({},{sort: {score:-1}});
    }
    ,
    'selectedClass': function(){
      var playerId = this._id;
      var selectedPlayer = Session.get('selectedPlayer')
      if(playerId === selectedPlayer){ return "selected"};
    }
  });

  Template.leaderboard.events({
    'click .player': function(){
      var playerId = this._id;
      Session.set('selectedPlayer', playerId);
    }
    ,
    'click .increment': function(){
      var selectedPlayer = Session.get('selectedPlayer');
      PlayersList.update(selectedPlayer, {$inc: {score: 5}});
    }
    ,
    'click .decrement': function(){
      var selectedPlayer = Session.get('selectedPlayer');
      PlayersList.update(selectedPlayer, {$inc: {score: -5}});
    }
  });

};

if(Meteor.isServer){
  console.log("Hello server");
};
