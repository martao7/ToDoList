// Die items, die sich im Local Storage befinden, werden in einem neuen Array gespeichert und geparst
const itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

document.getElementById("add_Button").addEventListener("click", () => {
  const item = document.getElementById("user_input");
  createItem(item);
});

/* get actual date */
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}/${month}/${year}`;
document.getElementById("entry_date").innerHTML = currentDate;

function createItem(item) {
  const inputValue = item.value;

  //inputValue === ''? alert('You must write something!') : console.log(inputValue);
  inputValue === ''? alert('You must write something!') : itemsArray.push(inputValue);
  //inputValue = itemsArray.push(inputValue);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  location.reload();
}
function displayItems() {
  let items = "";
  for (let i = 0; i < itemsArray.length; i++) {
    items += `<div class="item">

                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <div class="todo_text_area">
                  <h4>${itemsArray[i]}</h4>
                  <p>${currentDate}</p>
                </div>
                <div class="btn-are">
                <button class="btn trashcan"><i class="fa fa-trash"></i></button>
                <button class="btn edit"><i class="fa fa-pencil"></i></button>
                </div>
              </div>`;
  }
  document.getElementById("bloeder").innerHTML = items;
  addDeleteListeners();
  addEditListeners(); // Add this line to attach edit listeners
}

function addDeleteListeners() {
  const deleteButtons = document.querySelectorAll(".trashcan");
  deleteButtons.forEach((button, index) => {
    button.addEventListener("click", () => deleteItem(index));
  });
}

function deleteItem(index) {
  itemsArray.splice(index, 1);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  displayItems();
}

function addEditListeners() {
  const editButtons = document.querySelectorAll(".edit");
  editButtons.forEach((button, index) => {
    button.addEventListener("click", () => editItem(index));
  });
}

function editItem(index) {
  const itemText = itemsArray[index];
  const newItemText = prompt("Edit the item:", itemText);
  if (newItemText !== null) {
    itemsArray[index] = newItemText;
    localStorage.setItem("items", JSON.stringify(itemsArray));
    displayItems();
  }
}

displayItems();

/* alert on Share */
document.getElementById("share").addEventListener("click", () => {
  alert("You are NOT able to Share now!");
});

const containerNew = document.getElementById("plus_area");
const plusButton = document.getElementById("plus");

/* plusButton.addEventListener("click", changeColor); */

function changeColor(e) {
  e.preventDefault;
  document.body.style.background = "#191a21";
}

plusButton.addEventListener("click", changeColor);

/* plusButton.addEventListener("click", changeColor); */

function createContainer(e) {
  e.preventDefault;
  const newDiv = document.createElement("div");
  /*   const newContent = document.createTextNode("Hey there"); */
  newDiv.innerHTML = "Hey there";
/*   newDiv.appendChild(newContent); */
  containerNew.appendChild(newDiv);
}
