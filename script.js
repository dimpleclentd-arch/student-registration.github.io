const form = document.getElementById("form");
const name = document.getElementById("name");
const section = document.getElementById("section");
const course = document.getElementById("course");
const email = document.getElementById("email");
const year = document.getElementById("year");

const preview = document.getElementById("preview");
const clearBtn = document.getElementById("clearBtn");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const nameValue = name.value;
    const sectionValue = section.value;
    const courseValue = course.value;
    const emailValue = email.value;
    const yearValue = year.value;

    if(nameValue === "" || sectionValue === "" || courseValue === "" || emailValue === "" || yearValue === ""){
        alert("Please fill all fields");
        return;
    }

    preview.innerHTML =
    "Student Name: " + nameValue +
    "<br>Section: " + sectionValue +
    "<br>Course: " + courseValue +
    "<br>Email: " + emailValue +
    "<br>Year Level: " + yearValue;

});