// Let there be light!

let meal = {
    starch: ["brown rice","baked potatoes","quinoa", "mashed potatoes"],
    fruit:["grapes","apple","peach"],
    drink:["grape juice","orange juice", "water"],
    legume:["black beans", "hummus", "split peas"],
    green:["lettuce","collard greens", "kale", "arugula"],
    veggie:["steamed carrots","brocolli","greek salad"],
    soup:["pea soup", "pumpkin soup", "miso soup", "spinach soup"]
};

function randomize (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

console.log ("This is our suggested meal...\n");
for (item in meal) {
    console.log (randomize(meal[item]));
}
