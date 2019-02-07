(function(){
	var score = 0;
	var valueClick = 1;
	function afficheScore(){
		document.getElementById("score").innerHTML = score;
	}
	document.getElementById("click").addEventListener("click", function() {
		score = score + valueClick;
		
		afficheScore();
    });
	//your code here

})();