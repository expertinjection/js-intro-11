const buttonEl = document.getElementById("btn");
const inputEl = document.getElementById("name");

buttonEl.addEventListener("click", (event) =>{
    console.log(event.target);
    console.log("Button clicked");
})


inputEl.addEventListener("change", (event) =>{
    console.log("value", event.target.value);
    console.log("Input changed");
})