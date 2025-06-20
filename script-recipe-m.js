let currentRecipe;

const myRecipes = [
    {
        'id' : "10001",
        'recipe-name' : "Ungarische Langos mit Knoblauchcreme und Käse",
        'recipe-teaser-img' : "./img/food-m/appetizer-teaser.jgp",
        'recipe-wide-img' : "./img/food-m/appetizer-wide.jpg",
        'recipe-duration' : "40 min",
        'recipe-level': "normal",
        'recipe-creation': "16.08.2010",
        'ingredients': [
            [
                [100, "g"], 
                "Weizenmehl, bei Bedarf auch mehr"
            ],
            [
                [0.2, "Würfel"], 
                "Hefe"
            ],
            [
                [0.4, "TL"],
                "Salz"
            ],
            [
                [50, "ml"],
                "Wasser, lauwarm"
            ],
            [
                [20, "ml"],
                "Milch, lauwarm"
            ],
            [
                [0.4, "TL"],
                "Zucker"
            ],
            [
                [" ", " "],
                "Öl oder Fett zum Frittieren"
            ],
            [
                [40, "g"],
                "Käse, geriebener"
            ],
            [
                [40, "g"],
                "Saure Sahne"
            ],
            [
                [40, "g"],
                "Schmand"
            ],
            [
                [0.6, " "],
                "Knoblauchzehe(n)"
            ],
            [
                [" ", " "],
                "Salz und Pfeffer"
            ]
        ],
        'preparation-duration': "ca. 40 Minuten",
        'preparation-duration-full': "Gesamtzeit ca. 2 Stunden 40 Minuten",
        'preparation-descr': `Für die Creme saure Sahne und Schmand in eine Schüssel geben, den Knoblauch fein hacken oder durch eine Presse drücken und dazugeben. Gut verrühren, mit Salz und Pfeffer abschmecken und mindestens 1 Stunde durchziehen lassen.<br><br>
            Für die Langos Wasser und Milch leicht erwärmen. In eine kleine Schüssel die Hefe bröckeln, die lauwarme Milch und den Zucker dazugeben und die Mischung glatt rühren. In eine Schüssel das Mehl geben, die Hefemilch und das lauwarme Wasser dazu gießen. Alles vermischen und 2 TL Salz dazugeben. Jetzt den Teig kräftig kneten. Sollte der Teig noch an den Händen kleben, so lange vorsichtig Mehl unterkneten, bis der Teig sich gut verarbeiten lässt. Sobald er glatt und fest ist, die Schüssel mit einem Tuch abdecken und den Teig an einem warmen Ort 30 - 60 Minuten gehen lassen.<br><br>
            In einem großen Topf oder einer tiefen Pfanne das Öl erhitzen. Die Hände etwas einölen, vom Teig kleine Stücke abreißen und zu flachen Fladen ziehen. Bestenfalls sollten die Ränder etwas dicker bleiben. Die Fladen in das heiße Öl geben. Jedoch immer nur so viele Fladen, wie nebeneinander in der Pfanne Platz haben. Sobald die eine Seite Farbe bekommen hat, umdrehen und fertig backen.<br><br>
            Aus dem Öl nehmen und auf Küchenkrepp abtropfen lassen. Mit der Creme bestreichen, den Käse darüber streuen und noch heiß servieren.`,
        'owner-name' : "Marcel B.",
        'owner-img' : "./img/user/profilbild-m.jpeg",
    },
    {
        'id' : "10002",
        'recipe-name' : "Ungarisches Gulasch - Pörkölt",
        'recipe-teaser-img' : "./img/food-m/meanmeal-teaser.jgp",
        'recipe-wide-img' : "./img/food-m/meanmeal-wide.jpg",
        'recipe-duration' : "40 min",
        'recipe-level': "normal",
        'recipe-creation': "10.04.2007",
        'ingredients': [
            [
                [1, ""], 
                "Zwiebel(n)"
            ],
            [
                [2.5, ""], 
                "Knoblauchzehe(n)"
            ],
            [
                [250, "g"],
                "Schweinegulasch"
            ],
            [
                [" ", " "], 
                "Zitronensaftkonzentrat, einige Tropfen davon"
            ],
            [
                [" ", "n.B."], 
                "Sonnenblumenöl, ein guter Schuss"
            ],
            [
                [0.5, "l"], 
                "Wasser, aufgeteilt in 2 Behälter"
            ],
            [
                [0.5, "Prise(n)"], 
                "Kümmelpulver"
            ],
            [
                [0.5, "TL"], 
                "Brühepulver"
            ],
            [
                [50, "g"], 
                "Tomatenmark"
            ],
            [
                [0.5, "TL"], 
                "Paprikapulver, edelsüß"
            ],
            [
                [0.5, "Prise(n)"], 
                "Paprikapulver, rosenscharf"
            ],
            [
                [0.5, "Prise(n)"], 
                "Majoran"
            ],
            [
                [0.5, "Prise(n)"], 
                "Salz"
            ],
            [
                [0.5, "Prise(n)"], 
                "Pfeffer"
            ],
            [
                [0.5, "Prise(n)"], 
                "Kümmelpulver"
            ]
        ],
        'preparation-duration': "ca. 40 Minuten",
        'preparation-duration-full': "Gesamtzeit ca. 3Stunden 25 Minuten",
        'preparation-descr': `Die Zwiebeln und den Knoblauch klein hacken und in eine Pfanne geben. Das Gulasch in mundgerechte Stücke schneiden (besser zu klein als zu groß) und mit in die Pfanne geben. Das Gulasch salzen. Jetzt mit den Zwiebeln und Knoblauch vermischen, mit ein paar Tropfen Zitronensaftkonzentrat beträufeln, Deckel drauf und ca. 60 Minuten ziehen lassen.<br><br>
                Anmerkung der Chefkoch.de Rezeptbearbeitung: Da in Kommentaren immer wieder danach gefragt wird, obwohl die Angaben des Rezepteinstellers eindeutig sind: In diesem ersten Arbeitsschritt wird noch nichts gebraten, nichts erhitzt. Gulasch, Zwiebeln, Knoblauch und Zitronensaftkonzentrat ziehen kalt in der geschlossenen Pfanne.<br><br>
                Nach 60 Minuten einen guten Schuss Sonnenblumenöl (wichtig: kein Olivenöl oder ähnliches verwenden, wegen des starken Eigengeschmacks) in die Pfanne geben und das Gulasch ca. 10 Minuten bei höchster Hitze anbraten. Danach bei niedrigerer Hitze (Stufe 4, bzw. 2/3 der vollen Leistung eines Herdes) ca. 15 Minuten weiterbraten. Jetzt 500 ml Wasser in die Pfanne geben, eine Prise Kümmel und einen guten Teelöffel Brühepulver zugeben, alles gut verrühren und bei gleichbleibender Hitze unter gelegentlichem Umrühren ca. 40 Minuten ohne Deckel köcheln lassen, bis das Wasser vollkommen verkocht ist.<br><br>
                Nun 500 ml Wasser in einem Messbecher mit dem Tomatenmark, einem guten Teelöffel Paprika edelsüß, einer Prise Paprika rosenscharf, Majoran, Salz, Pfeffer und noch etwas Kümmel würzen und in die Pfanne geben. Bei niedrigerer Hitze (Stufe 2, bzw. 1/3 der vollen Leistung des Herdes) jetzt nochmal ca. 30 Minuten mit Deckel bei gelegentlichem Umrühren köcheln lassen.<br><br>
                Als Beilage nimmt man idealerweise Nockerln aber auch kleine Frischei-Spiralnudeln eignen sich sehr gut und sehen den Nockerln ja fast ähnlich.<br><br>
                Da es mittlerweile unzählige "originale" und "echte" Rezepte für ungarisches Gulasch gibt, stelle ich meins, das wohl dass gängigste in Lokalen am Balaton und allgemein in Ungarn ist, für alle ein, die auf der Suche nach dem leckeren Gulasch, bzw. Pörkölt wie aus dem Urlaub sind.<br><br>`,
        'owner-name' : "Marcel B.",
        'owner-img' : "./img/user/profilbild-m.jpeg",
    },
    {
        'id' : "10003",
        'recipe-name' : "Mascarpone Himbeerquark",
        'recipe-teaser-img' : "./img/food-m/dessert-teaser.jgp",
        'recipe-wide-img' : "./img/food-m/dessert-wide.jpg",
        'recipe-duration' : "15 min",
        'recipe-level': "simpel",
        'recipe-creation': "06.07.2007",
        'ingredients': [
            [
                [170, "g"], 
                "Schlagsahne"
            ],
            [
                [50, "g"], 
                "Naturjoghurt"
            ],
            [
                [42, "g"],
                "Mascarpone"
            ],
            [
                [84, "g"],
                "Magerquark"
            ],
            [
                [84, "g"],
                "Himbeeren, TK, nicht aufgetaut"
            ],
            [
                [17, "g"],
                "Zucker, n.B. mehr"
            ],
            [
                [" ", " "],
                "Schokolade, weiß, geraspelt"
            ]
        ],
        'preparation-duration': "ca. 15 Minuten",
        'preparation-duration-full': "Gesamtzeit ca. 3 Stunden 15 Minuten",
        'preparation-descr': `Quark, Joghurt und Mascarpone gut mit dem Zucker verrühren, am besten das Handrührgerät benutzen, damit sich der Zucker gut löst. Dann die steif geschlagene Sahne unterheben.<br><br>
                Nun die gefrorenen Himbeeren und die Quarkmasse abwechselnd schichten (sieht in einer Glasschüssel am nettesten aus). Mit der geraspelten Schokolade bestreuen. Muss mindestens 3 Stunden durchziehen (wegen der Himbeeren).<br><br>
                Tipps: Kann man gut am Abend vorher zubereiten und dann im Kühlschrank aufbewahren.<br><br>
                Verwendet man frische Früchte, verringert sich die Zuckermenge!<br><br>
                Anmerkung der Chefkoch.de Rezeptbearbeitung: Die ursprüngliche Zuckermenge wurde (auch nach Angaben der Rezeptautorin) reduziert auf 100 g. Wer mag, nimmt natürlich mehr. Auch lecker ist die Zugabe von Vanille.`,
        'owner-name' : "Marcel B.",
        'owner-img' : "./img/user/profilbild-m.jpeg",
    }
];

