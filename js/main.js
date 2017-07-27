var user= {
  firstName: "Paul",
  lastName: "Gray",
  contry: "France",
  age: 43,
  annee: 2017,
  payment: ["visa", "mastercard"],
}
alert("Prénom :" + " " + user.firstName);
alert("Nom :" + " " +user.lastName);
alert("Pays de résidence :" + " " +user.contry);
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
  if (autorisation.pays.indexOf("France") === -1) {
alert("Vous résidez dans les pays autorisés à commander chez nous")
  }
}
verifPays()
