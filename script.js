/*
var num = 255;            // Variable contenant le nombre 255
var txt = "255";          // Variable contenant la chaîne de caractères "255"
var bin = true;           // Variable contenant la valeur booléenne vraie
var flt = 7.23;           // Variable contenant la valeur 7.23

// Appliquer les opérations demandées
num++;                    // Appliquer l'opérateur d'incrémentation à num
txt += " est ici une chaîne de caractères";  // Concaténer la chaîne à txt
bin = !bin;               // Inverser la valeur logique de bin
flt += num;               // Ajouter la valeur de num à flt

// Affichage des variables dans la console après les opérations
console.log("num:", num);
console.log("txt:", txt);
console.log("bin:", bin);
console.log("flt:", flt);

num++;                    
txt += " est ici une chaîne de caractères";  
bin = !bin;               
flt += num; 


function isoNum() {
    return 42;
  }
  
  // Appel de la fonction et affichage du résultat
  console.log(isoNum()); 
*/




let d1 = document.MF.dateF.value;
let Td1 = new Date(d1);
md1 = Td1.getTime();

let d2 = document.MF.dateR.value;
let Td2 = new Date(d2);
md2 = Td2.getTime();

let diff = md2-md1;
let resultat = diff/(1000*3600*24);
document.MF.nbr.value = resultat;