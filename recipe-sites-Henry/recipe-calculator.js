//Das Rezept startet mit 2 Portionen
//Beispiel: 400g Hähnchenbrust = 2 Portionen
const startPortions = 2;

document.getElementById("calculate").addEventListener("click", () => {
  // Holt die Eingabe des Users aus dem input
  let inputUser = parseInt(document.getElementById("portions").value);

  // setzt die Eingabe auf 1 (bei nichts oder ungültig) oder wenn mehr als 20 eingetragen wird auf 20 – damit man nicht riesige Zahlen eingeben kann
  if (isNaN(inputUser) || inputUser < 1) {
    inputUser = 1;
  } else if (inputUser > 20) {
    inputUser = 20;
    // Hier wird im Browser auf 20 gestellt, damit man erkennt, was passiert
    document.getElementById("portions").value = 20;
  }

  // Holt alle list elemente
  const ingredients = document.querySelectorAll(".ingredients-list li");

  for (let i = 0; i < ingredients.length; i++) {
    // geht durch die list elemente
    const ingredientsList = ingredients[i];

    // Startwert aus der Rezeptliste / aus .data-crowd
    const startCrowd = ingredientsList.getAttribute("data-crowd");

    // hier wird nochmal geprüft ob Startwert auch wirklich einen Wert hat
    if (startCrowd) {
      // #####Hier wird die neue Menge berechnet#####
      // Beispiel: 400g / 2 (2 Portionen) * 4 = 800 = neue Menge
      const crowd = parseFloat(startCrowd);
      let newCrowd = (crowd / startPortions) * inputUser;

      // Hier wird geprüft ob data-max gesetzt ist - bei zutaten wie gewürzen oder sensible zutaten wie knoblauch, zwiebeln usw.
      const maxCrowd = parseFloat(ingredientsList.getAttribute("data-max"));
      if (!isNaN(maxCrowd)) {
        newCrowd = Math.min(newCrowd, maxCrowd);
      }

      // Hier wird gerundet / Wenn es ganzzahlig ist bleibt es so, wenn es Kommas gibt – wird gerundet
      const rounded = newCrowd % 1 === 0 ? newCrowd : newCrowd.toFixed(1);

      // Hier werden alle span Elemente mit Klassennamen crowd ersetzt mit der neuen Menge
      // Nur der span-Inhalt wird ersetzt – damit nicht der komplette Text neu gerendert wird
      const span = ingredientsList.querySelector(".crowd");
      if (span) {
        span.textContent = rounded;
      }
    }
  }
});
