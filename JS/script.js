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
    var autoclickerPrix = document.querySelector("#autoclicker .prix");
    var bonuser = document.querySelector("#bonus");
    var counter = 10;
    var bonusClick = 0;
    var prixAutoclick = 500;
    var seconds = 30;
    var bonusgratuitPrix = 8000;
    var bonusergratuit = document.querySelector("#bonusgratuit");
    var random = Math.floor((Math.random()*2000)+500);

		/*console.log("valueClick = "+valueClick+" multiplicateur = "+
			multiplicateur+" autoclicker = "+autoclicker+"multicompter ="+multicompter);*/



/*fonction de base pour l'affichage, les multiplications*/

	//fonction qui affiche le score dans le html
  
		function afficheScore(){ 
			scorer.innerHTML = score;
		}

	//fonction qui affiche la valeur du clic en dessous du score dans le html

		function afficheValueClick(){ 
			valueCliquer.innerHTML = multiplicateur;
		}


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
	
	// fonction qui affiche le prix du bouton bonus
		
		function afficheBonusPrix(){
			bonuserPrix.innerHTML = "Prix : " + bonusPrix +" cookies";
			}


	//fonction qui modifie le texte du span#multicompte du btn multiplier dependant de var multiplicateur
	//le prochain clic sur le bouton multiplier donnera x clic en plus pour augmenter le score

		function afficheMultiTxt(){
				var multexter = "+ "+ (multiplicateur+1) +" par clic";
				multicompter.innerHTML=multexter;
		}

	// fonction qui affiche le prix du bouton autoclick

		function afficheAutoPrix(){
			autoclickerPrix.innerHTML = "prix : " + prixAutoclick + " cookies";
		}


