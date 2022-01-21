import { student } from "./Student.js"

document.addEventListener("DOMContentLoaded", () => {
    const addUserBtn = document.getElementById("addUser");
    addUserBtn.addEventListener("click", () => {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let dob = document.getElementById("dob").value;
        let contact = document.getElementById("contact").value;
        let choice = document.getElementById("choice").value;
        let user = null
        switch (choice) {
            case "student":
                user = new Student(name, email, dob, contact);
                alert("Congratulation! You are succesfully registered. Your ID is : " + user.id);
                break;
        }
    })
})