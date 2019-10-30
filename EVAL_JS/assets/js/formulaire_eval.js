//JAVASCRIPT

var valid=document.getElementById("validform");

var pn = /^[a-z A-Z]+$/;//+ = au moins
var naiss = /^(?:\d\d?[/\- ]\d\d?[/\- ](?:\d\d)(?:\d\d)?)|(?:(?:\d\d)(?:\d\d)?[/\- ]\d\d?[/\- ]\d\d?)$/;//vérifie le contenu d'un champ destiné a recevoir une date de naissance
var CoPo = /[0-9]{5}/;// 5 entre { signifie qu'on en attend précisément 5}
var mail = /^\w+[\w\!#\$%&\'\*\.+\-\/=\?\^\`\{|\}~]*@[\w\!#\$%&\'\*\+\-\/=\?\^\`\{|\}~]+\.[a-zA-Z]+$/;
var quest = /^[0-9 a-z A-Z \-\,\.\?]+$/;
//Lien page JS/HTML
var nom = document.getElementById("nom");
var prenom = document.getElementById("prenom");
var naissance = document.getElementById("naiss");
var Codepo = document.getElementById("cp");
var adresse = document.getElementById("adr");
var email = document.getElementById("mail");
var sujet = document.getElementById("suj");
var question = document.getElementById("quest");
//Spans
var missnamespan=document.getElementById("namespan");
var missprspan =document.getElementById("prspan");
var missbd=document.getElementById("bd");
var misscodepost=document.getElementById("codepost");
var missadr=document.getElementById("adr");
var missmail=document.getElementById("missmail")


function confirme(event){
    
    if(!pn.test(nom.value)){//test de la regex
        event.preventDefault();//empêche l'envoie
        missnamespan.textContent="Erreur";//affiche message d'erreur
        missnamespan.style.color="red";//applique la couleur au message d'erreur
    }else{
        missnamespan.textContent="Ok";
        missnamespan.style.color="green"
    }
    if(!pn.test(prenom.value)){
        event.preventDefault();
        missprspan.textContent="Erreur";
        missprspan.style.color="red";
    }else{
        missprspan.textContent="ok";
        missprspan.style.color="green"
    }
    if(!naiss.test(naissance.value)){
        event.preventDefault();
        missbd.textContent="Erreur";
        missbd.style.color="red"
    }else{
        missbd.textContent="Ok";
        missbd.style.color="green";
    }
    if(!CoPo.test(Codepo.value)){
        event.preventDefault();
        misscodepost.textContent="Erreur";
        misscodepost.style.color="red"
    }else{
        misscodepost.texteContent="Ok";
        misscodepost.style.color="green";
    }
    if(!quest.test(adresse.value)){
        event.preventDefault();
        missadr.textContent="Erreur"
        missadr.style.color="red"
    }else{
        missadr.textContent="Ok";
        missadr.style.color="green";
    }
    if(!mail.test(email.value)){
        event.preventDefault();
        missmail.textContent="Erreur";
        missmail.style.color="red"
    }else{
        missmail.textContent="Ok";
        missmail.style.color="green";
    }
    


}
valid.addEventListener("click",confirme);