/*fonction d'activation des boutons*/

	//fonction pour désactiver un bouton multiplier avec l'attribut disabled

		function disablerMulti(){
			if(score>=multiPrix){
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

	//fonction pour désactiver un bouton bonus avec l'attribut disabled

		function disablerBonus(){
			if(score >= 50 && counter === 10 && bonusClick === 0){
				bonuser.removeAttribute("disabled");
			}
			else {
				bonuser.setAttribute("disabled","true");
				//console.log("disable ok");
			}
		}

	//fonction pour désactiver un bouton bonusgratuit avec l'attribut disabled

		function disablerBonusgratuit(){
			if (score>=bonusgratuitPrix) {
				bonusergratuit.removeAttribute("disabled");
			}
			else {
				bonusergratuit.setAttribute("disabled","true");
			}
		}



/* INITIALISATION AU CHARGEMENT DU JEUX */

	//désactive les btn quand score pas assez élevé au chargement de page

		disablerMulti();
		disablerAuto();
		disablerBonus();
		disablerBonusgratuit();

	//initialise le text du premier bouton multiplier
	//initialise le premier autoclick

		afficheMultiTxt();
		afficheAutoPrix();

	//initialise le prix du premier bouton multiplier et du bonus

		changePrixMulti();
		afficheBonusPrix();

	//initialise le texte d'affichage de la valeur du clic

		afficheValueClick();


/* COOCKIE CLICKER */

	//lors du click sur le bouton click : change le score, l'affiche et check la possibilité d'activer ou non les autres btn

		clicker.addEventListener("click", function() { 
			   score = score + multiplicateur; 
			   afficheScore(); 
			   disablerMulti();
			   disablerAuto();
			   disablerBonus();
			   disablerBonusgratuit();
		});


/* MULTIPLIER */

	//lors du clic sur le btn, changer la valeur du clic et payer 50 de score, 
	//afficher le score, désactiver le btn si score trop peu élevé, modifie le texte dans le btn
	//affiche la nouvelle valeur du clic change le prix du bouton suivant

		multiplier.addEventListener("click", function() {
			   score = score - multiPrix ;
			   afficheScore();

			   augmenterMultiplicateur();
			   changePrixMulti();
			   afficheMultiTxt();
			   afficheValueClick();

			   disablerAuto();
			   disablerMulti();
			   disablerBonus();
			   disablerBonusgratuit();
		});


/* AUTOCLICKER */

	//autoclick gratuit des qu'on arrive à 200 et a partir de 200 si on diminue encore le score
	//setInterval qui s'active quand on arrive à 200 jusqu'à 5OO 
	//en additionnant le multiplicateur au score toute les secondes

	  	var final = setInterval(function() {
			if(score >= 200 && score < 500) {
				score=score + multiplicateur;
				//console.log(score);
				afficheScore();
			}
			else if(score >= 500) {
				clearInterval(final);
			}
		},1000);


  
	    	autoclicker.addEventListener("click",function(){
			if(score >= prixAutoclick){
				score-=prixAutoclick;
				afficheScore();
				prixAutoclick+=500;
				afficheAutoPrix();  
					function printTimeUntil10() {			
						seconds--; 
						//console.log("Seconds elapsed: " + seconds);
						score +=multiplicateur;
						//console.log(score);
						afficheScore();
						if (seconds === 0) {
								console.log("30 seconds has elapsed!")
								seconds = 30;
								clearInterval(interval); 
						}
					}
				var interval = setInterval(printTimeUntil10, 1000);
				autoclickerPrix.innerHTML = "autoclick " + prixAutoclick + " cookies";	
			}
				disablerMulti();
				disablerAuto();
				disablerBonus();
				disablerBonusgratuit();

				afficheValueClick();
		});


/* BONUS */

	//Lors du clic sur bonus, ajoute au décompte du nombre de clic sur ce bouton
	//modifie le score en soustrayant le prix du bonus

	//on multipliera le nombre de clic par deux mais il faut retenir la valeur initiale
	//car la valeur du multiplicateur peut changer si on clic sur multiplier durant le bonus
	//on modifie le texte du bouton multiplier le temps que dure le bonus
	//chaque seconde tant que counter n'est pas egal à zero le bonus est actif

	//quand couter = 0 on calcule le bon multiplicateur avec la difference obtenue lors des clics sur multiplier
	//on modifie le texte du bouton multiplier
	//on modifie l'affichage de la valeur de clic
	//on empechait de cliquer sur le bouton avec la valeur de bonusclic, on la remet à zero
	//on annule le timer, on verifie l'activation de tous les boutons, on affiche la derniere valeur de clic

		bonuser.addEventListener("click", function() {
			bonusClick ++;
			score = score - 50; afficheScore();
			var multidouble = multiplicateur * 2;
			multiplicateur = multiplicateur * 2;
			afficheMultiTxt();
			var timing = setInterval(function() {
				console.log(counter);
				counter--;
				bonuser.innerHTML = counter;
				if(counter == 0) {
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
			disablerBonusgratuit();

			afficheValueClick();
    		});


/* BONUS GRATUIT */

    	/*bonusergratuit.addEventListener("click", function() {
			score = score + random;
			afficheScore();
			var timing = setInterval(function() {
				console.log(counter);
				counter--;
				if(counter == 0) {
					counter = 10;
					disablerBonusgratuit();
					clearInterval(timing);
				}
		   	}, 1000);
			disablerMulti();
			disablerAuto();
			disablerBonus();
			disablerBonusgratuit();

			afficheValueClick();
		});*/

	

		document.getElementById('bobonunuss').addEventListener("click",function(){
		score+=random;
		console.log(score);
		document.getElementById('score').innerHTML = score;
	});
	
	

            /*function bonusbonus(){
                counter--;
                console.log(counter);
                if(bonusergratuit.addEventListener("click",function(){
                    console.log("dddddddddddddddddddd");
                    score+=random;
                    document.getElementsByClassName('bonusgratuit').innerHTML = score;
                    bonusgratuit.removeAttribute("disabled");
                    counter = 10;
                }
                else if(counter == 0){
                    clearInterval(bonusbonus);
                    counter = 10;
                 }
            };*/
})();
