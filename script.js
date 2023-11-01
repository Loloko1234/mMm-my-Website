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
  const passwordField = document.getElementById("temat1");
  const passwordDisplay = document.getElementById("temat1");
  const showPasswordButton = document.querySelector(".show-password");

  if (passwordField.type === "password") {
    passwordDisplay.textContent = passwordField.value;
    passwordField.type = "text";
    showPasswordButton.innerHTML = "<i class='fa-regular fa-eye-slash'></i>";
  } else {
    passwordDisplay.textContent = "";
    passwordField.type = "password";
    showPasswordButton.innerHTML = "<i class='fa-regular fa-eye'></i>";
  }
}
function kontakt() {
  let zgoda = document.getElementById("zgoda");
  let email = document.getElementById("email").value;
  let temat = document.getElementById("temat").value;
  let wiadomosc = document.getElementById("wiadomosc").value;
  let brakwiadomosc = document.getElementById("brakwiadomosc");
  let braktext = document.getElementById("braktext");
  let brakemail = document.getElementById("brakemail");
  let zgodnosc = 0;
  if (zgoda.checked) {
    if (email == "") {
      brakemail.textContent = "Podaj Email !!";
    } else {
      brakemail.textContent = "";
      zgodnosc++;
    }
    if (temat == "") {
      braktext.textContent = "Podaj temat !!";
    } else {
      braktext.textContent = "";
      zgodnosc++;
    }

    if (wiadomosc == "") {
      brakwiadomosc.textContent = "Podaj Wiadomość !!";
    } else {
      brakwiadomosc.textContent = "";
      zgodnosc++;
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
  if (zgodnosc == 3) {
    console.log(true);
    // ----------------------------------------------------- WYNIK WYSYŁANIA ----------------------------------------------------
  }
}
function zalogujsie() {
  let emaillogin = document.getElementById("emaillogin").value;
  let temat1 = document.getElementById("temat1").value;
  let brakemailzal = document.getElementById("brakemailzal");
  let brakpasszal = document.getElementById("brakpasszal");
  let logincount = 0;
  if (emaillogin == "") {
    brakemailzal.textContent = "Podaj Prawidłowy Email !!";
  } else {
    if (emaillogin == "Adam123") {
      logincount++;
    }
  }
  if (temat1 == "") {
    brakpasszal.textContent = "Podaj Prawidłowe Hasło";
  } else {
    if (temat1 == "Adam123") {
      logincount++;
    }
  }
  if (logincount == 2) {
    document.cookie = "userLoggedIn=true";
    window.location.reload();
  }
}
//
//
//
//
//
//
const userLoggedIn = document.cookie.includes("userLoggedIn=true");
const zalogujsiee = document.querySelector(".login-button");
const loginpanel = document.querySelector(".login-panel");
const loginpanel1 = document.querySelector(".login-panel1");
const logincontainer = document.querySelector(".login-container");
const body = document.querySelector(".body");
if (userLoggedIn) {
  zalogujsiee.textContent = "Adam";
  zalogujsiee.href = "javascript:void(0);";
  loginpanel.style.display = "none";
  document.addEventListener("click", function (event) {
    if (!logincontainer.contains(event.target)) {
      loginpanel1.style.display = "none";
    }
  });
  logincontainer.addEventListener("click", function () {
    if (loginpanel1.style.display === "block") {
      loginpanel1.style.display = "none";
    } else {
      loginpanel1.style.display = "block";
    }
  });
} else {
  zalogujsiee.textContent = "Zaloguj się";
  console.log("niezalogowany");
}

// -----------------------------------------------
//
//
//
// ---------------------------------------------------

function wyloguj() {
  document.cookie = "userLoggedIn=false";
  alert("Udało ci się wylogować");
  window.location.reload();
}

const koszyki = [
  document.querySelector("#koszyk1"),
  document.querySelector("#koszyk2"),
  document.querySelector("#koszyk3"),
  document.querySelector("#koszyk4"),
  document.querySelector("#koszyk5"),
  document.querySelector("#koszyk6"),
];

function DodajDoKoszyka() {
  let ilosczamow = document.querySelector(".quantity-input").value;
  let nazwaprod = document.querySelector(".naglowek--podstrona").textContent;

  // Iteruj przez koszyki, aby znaleźć produkt o takiej samej nazwie lub pusty
  let foundIndex = -1;

  for (const [index, koszyk] of koszyki.entries()) {
    if (koszyk.innerHTML.includes(nazwaprod)) {
      foundIndex = index;
      break;
    } else if (koszyk.innerHTML === "") {
      foundIndex = index;
      break;
    }
  }

  if (foundIndex !== -1) {
    const koszyk = koszyki[foundIndex];
    const oldContent = koszyk.innerHTML;

    if (oldContent.includes(nazwaprod)) {
      // Aktualizuj ilość
      const regex = /Szt\. \d+/;
      const oldQuantity = parseInt(oldContent.match(regex)[0].split(" ")[1]);
      const newQuantity = oldQuantity + parseInt(ilosczamow);
      koszyk.innerHTML = oldContent.replace(regex, `Szt. ${newQuantity}`);
    } else {
      // Dodaj nowy produkt
      koszyk.innerHTML = `<img class='koszyk' src='klawiatura.png'/><p class='koszyczek'>${nazwaprod}</p><br><p class='koszyczek'>Szt. ${ilosczamow}&nbsp;</p></br><button class="Usundany"onclick="usundanyprodukt(${foundIndex})"><i class="fa-regular fa-trash-can fa-lg"></i></button>`;
    }

    // Zapisz stan koszyków w Local Storage
    ZapiszStanKoszykow(koszyki);
  }
}
function usundanyprodukt(index) {
  koszyki[index].innerHTML = "";
  ZapiszStanKoszykow(koszyki);
  const shopingcart = document.querySelector(".koszyk-panel");
  if (koszyki.every((koszyk) => koszyk.innerHTML === "")) {
    shopingcart.style.backgroundImage = 'url("cart-shopping-solid (1).svg")';
    document.querySelector("#koszykbutt").style.top = "85px";
    document.querySelector("#koszykbuttleft").style.top = "85px";
    console.log("Koszyk jest pusty");
  }
}

// Funkcja do zapisywania stanu koszyków w Local Storage
function ZapiszStanKoszykow(koszyki) {
  const stanKoszykow = [];

  for (const koszyk of koszyki) {
    stanKoszykow.push(koszyk.innerHTML);
  }
  const shopingcart = document.querySelector(".koszyk-panel");
  shopingcart.style.backgroundImage = "none";
  koszmyk.style.top = "0px";
  koszmyk1.style.top = "0px";
  localStorage.setItem("stanKoszykow", JSON.stringify(stanKoszykow));
}

// Funkcja do wczytywania stanu koszyków z Local Storage
function WczytajStanKoszykow(koszyki) {
  const stanKoszykowJSON = localStorage.getItem("stanKoszykow");
  if (stanKoszykowJSON) {
    const stanKoszykow = JSON.parse(stanKoszykowJSON);

    for (let i = 0; i < koszyki.length; i++) {
      koszyki[i].innerHTML = stanKoszykow[i] || "";
    }
  }
}

WczytajStanKoszykow(koszyki);
function usunkoszyk() {
  localStorage.removeItem("stanKoszykow");
  WczytajStanKoszykow(koszyki);
  for (let i = 0; i < koszyki.length; i++) {
    const shopingcart = document.querySelector(".koszyk-panel");
    shopingcart.style.backgroundImage = 'url("cart-shopping-solid (1).svg")';
    koszyki[i].innerHTML = "";
    koszmyk.style.top = "85px";
    koszmyk1.style.top = "85px";
  }
  console.log("a");
}
const shopingcart = document.querySelector(".koszyk-panel");
let koszmyk = document.querySelector("#koszykbutt");
let koszmyk1 = document.querySelector("#koszykbuttleft");
if (koszyki[0].innerHTML != "") {
  console.log("asa");
  shopingcart.style.backgroundImage = "none";
  koszmyk.style.top = "0";
  koszmyk1.style.top = "0";
}
if (koszyki[0].innerHTML == "") {
  koszmyk.style.top = "85px";
  koszmyk1.style.top = "85px";
}
const przycisk = document.getElementById("przycisk");
const przycisk1 = document.getElementById("przycisk1");
const przycisk2 = document.getElementById("przycisk2");
const przycisk3 = document.getElementById("przycisk3");
