const btn = document.getElementById("show-message")
const inputText = document.getElementById("input-text")
const btnShowText = document.getElementById("show-text")
const form = document.getElementById("form")

// desafio 01
btn.addEventListener("click", () => {
    alert("Olá, mundo!")
})

// desafio 02
btnShowText.addEventListener("click", () => {
    const value = inputText.value;
    alert(value)
})

// desafio 05
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formDataObject = Object.fromEntries(formData.entries());
    console.log(formDataObject);
    alert(JSON.stringify(formDataObject));
})

