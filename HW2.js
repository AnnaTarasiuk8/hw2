let array = Array();

function addYourTotal() {
    let name = document.getElementById("nameOfFood");
    let calories = document.getElementById("calories");
    let quantity = document.getElementById("quantity");
    let result = document.getElementById("result");
    let ul = document.getElementById("listOfFood");

    if (name.value === "" || calories.value === "" || quantity.value === "" || isNaN(parseInt(calories.value))) {
        result.innerText = "Wrong entry";
        return;
    }
    array.push(new Food(name.value, calories.value, quantity.value));

    //тут через дом моддель создаешь и добавляешь Ли
    let li = document.createElement("li");
    li.innerText = name.value + " ," + calories.value + " ," + quantity.value;
    ul.append(li);

    name.value = "";
    calories.value = "";
    quantity.value = "";
    count();
}
function count() {

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += parseInt(array[i].pCalories);
    }
    document.getElementById("result").innerText = "You have consumed  " + sum + " " + "calories";
}

function fClear() {
    document.getElementById("result").innerText = "";
    let ul = document.getElementById("listOfFood");
    array = Array();
    for (let i = ul.children.length - 1; i >= 0; i--) {
        ul.children[i].remove();
    }
}