// #region init

function init() {

    const urlParams = new URLSearchParams(window.location.search);
    // const category = urlParams.get('category'); // Gibt "shoes" zurück
    const id = urlParams.get('id'); // Gibt "123" zurück

    currentRecipe = myRecipes.find(recipe => recipe.id === id)
    // set recipe data
    document.getElementById("recipe-name").innerHTML = currentRecipe["recipe-name"];
    document.getElementById("recipe-wide-img").src = currentRecipe["recipe-wide-img"];
    document.getElementById("recipe-duration").innerHTML = currentRecipe["recipe-duration"];
    document.getElementById("recipe-level").innerHTML = currentRecipe["recipe-level"];
    document.getElementById("recipe-creation").innerHTML = currentRecipe["recipe-creation"];

    document.getElementById("preparation-duration").innerHTML = currentRecipe["preparation-duration"];
    document.getElementById("preparation-duration-full").innerHTML = currentRecipe["preparation-duration-full"];
    document.getElementById("preparation-descr").innerHTML = currentRecipe["preparation-descr"];

    document.getElementById("owner-name").innerHTML = currentRecipe["owner-name"];
    document.getElementById("owner-img").src = currentRecipe["owner-img"];

    // set default portion and recalculate
    document.getElementById("inp-portion").value = 2;  
    recalculate();
    
}

