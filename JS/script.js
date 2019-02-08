(function(){
		var score = 0;
		var valueClick = 1;
		var multiplicateur = 1;
		var multiplier = document.querySelector("#multiplier");
		var autoclicker = document.querySelector("#autoclicker");
		var clicker = document.querySelector("#click");
		var scorer = document.querySelector("#score");
		var valueCliquer = document.querySelector("#clickValue span");
		var multicompter = document.querySelector("#multicompte");

		console.log("valueClick = "+valueClick+" multiplicateur = "+multiplicateur+" autoclicker = "+autoclicker+"multicompter ="+multicompter);

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

	//fonction pour ajouter des valeurs de clique au bouton #click et augmente la valeur de multiplicateur

		function augmenterMultiplicateur(){
					if(multiplicateur===1){
						multiplicateur = multiplicateur + 1;
					}
					else{
						multiplicateur = multiplicateur * multiplicateur;
					}
			}

	//fonction pour ajouter des valeurs de clique au bouton #click et incremente la valeur de multiplicateur

		function augmenterValueClick(){
				if(valueClick===1){
					valueClick = valueClick + multiplicateur;
				}
				else{
					valueClick = valueClick * multiplicateur;
					}
			}
	
	//fonction pour désactiver un bouton avec l'attribut disabled

		function disabler(){

				if(score>=200 && score<=500){
					console.log("score entre 200 et 500");
					autoclicker.removeAttribute("disabled");
				}

				else if(score>=5){
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
				console.log("devrait modifier le texte");
				var multexter = "+ "+ (multiplicateur+1) +" par clic";
				console.log(multexter);
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
	//affiche la nouvelle valeur du clic

		multiplier.addEventListener("click", function() {
			   score = score - 5 ;
			   afficheScore();
			   disabler();
			   augmenterMultiplicateur();
			   augmenterValueClick();
			   afficheMultiTxt();
			   afficheValueClick();
			});


	//lors du click sur le bouton click : change le score, l'affiche et check la possibilité d'activer ou non les autres btn

		clicker.addEventListener("click", function() { 
			   score = score + valueClick; 
			   afficheScore(); 
			   disabler();
			})

/* partie */


})();
