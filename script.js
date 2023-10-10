document.getElementById("calculate").addEventListener("click", function () {
    const birthdate = document.getElementById("birthdate").value;
    if (birthdate) {
        const today = new Date();
        const birthDate = new Date(birthdate);
        const age = today.getFullYear() - birthDate.getFullYear();

        document.getElementById("result").textContent = `Your age is ${age} years.`;
    } else {
        alert("Please enter a valid birthdate.");
    }
});

