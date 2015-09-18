
var game = new Game;
$('.game').click(function(){
	// var game = new Game;
	game.start();
	var playerAName = game.players.playerA.name;
	var playerBName = game.players.playerB.name;
	var parentEl = $('.player');
	var attackerID = $(parentEl).attr('id');
	// console.log(attackerID);
	var attacker = game.players[attackerID];

	
	console.log(parentEl);

	

});



$('.hit').click(function(){
	var parentEl = $(this).parent();
	// console.log(parentEl);
	var attackerID = $(parentEl).attr('id');
	// console.log(attackerID);
	var attacker = game.players[attackerID];
	var opponent = attackerID === 'playerA' ? game.players['playerB'] : game.players['playerA'];
	
	var damage = attacker.hitPower;
	console.log(damage);
  opponent.life -= damage;
  game.condition(attacker,opponent);
  game.updateStats();
  


})

$('.kick').click(function(){
	var parentEl = $(this).parent();
	// console.log(parentEl);
	var attackerID = $(parentEl).attr('id');
	// console.log(attackerID);
	var attacker = game.players[attackerID];
	var opponent = attackerID === 'playerA' ? game.players['playerB'] : game.players['playerA'];
	
	var damage = attacker.kickPower;

  opponent.life -= damage;
  game.condition(attacker,opponent);
  game.updateStats();
  

})







