function validateEmails() {
  var email1 = document.getElementById("emails").value;
  var email2 = document.getElementById("verifyemail").value;

  if (email1 !== email2) {
    alert("Emails do not match!");
    return false;
  }
  return true;
}
