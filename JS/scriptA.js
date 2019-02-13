(function(){
  var startscore = 0;
  var startSScore = 1;

  var nbcli = 0;
  var nbClimult = 1;

  var prixmulti=10;
  var addmulti=2;
  //var autocli=1;

  document.getElementById('click').addEventListener('click', function (){
    startscore = startscore+startSScore;
    console.log(startscore);
    document.getElementById('score').innerHTML=startscore;
    setInterval(score++, 60000);
  });

  document.getElementById('multiplier').addEventListener('click', function (){
    if (startscore>=prixmulti){
      nbcli = nbcli+nbClimult;
      console.log(nbcli);
      startSScore++;
      console.log(startSScore);
      startscore=startscore-prixmulti;
      console.log(startscore);
      document.getElementById('score').innerHTML=startscore;
      prixmulti*=2;
      addmulti++;
      document.getElementById('multicompte').innerHTML='x '+addmulti;
      document.getElementsByClassName('prix')[0].innerHTML='$ '+prixmulti;
      document.getElementById('clickValue').innerHTML= 'click +'+nbcli;
    }

  });
})()
