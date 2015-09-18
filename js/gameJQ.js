
var game = new Game;
$('.game').click(function(){
	game.start();
	var playerAName = game.players.playerA.name;
	var playerBName = game.players.playerB.name;
	var parentEl = $('.player');
	var attackerID = $(parentEl).attr('id');
	var attacker = game.players[attackerID];

});



$('.hit').click(function(){
	var parentEl = $(this).parent();
	var attackerID = $(parentEl).attr('id');
	var attacker = game.players[attackerID];
	var opponent = attackerID === 'playerA' ? game.players['playerB'] : game.players['playerA'];
	var damage = attacker.hitPower;
  opponent.life -= damage;
  game.condition(attacker,opponent);
  game.updateStats();

})

$('.kick').click(function(){
	var parentEl = $(this).parent();
	var attackerID = $(parentEl).attr('id');
	var attacker = game.players[attackerID];
	var opponent = attackerID === 'playerA' ? game.players['playerB'] : game.players['playerA'];
	var damage = attacker.kickPower;
  opponent.life -= damage;
  game.condition(attacker,opponent);
  game.updateStats();

})







