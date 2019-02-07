(function(){
		var score = 0;
		var valueClick = 1;
		var multiplicateur = 1;
		var multiplier = document.querySelector("#multiplier");
		var autoclicker = document.querySelector("#autoclicker");
		var clicker = document.querySelector("#click");
		var scorer = document.querySelector("#score");
		//console.log("valueClick = "+valueClick+" multiplicateur = "+multiplicateur+" autoclicker = "+autoclicker);

/* partie 3*/

	//fonction qui affiche le score dans le html

		function afficheScore(){ 
			scorer.innerHTML = score;
			}


/* partie 4, 5, 6, 7 */

	//fonction pour ajouter des valeurs de clique au bouton #click

		function augmenterMultiplicateur(multiplicateur){
				valueClick = valueClick + multiplicateur;
			}
	
	//fonction pour désactiver un bouton avec l'attribut disabled

		function disabler(){

				if(score>=50){
					multiplier.removeAttribute("disabled");	
				}
				else if(score>=200 && score<=500){
					autoclicker.removeAttribute("disabled");
				}
				else{
					multiplier.setAttribute("disabled","true");
					autoclicker.setAttribute("disabled","true");				
				}
			}

	//désactive les btn quand score pas assez élevé au début
		disabler();

	//lors du clic sur le btn, changer la valeur du clic et payer 50 de score, 
	//afficher le score, désactiver le btn si score trop peu élevé
		multiplier.addEventListener("click", function() {
			   score = score - 50 ;
			   afficheScore();
			   disabler();
			   augmenterMultiplicateur(multiplicateur);
			});


	//lors du click sur le bouton click :
		clicker.addEventListener("click", function() { 
			   score = score + valueClick; 
			   afficheScore(); 
			   disabler();
			})

/* partie */


})();
