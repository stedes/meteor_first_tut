// Create a MongoDB Collection
PlayersList = new Mongo.Collection('players');


if(Meteor.isClient){
  console.log("Hello client");

  Template.leaderboard.helpers({
    'player': function(){
      return PlayersList.find();
    }
    ,
    'otherHelper': function(){
      return "Something else"
    }
  });

};

if(Meteor.isServer){
  console.log("Hello server");
};
