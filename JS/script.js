(function(){

function AutoclickerAuto(){
	var autoclickerScore = document.getElementById('score').addEventListener('click',function(){
		var score = document.getElementById('score').value;
		console.log(score);
		while(score >= 200 && score <= 500){
			
			score++;
		}
		console.log(score);
	})
}

function autoclickCinqCents(){
	var autoCInqCents = document.getElementById('autoclickerCinqCent').addEventListener('click',function fnButtomClick(){
		function clickbttm(){
			var score = document.getElementById('score').value;
			onClick=this.style.visibility='hidden';
			
		}
	})

}









})();


/*


/*
			quand le score == 200, l'autoclick s'active jusqu'a 500 point et puis il faut
			l'acheter. Il dure 1 minutes et il faudra le reacheter.Une fois qu'il est acheter,
			il faut que le boutton soit desactiver pour lorsqu'il est acheter.


			l'autoclick se lance seulement au score 200 une fois seulement lorsque l'utilisateur
			click pour la premiere fois sur le coockies. presciser ca dans la fonction.
			Ensuite, le score s'autoclick jusqu'a 500 et à partir de ce moment là, l'autoclick
			s'arrete et il faut l'acheter pour que sa s'autoclick a nouveau.
			Qand l'utilisateur click sur l'autoclick, ce bouton deviens noir ou transparent et ne reviens,
			seulement lorsque le compteur/temps de la fonction et terminer. L'utilisateur peut le reutiliser
			au temps de fois qu'il veux. Le temps du bouton vaudra 1 minutes.


Étape 11 : autoclicker
Nouvelle amélioration à acheter : Autoclick. Dès que vous avez un score de 200, 
un clic est fait automatiquement chaque seconde. (setInterval est ton ami)

Étape 12 : achat d'autoclicker
L'autoclicker ne sera plus automatique. Il faut dorénavant acheter l'autoclicker.
 Vous ajouterez un bouton avec l'id autoclic. Il coutera 500. Une fois que l'autoclicker a été acheté
 , il faudra désactiver le bouton d'achat de l'autoclic.

Étape 13 : achat d'un bonus
Désormais, on doit pouvoir acheter un bonus qui augmente le score de 200% à chaque clic pendant 
30 secondes. C'est à dire que si à chaque clic, le score augmente de 3, pendant les 30 secondes 
de bonus le score augmentera de 6 à chaque clic, au bout des 30 secondes le score augmentera à 
nouveau de 3 par clic. Vous créerez le bouton « BONUS » avec l'id bonus, et le bonus coutera 5000.
 Lorsque le bonus est acheté, le nombre de seconde s'affichera dans le bouton avec le décompte et 
 le bouton devra etre désactivé pendant le temps du bonus. Quand le bonus est fini, le bouton est 
 réactivé et retrouve son texte d'origine.

*/