// #endregion init

// #region functionality

function recalculate() {

    let amount = document.getElementById("inp-portion").value;
    let ingredientAmount;
    let ingredient;

    document.getElementById("tbl-ingredients").innerHTML = "";

    for(let i = 0; i < currentRecipe.ingredients.length; i++ ){
        let background = "bg-transparent";
        if (i % 2 == 0) {
            background = "bg-lightgrey";
        }

        ingredientAmount = getFormattedUnit(amount, currentRecipe.ingredients[i][0][0], currentRecipe.ingredients[i][0][1]);
        ingredient = currentRecipe.ingredients[i][1];

        document.getElementById("tbl-ingredients").innerHTML += getIngredientRow(i, background, ingredientAmount, ingredient);
    }
}

function getFormattedUnit(amount, unitNumber, unit) {
    let multiplied = unitNumber * amount;
    let formattedUnit = unit;

    if (multiplied >= 1000) {

        multiplied = multiplied / 1000;

        if (unit == "g") {
            formattedUnit = "kg";
        }
        else if (unit == "ml") {
            formattedUnit = "l";
        }
        else {
        }
    }

    if( multiplied == 0) {
        multiplied = "";
    }

    return `${multiplied}${formattedUnit}`;
}

// #endregion functionality

// #region Templates 

function getIngredientRow(i, bg, amount, name) {

    return  /*html*/`
                <tr id="ingredient${i}">
                    <td class="td-col-1 ${bg}">${amount}</td>
                    <td class="td-col-2 ${bg}">${name}</td>
                </tr>
            `;
}
// #endregion Templates




init();