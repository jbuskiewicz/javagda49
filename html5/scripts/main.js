// console.log("Hello world!");

// obiekt document reprezentuje całe drzewo HTML w JS
// console.log(document);

// ES6
// let - zmienna, którą możemy nadpisać
// const - stała


// JIT
// hoisting
// console.log(addTwoNumbers(1, 2));

function addTwoNumbers(a, b) {
    return a + b;
}

// temporary dead zone
// console.log(number);
// let number = 1;

// przypisanie headera do zmiennej
const headerContainer = document.querySelector(".topHeader");
// const headerContainer = document.getElementById();
// const headerContainer = document.getElementsByClassName();
// const headerContainer = document.getElementsByName();

// headerContainer.innerHTML = "<p>test</p>";

document.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        // headerContainer.classList.add("");
    } else {
        // headerContainer.classList.remove("");
    }
}

// JS
// musimy wybrać kontener znacznika "main"

// CSS
// musimy stworzyć dwie klasy - jedną dla headera (która nada position fixed etc)
// drugą dla maina, która doda margin-top: 100px