// L'objet JSON initial
var objetJSON = '{"IDU":["yuiiigf","hukjhhhjk"]}';

// Convertir la chaîne JSON en objet JavaScript
var objetJS = JSON.parse(objetJSON);

// Ajouter une nouvelle valeur à la clé "IDU"
objetJS.IDU.push("nouvelle_valeur");

// Convertir l'objet JavaScript en chaîne JSON mise à jour
var nouvelObjetJSON = JSON.stringify(objetJS);
