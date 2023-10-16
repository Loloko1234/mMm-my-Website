function increase() {
  let inputElement = document.querySelector("#quantity-inputt");
  let value = parseInt(inputElement.value);

  if (value < 100) {
    value++;
    inputElement.value = value;
  }
}
function decrease() {
  let inputElement = document.querySelector("#quantity-inputt");
  let value = parseInt(inputElement.value);
  if (value > 0 && value < 100) {
    value--;
    inputElement.value = value;
  }
}
