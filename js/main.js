
// *****************************************
// EXERCICE 1
// ****************************************


var user= {
  firstName: "Paul",
  lastName: "Gray",
  country: "France",
  age: 43,
  annee: 2017,
  payment: ["visa", "mastercard"],
}
alert("Prénom :" + " " + user.firstName);
alert("Nom :" + " " +user.lastName);
alert("Pays de résidence :" + " " +user.country.toUpperCase());
alert("Age :" + " " +user.age + " " + "ans");
alert("Année de naissance :" + " " +(user.annee-user.age));


var autorisation= {
  pays: ["FRANCE", "ESPAGNE", "ITALIE", "BELGIQUE"],
  paiment: ["visa", "mastercard", "paypal"],
  ageMin: 18,
}

function auto(x) {

if (user.age > autorisation.ageMin) {
alert("Bienvenu sur notre site")
}
else {
  alert("Désolé vous n'avez pas l'âge réquis")
}
}
auto()

function verifPays(t) {
  if (autorisation.pays.indexOf("FRANCE") !== -1) {
alert("Vous résidez dans les pays autorisés à commander chez nous")
  }
else {
  alert("Désolé vous ne résidez pas dans la liste des pays autorisés à commander chez nous !")
}
}
verifPays()

function verifCard(a) {
  if (autorisation.paiment.indexOf("visa", "mastercard") !== -1) {
alert("Vos moyens de paiment sont autorisé sur notre site")
  }
}
verifCard()






// *************************************************************************
// TENTATIVE DU JEU DE COMBAT, MAIS LE CONSOLE.LOG NE S''AFFICHE PAS
// ***********************************************************************

function guerrier(nom, attack, défense, santé){
  this.nom= nom;
  this.attack= attack;
  this.défense= défense;
  this.santé= santé;

  this.fightGuerrier = function(X){
    this.santé-=X.attack;
    console.log(fighter2.santé);

  };
}

var fighter1= new guerrier("Ryu", 12, 7, 100);
var fighter2= new guerrier("Ken", 9, 10, 100);

fighter1.fightGuerrier(fighter2);
fighter2.fightGuerrier(fighter1);


function guerrier(nom, attack, défense, santé, mana){
  this.nom= nom;
  this.attack= attack;
  this.défense= défense;
  this.santé= santé;
  this.mana=mana;
}







function formualire() {
    var x = document.getElementById("myTitle").value;
    document.getElementById("titre").innerHTML = x;
}
formualire()
