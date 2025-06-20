let currentRecipe;

const myRecipes = [
    {
        'id' : "10001",
        'recipe-name' : "Beispielessen #1",
        'recipe-wide-img' : "./img/food/Breakfast/breakfast.jpg",
        'recipe-duration' : "35 min",
        'recipe-level': "mittel",
        'recipe-creation': "18.06.2025",
        'ingredients': [
            [
                [350, "g"], 
                "Nudeln"
            ],
            [
                [200, "g"], 
                "Tomaten"
            ],
            [
                [250, "ml"],
                "Milch"
            ]
        ],
        'preparation-duration': "ca. 35 Minuten",
        'preparation-duration-full': "Gesamtzeit ca. 35 Minuten",
        'preparation-descr': "Mache Koche Backi",
        'owner-name' : "Marcel B.",
        'owner-img' : "./img/user/profilbild-m.jpeg",
    },
    {
        'id' : "10002",
        'recipe-name' : "Beispielessen #2",
        'recipe-wide-img' : "./img/food/Breakfast/breakfast.jpg",
        'recipe-duration' : "35 min",
        'recipe-level': "mittel",
        'recipe-creation': "18.06.2025",
        'ingredients': [
            [
                [350, "g"], 
                "Nudeln"
            ],
            [
                [200, "g"], 
                "Tomaten"
            ],
            [
                [250, "ml"],
                "Milch"
            ]
        ],
        'preparation-duration': "ca. 35 Minuten",
        'preparation-duration-full': "Gesamtzeit ca. 35 Minuten",
        'preparation-descr': "Mache Koche Backi",
        'owner-name' : "Marcel B.",
        'owner-img' : "./img/user/profilbild-m.jpeg",
    }
];

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

    return `${multiplied}${formattedUnit}`;
}

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