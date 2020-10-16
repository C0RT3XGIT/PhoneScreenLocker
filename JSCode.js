let pass = [1112];
var x = "";
var alertCount = 0;
var enteredCode = "";
var btnCount = 11;
var btnNum;
var newPass;

function lockButtons() {
  for (let i = 0; i <= btnCount; i++) {
    x = document.getElementById(`btn${i}`);
    x.disabled = flase;
  }
}

function btnAction(btnNum) {
  let y = [];
  enteredCode = enteredCode + btnNum;
  y = btnNum;
  document.getElementById("passInput").value += y;

  if (enteredCode.length == 4) {
    alert("Checking Password");

    if (enteredCode == pass) {
      alert("Phone was succesful unlocked !");
      enteredCode = "";
      document.getElementById("passInput").value = "";
    } else {
      alert("Invalid password ! Try again !");
      enteredCode = "";
      document.getElementById("passInput").value = "";
      alertCount++;
    }

    if (alertCount >= 3) {
      setTimeout(lockButtons, 10000);
      alert(
        "You entered a wrong 3 times in a row ! Phone is locked for 1 minute !"
      );
      alertCount = 0;
      for (let i = 0; i <= btnCount; i++) {
        x = document.getElementById(`btn${i}`);
        x.disabled = true;
      }
    }
  }
}

function getNewPass() {
  pass = document.getElementById("setNewPin").value;
  alert(
    `A new password has been set !  ${
      document.getElementById("setNewPin").value
    }`
  );
}

function delElement(x) {
  var a = document.getElementById(x),
    b = a.value;
  a.value = b.substring(0, b.length - 1);
}
