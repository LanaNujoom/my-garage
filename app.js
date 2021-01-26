'use strict';


// ================
// Global Variables
// ===============


var ourForm = document.getElementById('formlist');
var parentTable = document.getElementById('ourParentTable');
var allCars = [];





// ================
// Functions
// ================

function Mycars (name,category,year){
    this.name = name;
    this.category = category;
    this.year = year;
    this.path = `img/${category}.png`;
    allCars.push(this);

}



Mycars.prototype.renderItems = function() {

    var tableRow = document.createElement('tr');

    var itemImage = document.createElement('img');
    itemImage.setAttribute('src', this.path);
    var itemImageData = document.createElement('td');
    itemImageData.appendChild(itemImage);

    var itemNameData = document.createElement('td');
    itemNameData.textContent = 'Car Name : ' + this.name;

    var itemYearData = document.createElement('td');
    itemYearData.textContent = 'Model Year :' + this.year;

    tableRow.appendChild(itemImageData);
    tableRow.appendChild(itemNameData);
    tableRow.appendChild(itemYearData);

    parentTable.appendChild(tableRow);




}

function handleSubmitCar (event){
    event.preventDefault();
    
    var itemName = event.target.name.value;
    var itemCategory = event.target.category.value;
    var itemYear = event.target.year.value;
    var newItem = new Mycars(itemName,itemCategory,itemYear);
    newItem.renderItems();
    localStorage.setItem('wishlist', JSON.stringify(allCars));
    
}


function renderAll (){

    var tableRow = document.createElement('tr');

    var itemImage = document.createElement('img');
    itemImage.setAttribute('src', allCars[index].path);
    var itemImageData = document.createElement('td');
    itemImageData.appendChild(itemImage);

    var itemNameData = document.createElement('td');
    itemNameData.textContent = 'Car Name : ' + allCars[index].name;

    var itemYearData = document.createElement('td');
    itemYearData.textContent = 'Model Year :' + allCars[index].year;

    tableRow.appendChild(itemImageData);
    tableRow.appendChild(itemNameData);
    tableRow.appendChild(itemYearData);

    parentTable.appendChild(tableRow);


}

function checkLs(){

    if (localStorage.getItem('wishlist')) {
        renderAll();
        
    }
}

// ================
// Function Calls & Event Listeners
// ================



ourForm.addEventListener('submit',handleSubmitCar);
checkLs();