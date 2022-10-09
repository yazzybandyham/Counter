// set initial count
let count = 0;

//select value and buttons
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");


buttons.forEach(function (btn) {
    btn.addEventListener("click", function(e) {
        //access classes in buttons
        const styles = e.currentTarget.classList;

        //selects specific class within button
        if(styles.contains("decrease")) {
            count--;
        } else if(styles.contains("increase")) {
            count++;
        } else if(styles.contains("reset")) {
            count = 0;
        }

        //changes colour of counter
        if (count > 0) {
            value.style.color = "green";
        } else if (count < 0) {
            value.style.color = "red";
        } else if (count === 0) {
            value.style.color = "#102A42";
        }
        value.textContent = count;
    });
});