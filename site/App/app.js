alert("connect");

document.getElementById("ans_button").addEventListener("click", sendAnswer); 

function sendAnswer() {
    let count = 0;
    const ans1 = 4;
    const ans2 = 16;
    const ans3 = 3;
    const ans4 = 125;
    ans1 != document.getElementById("1").value ? count : count++;
    ans2 == document.getElementById("2").value ? count++ : count;
    ans3 == document.getElementById("3").value ? count++ : count;
    ans4 == document.getElementById("4").value ? count++ : count;
    alert(`${count} correct answers`);
}