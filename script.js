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
function changeText(index) {
  const content = document.getElementById("content");
  const texts = [
    '<span class="content--footer">SPC Gear GK630K Onyx White Tournament Kailh Brown RGB to biała odsłona klawiatury GK630K. Jej jasna stylistyka nawiązuje do wyjątkowo rzadkiej białej odmiany onyksu — cennego minerału znanego z wysokiej wytrzymałości i nietuzinkowego wyglądu. Mała, skrócona o blok numeryczny konstrukcja świetnie sprawdza się zarówno w domowym zaciszu, jak również na turniejach czy LAN party ze znajomymi. Klawiatura wyposażona została w wielokolorowe podświetlenie RGB, które wraz z nakładkami typu Pudding rozświetlą stanowisko gracza pełną paletą barw. Przełączniki Kailh Brown dzięki uniwersalnej i zbalansowanej charakterystyce pozwalają na grę na najwyższym poziomie oraz wygodne i precyzyjne pisanie.</span>',
  ];

  content.innerHTML = texts[index];
}

function displayTable() {
  const content = document.getElementById("content");

  const tableContent = `
  <div class="table-container">
  <div class="table-column">
      <ul class="table-wrapper">
        <li>
          <span>Kod produktu</span>
          <span>SPG063</span>
        </li>
        <li>
          <span>EAN</span>
          <span>5903018661865</span>
        </li>
        <li>
          <span>Wymiary produktu [MM]</span>
          <span>361,5×140×42,5</span>
        </li>
        <li>
          <span>Waga netto [G]</span>
          <span>915</span>
        </li>
        <li>
          <span>Waga brutto [G]</span>
          <span>1105</span>
        </li>
        <li>
          <span>Wymiary opakowania [MM]</span>
          <span>400×190×50</span>
        </li>
        <li>
          <span>Typ klawiatury</span>
          <span>Mechaniczna</span>
        </li>
        <li>
          <span>Liczba przycisków</span>
          <span>87</span>
        </li>
        <li>
          <span>Materiał nakładek</span>
          <span>PBT (PUDDING WHITE)</span>
        </li>
        <li>
          <span>Rodzaj przełączników</span>
          <span>KAILH</span>
        </li>
        <li>
          <span>Kolor przełączników</span>
          <span>BROWN/BRĄZOWE</span>
        </li>
    </ul>
    </div>

        <div class="table-column">
        <ul class="table-wrapper">

        
        <li>
          <span>Częstotliwość próbkowania</span>
          <span>1000</span>
        </li>
        <li>
          <span>Rodzaj podświetlenia</span>
          <span>RGB</span>
        </li>
        <li>
          <span>Długość kabla [M]</span>
          <span>1,8</span>
        </li>
        <li>
          <span>Rodzaj wtyku</span>
          <span>POZŁACANY USB</span>
        </li>
        <li>
          <span>Programowalne makra</span>
          <span>TAK</span>
        </li>
        <li>
          <span>N-Key rollover</span>
          <span>PEŁNY</span>
        </li>
        <li>
          <span>Anti-Ghosting</span>
          <span>PEŁNY</span>
        </li>
        <li>
          <span>Kompatybilność</span>
          <span>WINDOWS, MAC, LINUX</span>
        </li>
        <li>
          <span>Oprogramowanie</span>
          <span>TAK (OPCJONALNE DLA WINDOWS 10)</span>
        </li>
        <li>
          <span>Gwarancja (miesiące)</span>
          <span>24</span>
        </li>
      </ul>
      </div>
      </div>
    `;

  content.innerHTML = tableContent;
}
function togglePasswordVisibility() {
  const passwordField = document.getElementById("temat");
  const passwordDisplay = document.getElementById("temat");
  const showPasswordButton = document.querySelector(".show-password");

  if (passwordField.type === "password") {
    passwordDisplay.textContent = passwordField.value;
    passwordField.type = "text";
    showPasswordButton.textContent = "Ukryj";
  } else {
    passwordDisplay.textContent = "";
    passwordField.type = "password";
    showPasswordButton.textContent = "Pokaż";
  }
}
function kontakt() {
  let zgoda = document.getElementById("zgoda");
  let email = document.getElementById("email").value;
  let temat = document.getElementById("temat").value;
  let wiadomosc = document.getElementById("wiadomosc").value;
  if (zgoda.checked) {
    if (email == "") {
      console.log("podaj email");
    }
    if (temat == "") {
      console.log("podaj temta");
    }
    if (wiadomosc == "") {
      console.log("podaj wiadomosc");
    }
  } else {
    alert(
      "Przed wysłaniem wiadomości, należy wyrazić zgodę na przetwarzanie danych osobowych w celu obsługi zgłoszenia."
    );

    let zgodastyle = document.querySelector(".zgoda");
    zgodastyle.style.color = "#d0121a";
    zgodastyle.style.border = "2px dashed #d0121a";
    let zgodastyle1 = document.querySelector("#zgoda");
    zgodastyle1.style.borderColor = "red";
  }
}
