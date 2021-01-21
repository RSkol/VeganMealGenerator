// List of demands...
// - Creating new category for foods that are both starch and legume
// list of boxes brown rice[beans:0 berries:0 fruits:0 wholegrain:1]

//output breakfast: oats with blueberry, lunch: brown rice with, dinner: 


let meal = {
    starch: [
        "brown rice",
        "baked potatoes",
        "quinoa", 
        "mashed potatoes", 
        "risotto",
        "black rice with pesto",
        "pizza",
        "pasta primavera",
        "pasta with pesto",
        "rye bread",
        "pita bread",
        "pancakes",
        "tempeh sushi",
        "gnocchi",
        "langos",
        "black bean tacos",
        "mac’n’cheese",
    ],
    fruit:[
        "grapes",
        "apple",
        "peach",

    ],
    drink:[
        "grape juice",
        "orange juice", 
        "water",
        "miso soup", 
    ],
    legume:[
        "black beans", 
        "hummus", 
        "split peas",
        "grilled tofu",
        "chickpea coconut curry",
        "frittata",
        "grilled tempeh",
        "breaded tofu",
        "chickpea nuggets",
        "chickpea “tuna” sandwhich",
        "hummus",
        "feijoada",
        "falafel",
        "baked beans",
        "lentil sprouts",
        "scrambled tofu",
        "pea soup",
        "lentil soup",
        "italian white bean soup",
    ],
    cruciferous:[
        "lettuce",
        "collard greens", 
        "kale", 
        "arugula",
        "kale chips",
        "brocolli",
        "grilled brocolli"
    ],
    veggie:[
        "steamed carrots",
        "greek salad",
        "grilled eggplant",
        "italian roasted eggplant",
        "asian eggplant",
        "vegeburger",
        "aloo gobi",
        "sweet corn",
        "caponata",
        "baba ganoush",
        "guacamole",
        "potato salad",
        "caesar salad",
        "seaweed salad",
        "sunomono cucumber salad",
        "coleslaw",
        "pumpkin soup", 
        "spinach soup",
        "vegetable soup",
        "rustic tomato soup",
        "gazpacho"
    ],
    
};

function randomize (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

console.log ("This is our suggested meal...\n");
for (item in meal) {
    console.log (`- ${item}: ${randomize(meal[item])}`);
}
