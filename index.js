const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f",
    "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#",
    "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

const copyBtn1 = document.getElementById("copy-btn-1")
const copyBtn2 = document.getElementById("copy-btn-2")


password1.addEventListener("focus", () => password1.select())

let inputEl = document.getElementById("input")


function generatePassword() {
    let passwordLength = Number(inputEl.value);
    if (passwordLength <= 40) {
        let randomPassword1 = ""
        for (let i = 0; i < passwordLength; i++) {
            randomPassword1 += characters[Math.floor(Math.random() * characters.length)]
        }
        password1.textContent = randomPassword1
        let randomPassword2 = ""
        for (let i = 0; i < passwordLength; i++) {
            randomPassword2 += characters[Math.floor(Math.random() * characters.length)]
        }
        password2.textContent = randomPassword2
    }
    else { alert("No more than 40 characters") }
    inputEl.value = ""
}

copyBtn1.addEventListener("click", () => {
    const password1 = document.getElementById("password1");
    const currentPassword1 = password1.textContent;
    navigator.clipboard.writeText(currentPassword1);
})
copyBtn2.addEventListener("click", () => {
    const password2 = document.getElementById("password2");

    const currentPassword2 = password2.textContent;
    console.log(currentPassword2)
    navigator.clipboard.writeText(currentPassword2);
})
