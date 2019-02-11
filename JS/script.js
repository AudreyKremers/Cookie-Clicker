(function(){

	//Étape 2 et 3

	var score = 0;
	var valueClick = 1;
	function afficheScore(){
		document.getElementById("score").innerHTML = score;
	}
	document.getElementById("click").addEventListener("click", function() {
		score = score + valueClick;
		
		afficheScore();
		disablerBonus();
    });
	
	//Étape 14: désactiver les boutons (pour Bonus)

	function disablerBonus(){
		if (score >= 50) {
			document.getElementById("bonus").removeAttribute("disabled");

		} else {
			document.getElementById("bonus").setAttribute("disabled","true");
		}

	}

	// Étape 13: achat d'un bonus

	document.getElementById("bonus").addEventListener("click", function() {
		if (score >= 50) {
			score = score - 50; afficheScore();
			valueClick = valueClick * 2;
			var counter = 10;
			var timing = setInterval(function(){
				console.log(counter);
				counter--;
				if(counter == 0){
					valueClick = valueClick / 2;
	        	clearInterval(timing);
	        	}
	    	}, 1000);
		}
    });
    disablerBonus();

})();