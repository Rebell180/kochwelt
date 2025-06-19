const myRecipe = {
    'recipe-name' : "Beispielessen",
    'recipe-wide-img' : "./img/food/Breakfast/breakfast.jpg",
    'recipe-duration' : "35 min",
    'recipe-level': "mittel",
    'recipe-creation': "18.06.2025",
    'ingredients': [
        [
            [350, " g"], 
            "Nudeln"
        ],
        [
            [200, " g"], 
            "Tomaten"
        ]
    ],
    'preparation-duration': "ca. 35 Minuten",
    'preparation-duration-full': "Gesamtzeit ca. 35 Minuten",
    'preparation-descr': "Mache Koche Backi",
    'owner-name' : "Marcel B.",
    'owner-img' : "./img/user/profilbild-m.jpeg",
}



function init() {

    // set recipe data
    document.getElementById("recipe-name").innerHTML = myRecipe["recipe-name"];
    document.getElementById("recipe-wide-img").src = myRecipe["recipe-wide-img"];
    document.getElementById("recipe-duration").innerHTML = myRecipe["recipe-duration"];
    document.getElementById("recipe-level").innerHTML = myRecipe["recipe-level"];
    document.getElementById("recipe-creation").innerHTML = myRecipe["recipe-creation"];

    document.getElementById("preparation-duration").innerHTML = myRecipe["preparation-duration"];
    document.getElementById("preparation-duration-full").innerHTML = myRecipe["preparation-duration-full"];
    document.getElementById("preparation-descr").innerHTML = myRecipe["preparation-descr"];

    document.getElementById("owner-name").innerHTML = myRecipe["owner-name"];
    document.getElementById("owner-img").src = myRecipe["owner-img"];

    // set default portion and recalculate
    document.getElementById("inp-portion").value = 1;
    
    recalculate(document.getElementById("inp-portion").value);




    
}

function recalculate(portionCount) {
    // define Calculator

}

init();