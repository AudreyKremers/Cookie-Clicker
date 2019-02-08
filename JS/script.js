(function(){
		var score = 0;
		var valueClick = 1;
		var multiplicateur = 1;
		var prix = 50;
		var scorer = document.querySelector("#score");
		var clicker = document.querySelector("#click");
		var valueCliquer = document.querySelector("#clickValue span");
		var multiplier = document.querySelector("#multiplier");
		var multicompter = document.querySelector("#multicompte");
		var multiPrix = document.querySelector("#multiplier .prix");
		var autoclicker = document.querySelector("#autoclicker");

		/*console.log("valueClick = "+valueClick+" multiplicateur = "+
			multiplicateur+" autoclicker = "+autoclicker+"multicompter ="+multicompter);*/

/* partie 3*/

	//fonction qui affiche le score dans le html

		function afficheScore(){ 
				scorer.innerHTML = score;
			}

	//fonction qui affiche la valeur du clic en dessous du score dans le html

		function afficheValueClick(){ 
				valueCliquer.innerHTML = valueClick;
			}

/* partie 4, 5, 6, 7, 8 */

	//fonction pour augmenter la valeur de multiplicateur

		function augmenterMultiplicateur(){
				multiplicateur = multiplicateur + 1;
			}

	//fonction pour ajouter des valeurs de clic en fonction du multiplicateur

		function augmenterValueClick(){
				valueClick = valueClick + multiplicateur;
			}

	//fonction qui change le prix pour le doubler au suivant clic sur multiplier et affiche le prix

		function changePrixMulti(){
				prix = prix * multiplicateur;
				var messagePrix = "Prix : $" + prix;
				multiPrix.innerHTML = messagePrix;
				console.log(prix);
			}
	
	//fonction pour désactiver un bouton avec l'attribut disabled

		function disabler(){

				if(score>=200 && score<=500){
					console.log("score entre 200 et 500");
					autoclicker.removeAttribute("disabled");
				}

				else if(score>=prix){
					multiplier.removeAttribute("disabled");	
				}
				
				else{
					multiplier.setAttribute("disabled","true");
					autoclicker.setAttribute("disabled","true");				
				}

			}

	//fonction qui modifie le texte du span#multicompte du btn multiplier dependant de var multiplicateur
	//le prochain clic sur le bouton multiplier donnera x clic en plus pour augmenter le score

		function afficheMultiTxt(){
				var multexter = "+ "+ (multiplicateur+1) +" par clic";
				multicompter.innerHTML=multexter;
			}

	//désactive les btn quand score pas assez élevé au début

		disabler();

	//initialise le text du premier bouton multiplier

		afficheMultiTxt();

	//initialise le texte d'affichage de la valeur du clic

		afficheValueClick();

	//lors du clic sur le btn, changer la valeur du clic et payer 50 de score, 
	//afficher le score, désactiver le btn si score trop peu élevé, modifie le texte dans le btn
	//affiche la nouvelle valeur du clic change le prix du bouton suivant

		multiplier.addEventListener("click", function() {
			   score = score - prix ;
			   afficheScore();
			   disabler();
			   augmenterMultiplicateur();
			   augmenterValueClick();
			   afficheMultiTxt();
			   afficheValueClick();
			   changePrixMulti();
			});


	//lors du click sur le bouton click : change le score, l'affiche et check la possibilité d'activer ou non les autres btn

		clicker.addEventListener("click", function() { 
			   score = score + valueClick; 
			   afficheScore(); 
			   disabler();
			})

/* partie */


})();
