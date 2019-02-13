(function(){
	var score = 0;
	var Score = 20;
	var scoreMutli = Score + multiplicateur;
	var multiplicateur = 0;
	var Multiplicateur = 1;
	var prixMultiplicaeur = 50;
	var prixAutoclick = 500;
	var prixBonus = 600;
	var autoClicker;
	var seconds = 30;
	var stockChekScore = score;
	function acg(){
			score+=Score;
			document.getElementById('score').innerHTML = score;
	};

	var final = setInterval(function(){
			if(score >= 200 && score < 500){
					score+=Score;
					console.log(score);
					document.getElementById('score').innerHTML = score;
			}
			else if(score >= 500){
					clearInterval(final);
			}
	},1000);

	

	document.getElementById('click').addEventListener('click',function(){
			score+=Score;
			document.getElementById('score').innerHTML = score;
			console.log(score); 
			
			
	});



	document.getElementById('multiplier').addEventListener("click",function(){
					
			if(score >= prixMultiplicaeur){
					multiplicateur += Multiplicateur;
					console.log(multiplicateur);
					Score++;
					score -= prixMultiplicaeur;
					document.getElementById('score').innerHTML = score;
					prixMultiplicaeur *= 2;
					document.getElementsByClassName('nom')[0].innerHTML = "multiplicateur x " + multiplicateur + " prix : " + prixMultiplicaeur;
			
					}
					
							
	});

	document.getElementById('autoclicker').addEventListener("click",function(){
			if(score >= prixAutoclick){
					score-=prixAutoclick;
					document.getElementById('score').innerHTML = score;
					prixAutoclick+=500;    
	function printTimeUntil10() {
			
			seconds--; 
			console.log("Seconds elapsed: " + seconds);
			score +=Score;
			console.log(score);
			document.getElementById('score').innerHTML = score;

			if (seconds === 0) {
					console.log("30 seconds has elapsed!")
					clearInterval(interval); 
			}
	}

	var interval = setInterval(printTimeUntil10, 1000);
	document.getElementsByClassName('nom')[1].innerHTML = "autoclick " + prixAutoclick + " $";
	
}
	


})

			
})();
