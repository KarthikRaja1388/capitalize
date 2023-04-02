let nameElement = document.querySelector(".name");
let capitalize = document.querySelector(".btn-capitalize");

capitalize.addEventListener("click", (event) => {
  event.preventDefault();
  let name = nameElement.value;
  let display = document.querySelector(".display");

  let capitalizedLetter = name[0].toUpperCase();
  let formattedName =
    name[0] == capitalizedLetter ? name : capitalizedLetter + name.slice(1);

  display.innerHTML = "Hello,&nbsp;" + formattedName + "!";
});
