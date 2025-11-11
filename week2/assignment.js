let num1 = 10,
  num2 = 5;
let num3 = 20,
  num4 = 8;
let num5 = 6,
  num6 = 7;
let num7 = 50,
  num8 = 10;

function addNumbers() {
  let sum = num1 + num2;
  document.getElementById("addResult").innerText = `Sum: ${sum}`;
}

function subtractNumbers() {
  let diff = num3 - num4;
  document.getElementById("subResult").innerText = `Difference: ${diff}`;
}

function multiplyNumbers() {
  let product = num5 * num6;
  document.getElementById("mulResult").innerText = `Product: ${product}`;
}

function divideNumbers() {
  let quotient = num7 / num8;
  document.getElementById("divResult").innerText = `Quotient: ${quotient}`;
}

function showHeroImage() {
  const input = document.getElementById("heroInput").value.toLowerCase().trim();
  const img = document.getElementById("heroImage");
  const msg = document.getElementById("heroMessage");

  if (input === "marvel") {
    img.src = "https://static.posters.cz/image/750/31869.jpg";
    img.alt = "Marvel";
    img.style.display = "block";
  } else if (input === "dc") {
    img.src =
      "https://upload.wikimedia.org/wikipedia/en/1/19/DC_Universe_by_Gary_Frank.jpg";
    img.alt = "DC";
    img.style.display = "block";
  } else {
    msg.innerText = "Invalid input. Please enter 'marvel' or 'dc'.";
    img.style.display = "none";
  }
}
