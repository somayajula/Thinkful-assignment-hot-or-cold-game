/**
 * HotOrCold number guessing game for Thinkful Frontend Developer Bootcamp.
 */
$(document).ready(function(){
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

		$(".new").click(function() {
			Game.initNewGame();
		});

		/* Define Game Object. */
		var Game = {};

		Game.validateGuess = function () {
			var guess = $("#userGuess").val();

			if (isNaN(guess) || (guess < 1 || guess > 100)) {
				this.showFeedback("Please enter a number between 1 and 100!");
			} else {
				$("#count").text(++this.counter);
				$("#guessList").append("<li>" + guess + "</li>");

				var diff = Math.abs(Game.randomNumber - guess);
				if (diff == 0) {
					this.showFeedback("You got it!! Good job!!");
				} else if (diff <= 5){
					this.showFeedback("Your guess is too hot!")
				} else if (diff <= 10) {
					this.showFeedback("Your guess is getting hot!")
				} else if (diff <= 20) {
					this.showFeedback("Your guess is cold!")
				} else if (diff <= 30){
					this.showFeedback("Your guess is too cold!")
				} else {
					this.showFeedback("Your guess is freezing cold!");
				}
			}
		};

		Game.initNewGame = function () {
			Game.counter = 0;
			this.randomNumber = Math.floor(Math.random() * 100) + 1;
			$("#guessList").html("");
			$("#userGuess").val("");
			$("#count").text(0);
			this.showFeedback("Make your Guess!");
		};

		Game.showFeedback = function(msg) {
			$("#feedback").text(msg);
		};

		$("form").submit(function (event) { // Here we can also use bind as well.
			event.preventDefault();
			Game.validateGuess();
		});

		// Initialize the game on the page load.
		Game.initNewGame();
});
