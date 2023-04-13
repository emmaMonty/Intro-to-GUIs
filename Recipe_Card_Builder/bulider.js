const recipeName = document.getElementById("title");
const resetButton = document.getElementById("reset-button");
const foodlst = document.getElementById("Food-input");
const foodButton = document.getElementById("Food-button");
const instructlst = document.getElementById("directions-input");
const instructButton = document.getElementById("directions-button");
const exportButton = document.getElementById("export-button");
let change = 0;
const recipe = {
    title: "",
    ingredients: [],
    instructions: []
};
function reset(){
    window.location.reload();
    return false;
}
resetButton.addEventListener("keypress", (e) => {
    if(e.code === "Enter"){
        reset();
    }
});

resetButton.addEventListener("click", reset);
function addItem(){
    let text = "";
    let node = "";
    if (change === 0){
        text = foodlst.value;
        if(text === ""){
            displayError("Needs an Ingredient");
            return;
        }
        const foodElement = document.createElement("button");
        node= document.createTextNode(text);
        foodElement.appendChild(node);
        foodElement.addEventListener("click", ()=> foodElement.remove());
        foodElement.addEventListener("keypress", (e) =>{
            if(e.code === "Space"){
                foodElement.remove();
            }
        });
        document.getElementById("Food-list").appendChild(foodElement);
        recipe["ingredients"].push(text);
        foodlst.value = "";
    }
    else{
        text = instructlst.value;
        if(text === ""){
            displayError("Needs an Instruction");
            return;
        }
        const instructElement = document.createElement("button");
        node = document.createTextNode(text);
        instructElement.appendChild(node);
        instructElement.addEventListener("click", ()=> instructElement.remove());
        instructElement.addEventListener("keypress", (e) =>{
            if(e.code === "Enter"){
                instructElement.remove();
            }
        });
        recipe["instructions"].push(text);
        document.getElementById("directions-list").appendChild(instructElement);
        instructlst.value="";
    }
}
foodButton.addEventListener("keypress", (e) =>{
    change = 0;
    if(e.code === "z"){
        addItem();
    }
});

foodlst.addEventListener("keypress", (e) =>{
    change = 0;
    if(e.code === "Enter"){
        addItem();
    }
});

foodButton.addEventListener("click", ()=>{
    change = 0;
    addItem();
});

instructButton.addEventListener("keypress", (e) =>{
    change = 1;
    if(e.code === "Enter"){
        addItem();
    }
});

instructlst.addEventListener("keypress", (e) =>{
    change = 1;
    if(e.code === "Enter"){
        addItem();
    }
});

instructButton.addEventListener("click", () => {
    change = 1;
    addItem();
});
exportButton.addEventListener("click", () =>{
    if(recipeName.value === ""){
        displayError("Needs a name");
            return;
    }
    recipe["title"]= `${recipeName.value}`;
    writeRecipeToFile(recipe);
});

exportButton.addEventListener("keypress", (e)=> {
    if(recipeName.value === ""){
        displayError("Needs a name");
            return;
    }
    if(e.code = "Enter"){
        recipe["title"]= `${recipeName.value}`;
        writeRecipeToFile(recipe);
    }
});

function displayError(error) {
    const el = document.getElementById("error-message");
    el.innerHTML = error;
    el.dataset.open = "true";
    setTimeout(() => {
      el.dataset.open = false;
      el.innerHTML = "";
    }, 5000);
}