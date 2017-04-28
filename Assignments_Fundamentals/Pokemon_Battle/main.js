// $.ajax({url: "http://pokeapi.co/api/v1/pokemon", context: document.body}).done(function(){
//   $( this ).addClass("done");
// })


$.getJSON("http://pokeapi.co/api/v1/pokemon", console.log("success"))


var game = {
  players: [],
  addPlayer: function(name){
    game.players.push(name)
  }
};


function playerConstructor(name){
  player = {};
  player.name = name;
    player.hand = [];
  player.addCard = function(card){
    player.hand.push(card);
  };
  return player;
};


game.addPlayer("Robert")
console.log(game.players)
