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
        "<h2>Student Information Preview</h2>" +
        "<p>Student Name: " + nameValue + "</p>" +
        "<p>Section: " + sectionValue + "</p>" +
        "<p>Course: " + courseValue + "</p>" +
        "<p>Email: " + emailValue + "</p>" +
        "<p>Year Level: " + yearValue + "</p>";

});

clearBtn.addEventListener("click", () => {

    name.value = "";
    section.value = "";
    course.value = "";
    email.value = "";
    year.value = "";

    preview.innerHTML = "<h2>Student Information Preview</h2>";

});
