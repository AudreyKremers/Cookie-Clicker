(function(){
  
    var score = 0;
    var valueClick = 1;
    //var Score = 1;
    var multiplicateur = 1;
    var multiPrix = 50;
    var bonusPrix = 50;
    var scorer = document.querySelector("#score");
    var clicker = document.querySelector("#click");
    var valueCliquer = document.querySelector("#clickValue span");
    var multiplier = document.querySelector("#multiplier");
    var multicompter = document.querySelector("#multicompte");
    var multiplierPrix = document.querySelector("#multiplier .prix");
    var bonuserPrix = document.querySelector("#bonus .prix");
    var autoclicker = document.querySelector("#autoclicker");
    var bonuser = document.querySelector("#bonus");
    var counter = 10;
    var bonusClick = 0;
    var prixAutoclick = 500;
    var seconds = 30;


		/*console.log("valueClick = "+valueClick+" multiplicateur = "+
			multiplicateur+" autoclicker = "+autoclicker+"multicompter ="+multicompter);*/

  //autoclick gratuit

  var final = setInterval(function(){
			if(score >= 200 && score < 500){
					score=score + multiplicateur;
					console.log(score);
					document.getElementById('score').innerHTML = score;
			}
			else if(score >= 500){
					clearInterval(final);
			}
	},1000);

  
  
/* partie 3*/

	//fonction qui affiche le score dans le html
  
		function afficheScore(){ 
				scorer.innerHTML = score;
			}

	//fonction qui affiche la valeur du clic en dessous du score dans le html

		function afficheValueClick(){ 
				valueCliquer.innerHTML = multiplicateur;
			}

/* partie 4, 5, 6, 7, 8 */

	//fonction pour augmenter la valeur de multiplicateur

		function augmenterMultiplicateur(){
				multiplicateur = multiplicateur + 1;
			}


	//fonction qui change le prix pour le doubler au suivant clic sur multiplier et affiche le prix

		function changePrixMulti(){
				//multiPrix = multiPrix * multiplicateur;
				if(multiplicateur>1){
						     multiPrix = multiPrix + multiPrix;
						    }
				var messagePrix = "Prix : " + multiPrix+" cookies";
				multiplierPrix.innerHTML = messagePrix;
				console.log(multiPrix);
			}
  
  //achat autoclicker
  
  document.getElementById('autoclicker').addEventListener("click",function(){
			if(score >= prixAutoclick){
					score-=prixAutoclick;
					document.getElementById('score').innerHTML = score;
					prixAutoclick+=500;    
	function printTimeUntil10() {			
			seconds--; 
			console.log("Seconds elapsed: " + seconds);
			score +=valueclick;
			console.log(score);
			document.getElementById('score').innerHTML = score;

			if (seconds === 0) {
					console.log("30 seconds has elapsed!")
					seconds = 30;
					clearInterval(interval); 
			}
	}

	var interval = setInterval(printTimeUntil10, 1000);
	document.getElementsByClassName('nom')[1].innerHTML = "autoclick " + prixAutoclick + " $";
	
}
})

	
	// fonction qui affiche le prix du bouton bonus
		
		function afficheBonusPrix(){
			bonuserPrix.innerHTML = "Prix : " + bonusPrix +" cookies";

			}
	
	//fonction pour désactiver un bouton multiplier avec l'attribut disabled

		function disablerMulti(){

				if(score>multiPrix){
					//console.log("score plus grand que prix du multiplier");
					multiplier.removeAttribute("disabled");	
				}
				
				else{
					multiplier.setAttribute("disabled","true");				
				}

			}

	//fonction pour désactiver un bouton autoclick avec l'attribut disabled

		function disablerAuto(){

				if(score>=prixAutoclick){
					//console.log("score entre 200 et 500");
					autoclicker.removeAttribute("disabled");
				}

				else{
					autoclicker.setAttribute("disabled","true");				
				}
			}

	//Étape 14: désactiver les boutons (pour Bonus)

		function disablerBonus(){

			if(score >= 50 && counter === 10 && bonusClick === 0){
				bonuser.removeAttribute("disabled");
				}
			else {
				bonuser.setAttribute("disabled","true");
				//console.log("disable ok");
			}

		}

	//fonction qui modifie le texte du span#multicompte du btn multiplier dependant de var multiplicateur
	//le prochain clic sur le bouton multiplier donnera x clic en plus pour augmenter le score

		function afficheMultiTxt(){
				var multexter = "+ "+ (multiplicateur+1) +" par clic";
				multicompter.innerHTML=multexter;
			}

	//désactive les btn quand score pas assez élevé au chargement de page

		disablerMulti();
		disablerAuto();
		disablerBonus();

	//initialise le text du premier bouton multiplier

		afficheMultiTxt();

	//initialise le prix du premier bouton multiplier et du bonus

		changePrixMulti();
		afficheBonusPrix();

	//initialise le texte d'affichage de la valeur du clic

		afficheValueClick();


	//lors du click sur le bouton click : change le score, l'affiche et check la possibilité d'activer ou non les autres btn

		clicker.addEventListener("click", function() { 
			   score = score + multiplicateur; 
			   afficheScore(); 
			   disablerMulti();
			   disablerAuto();
			   disablerBonus();
			});

	//lors du clic sur le btn, changer la valeur du clic et payer 50 de score, 
	//afficher le score, désactiver le btn si score trop peu élevé, modifie le texte dans le btn
	//affiche la nouvelle valeur du clic change le prix du bouton suivant

		multiplier.addEventListener("click", function() {
			   score = score - multiPrix ;
			   afficheScore();

			   disablerMulti();
			   disablerAuto();
			   disablerBonus();

			   augmenterMultiplicateur();
			   afficheMultiTxt();
			   afficheValueClick();
			   changePrixMulti();
			});


/* partie 13 achat d'un bonus*/

		bonuser.addEventListener("click", function() {
			bonusClick ++;
			
			score = score - 50; afficheScore();

			var multidouble = multiplicateur * 2;
			multiplicateur = multiplicateur * 2;
			afficheMultiTxt();
			
			var timing = setInterval(function(){
							console.log(counter);
							counter--;
							if(counter == 0){
									var lastmulti = multiplicateur;
									var diferens = lastmulti - multidouble;
									multiplicateur = (multidouble/2) + diferens;

									afficheMultiTxt();
									afficheValueClick();
									counter = 10;
									disablerBonus();
									bonusClick=0;
									clearInterval(timing);
									}
		    					}, 1000);
			
			disablerMulti();
			disablerAuto();
			disablerBonus();
			afficheValueClick();
    		});
})();
