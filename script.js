
const ageInput = document.getElementById("age");
const ageResult = document.getElementById("ageResult");
document.getElementById("checkAgeBtn").addEventListener("click", function() {
    let age = parseInt(ageInput.value);
    if (age >= 18) {
        ageResult.textContent = "You are an adult ✅";
    } else {
        ageResult.textContent = "You are a minor ❌";
    }
});

function greetUser(name) {
    return `Hello, ${name}! 👋`;
}

function squareNumber(num) {
    return num * num;
}

document.getElementById("greetBtn").addEventListener("click", function() {
    let name = prompt("Enter your name:");
    document.getElementById("greetResult").textContent = greetUser(name);
});


document.getElementById("loopBtn").addEventListener("click", function() {
    const numberList = document.getElementById("numberList");
    numberList.innerHTML = ""; 
    for (let i = 1; i <= 5; i++) {
        let li = document.createElement("li");
        li.textContent = `Number ${i}`;
        numberList.appendChild(li);
    }
});
document.getElementById("changeColorBtn").addEventListener("click", function() {
    document.getElementById("title").style.color = "green";
});
