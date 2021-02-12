// Deel 1; Elementen toevoegen

const bigFiveList = document.querySelector(".big-five-list");
const spottedList = document.querySelector(".spotted-animals-list");

bigFiveList.addEventListener("click", alertText,);

function alertText(e) {
    if (e.target !== e.currenTarget) {
        const clickedItem = e.target.id;
        alert("You have seen a " + clickedItem);
        const newListItem = document.createElement("li");
        newListItem.appendChild(document.createTextNode(clickedItem));
        const list = document.getElementById("spotted-animals-list");
        list.appendChild(newListItem).className = "spotted-animals-list-item";
    };
};

// Deel 2; 1 element verwijderen 

const deleteFirstItem = document.getElementById("remove-first-item-button");

deleteFirstItem.addEventListener("click", removeFirstItem);

function removeFirstItem() {

    const firstItem = document.getElementById("spotted-animals-list");

    const firstLi = firstItem.getElementsByTagName("li")[0];
    firstItem.removeChild(firstLi);
    console.log(firstItem);

    // Alternatief:
    // const firstItem = document.getElementById("spotted-animals-list");
    // firstItem.removeChild(firstItem.childNodes[0]);
}

// Deel 3; Meerdere element verwijderen uit de DOM

const deleteAllItems = document.getElementById("remove-all-button");

deleteAllItems.addEventListener("click", deleteAll);

function deleteAll() {
    const spottedAnimalList = document.getElementById("spotted-animals-list");
    spottedAnimalList.querySelectorAll("*").forEach(n => n.remove());
    // Alternatief:
    // spottedAnimalList.innerHTML = "";
}