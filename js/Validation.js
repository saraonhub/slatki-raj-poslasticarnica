function EmailValidation() {
  var input = document.getElementById("inputEmail");
  var pattern = /^[a-zA-Z0-9]{2,50}\@[a-z0-9]{3,15}\.[a-z]{2,12}$/;
  var text = input.value;

  if (!text.match(pattern)) {
    alert("Uneti email nije validan! Pokusajte ponovo!");
    input.focus();
    return false;
  } else {
    alert("Vaša porudžbina je uspešno poslata!");
    return true;
  }
}
