//exo 1

var valid = document.getElementById("butt1"); //nom de l'id du button
valid.addEventListener("click",function (){ // nom de la function
    var PU;
    var QTECOM;
    var PAP;
    var PORT;
    var REM;
    var TOT;

        PU = parseInt(prompt("saisissez le prix de l'article"));
        QTECOM = parseInt(prompt("saisissez la quantité d'articles"));
        PAP=PU*QTECOM;
    console.log(PAP +" "+ "€");
    if(PAP>=500){
        PORT=0;
        }else{
        PORT=PAP*2/100;
            if(PORT<6){
            PORT=6;   
    }
    }
    console.log(PORT +""+ "€");
    TOT=(PAP)+PORT;
    if(TOT>100 || TOT<200){//Veiller à ce que les parenthèse englobent du 1er "TOT" à "200"
        REM=TOT*(5/100);
    }   
    else{
        REM=TOT*(10/100);
    }
    TOT-=REM;
    console.log(TOT);
    }
);

//exo 2

var valid1 = document.getElementById("butt2");
valid1.addEventListener("click",function (){
    var N = parseInt(prompt("saisissez un nombre"));
    var somme =0;

    while(N!=0){
        N--;
        somme += N;
    }
    console.log(somme);
    }
);

//exo 3


var valid1 = document.getElementById("butt3");
valid1.addEventListener("click",function (){
var min=0;
var max=0;
var n = 0;
var tab= new Array();


    do{
        n=parseInt(prompt("Entrez un nombre ou 0 pour arreter de saisir"));//ajoute la valeure à la fin du tableau
        if(n!=0){//tant que l'entrée est différente de 0
            tab.push(n);//entrer la valeur dans la dernière case du tableau
            if(min==0){//si min est toujours à zero
                min = n;//min prend la valeure de n..
            }
            else if(min>n){//..autrement vérifier si min est supérieur à n
                min = n;//min prendra donc la valeur de n
            }
            if(max == 0){//si max est toujours à zero
            max = n;//max prend automatiquement la valeure de n
            }
            else if(max<n){//si max est inférieur à n
            max =n;//max prendra la valeure de n
        }
        }
        
    }while(n!=0);//tant que le nombre entré est <0

         
        alert("Le nombre le plus grand que vous avez entré est : "+ (max)+". Le plus petit nombre que vous avez entré est : "+ (min));



}

);

//exo 4

var valid1 = document.getElementById("butt4");
var j=0;//veiller à déclarer les variables en dehors de la fonction et en dehors de la boucle
var v=0;
var m=0;
valid1.addEventListener("click",function (){
    do{
    var nb = parseInt(prompt("saisissez des nombres et entrer 100 pour terminer la saisie"));
        if(nb<20){
            j++;
        }
        if(nb>=20 && nb<=40){//&&=et ||=ou
            m++; 
        }
        if(nb>40){
            v++;
        }
    }
    while(nb!=100);
    console.log(j+" personnes sont dans la catégorie jeunes");
    console.log(m+" personnes sont dans la catégorie médiane");
    console.log(v+" personnes sont dans la catégorie senior");
    alert("Vous avez indiqué "+j+" personnes dans le groupe jeune, "+m+" personnes dans le groupe médian et"+v+" personnes dans le groupe senior")

}

);

//exo 5

var valid1 = document.getElementById("butt5");
valid1.addEventListener("click",function (){
var nb= parseInt(prompt("Saisir le nombre dont vous souhaitez avoir la table de multiplication"))
console.log("Table de multiplication par "+nb);
console.log("=============================");
 
for (i=1; i<10; i++)
{
       resultat = nb * i;
 
       console.log(nb + "*" +i+"="+resultat);
}
 
// instructions exécutées après le for (i vaut 10)
console.log("fin de la boucle");
}
);

//exo 6

var valid1 = document.getElementById("butt6");
valid1.addEventListener("click",function (){
    var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
    var prenom = prompt("saisissez le prénom à retirer du tableau");
    var pos = tab.indexOf(prenom);//indexOf retourne la première occurence d'un mot recherché dans un tableau
    
    if(pos == -1){//pos==-1 signifie ici que l'élément est introuvable dans le tableau
        alert("erreur entrer un prenom valide");
    }else{
        tab.push("");//remet la case vide en l'occurence Audrey à la fin du tableau
    tab.splice(pos, 1);//retourne la position de l'élément dans la case du tableau
    console.log(tab);
    }
}
);









