// Menu Arrays
const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $22.99', 'Oatmeal - $21.99', 'Frittata - $15'];
const maincourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

// Map Method
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
    document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// forEach - Main Course Menu
let maincourseTotalItems = '' ;
    maincourseMenu.forEach((item, index) => {
    maincourseTotalItems += `<p>Item ${index + 1}: ${item}</p>`;});
    document.getElementById('maincourseMenuItems').innerHTML = maincourseTotalItems;

// Dessert Menu forLoop
let dessertItem = '' ;
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
    document.getElementById('dessertMenuItems').innerHTML = dessertItem;
