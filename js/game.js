function Player() {
	this.name = 'Default Player',
	this.life = 100,
	this.hitPower = 9,
	this.kickPower = 11
}


	Player.prototype.updateName = function(){
		this.name = prompt('Please enter this player\s name.')
	}

	Player.prototype.updateHit = function(){
		this.hitPower = prompt('Please enter this player\s Hit Power as an integer between 1 and 10.')
		if (!isInt(this.hitPower) || ((this.hitPower < 1) || (this.hitPower > 10))) {
			
			this.updateHit();
		}
	}

	Player.prototype.updateKick = function(){
		this.kickPower = prompt('Please enter this player\s Kick Power as an integer between 11 and 20.')
		if (!isInt(this.kickPower) || ((this.kickPower < 11) || (this.kickPower > 20))) {
			this.updateKick();
		}
	}

	function isInt(n){
		return n%1===0;
	}

	Player.prototype.updateAll = function(){
		this.updateName();
		this.updateHit();
		this.updateKick();
	}

function Game(){
	
}

Game.prototype.start = function(){
	this.players = {
		playerA: new Player(),
		playerB: new Player()
	}

	this.players.playerA.updateAll();
  this.players.playerB.updateAll();

  this.updateStats();
}

Game.prototype.updateStats = function() {
		$('#playerA .progress-bar').css("width",this.players.playerA.life + "%");
		
    $('#playerA .name').text(this.players.playerA.name);
    $('#playerB .progress-bar').css("width",this.players.playerB.life + "%");
    $('#playerB .name').text(this.players.playerB.name);
}



	Game.prototype.condition = function(attacker,opponent){
		// if (playerLife <= 0) {
		// 	// this.setMaxLife();
			console.log(attacker,opponent);
			if (opponent.life <= 0) {
				opponent.life = 0;
				this.gameOver(attacker.name);

		}else{
			return opponent.life;
		}
	}
	
	Game.prototype.gameOver = function(winner){
		
			$('.modal-wrap').show();
			$('body').addClass('modal-on');
			$('#winner').text(winner + ' Wins!')
	
			$('.exit, .no').click(function(){
								$('.modal-wrap').hide();
				$('body').removeClass('modal-on');
			});
			$('.yes').click(function(){
			$('body').removeClass('modal-on');
			$('.modal-wrap').hide();
			game.start();
		});
	
}







