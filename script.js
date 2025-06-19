const passwordOutput = document.getElementById("password");
const lengthInput = document.getElementById("length");
const copyBtn = document.getElementById("copyBtn");

const checkboxAlphabets = document.getElementById("alphabets");
const checkboxNumbers = document.getElementById("numbers");
const checkboxSpecial = document.getElementById("special");

const generateBtn = document.getElementById("generateBtn");

function generatePassword() {
  const length = parseInt(lengthInput.value);
  const includeAlpha = checkboxAlphabets.checked;
  const includeNum = checkboxNumbers.checked;
  const includeSpecial = checkboxSpecial.checked;

  const alphaChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const numChars = "0123456789";
  const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let charPool = "";
  if (includeAlpha) charPool += alphaChars;
  if (includeNum) charPool += numChars;
  if (includeSpecial) charPool += specialChars;

  if (charPool.length === 0) {
    passwordOutput.textContent = "Select at least one option";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * charPool.length);
    password += charPool[randIndex];
  }

  passwordOutput.textContent = password;
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
  const text = passwordOutput.textContent;
  if (text && text !== "Click Generate" && text !== "Select at least one option") {
    navigator.clipboard.writeText(text)
      .then(() => {
        copyBtn.textContent = "✅";
        setTimeout(() => {
          copyBtn.textContent = "📋";
        }, 1000);
      })
      .catch(err => {
        alert("Failed to copy: " + err);
      });
  }
});
