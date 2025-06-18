let kredit:string = "9342571866601997";

function pruefzifferErrechnen(kartennummer: String): Boolean{
    let gerade: number = 0;
    let ungerade: number = 0;
    let result: number = 0;

    for(let i = 0; i < kartennummer.length -1; i++){
        if(i % 2 == 0){
            ungerade += Number.parseInt(kartennummer[i]);
        }else {
            gerade += querSumme(Number.parseInt(kartennummer[i])*3);
        }
    }
   
    result = rundeAuf(ungerade + gerade) - (ungerade + gerade);
    
    if(parseInt(kartennummer[kartennummer.length-1]) == result){
        return true;
    }else {
        return false;
    }
}
function rundeAuf(zahl) {
  return Math.ceil(zahl / 10) * 10;
}

function querSumme(num) {
  let sum = 0;
  let zahl = Math.abs(num); // Betrag nehmen, um auch negative Zahlen zu unterstützen

  while (zahl > 0) {
    sum += zahl % 10;  // letzte Ziffer hinzufügen
    zahl = Math.floor(zahl / 10); // letzte Ziffer entfernen
  }

  return sum;
}

console.log(pruefzifferErrechnen(kredit));

function rabatt(artikel, rabatt): number{
    let rabattGesamt: number = 0;
    let pos: number = 0;

    for(let i = 0; i < artikel.length; i++){
        pos = artikel[i][3] * artikel[i][4];
        for(let j = 0; j < rabatt.length; j++){
            if(rabatt[j][0] == artikel[i][2]){
                rabattGesamt += pos * (rabatt[j][1]/100);
            }
        }
    }
    return rabattGesamt;
}

prozente(ausgabe: zweidimensionales Array vom Typ Integer): eindimensionales Array vom Typ Double