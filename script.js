const inputKmElement = document.getElementById("inputKm");
const inputAgeElement = document.getElementById("inputAge");
const inputBtnElement = document.getElementById("btnCalculate");
const ticketPriceElement = document.getElementById("ticketPrice");

const pricePerKm = 0.21;
const discountPercentageForMinors = 0.2;
const discountPercentageForElderly = 0.4;

const calculatePrice = (km, age) => {
  let price = km * pricePerKm;
  if (age == "minor") {
    price = price - price * discountPercentageForMinors;
  } else if (age == "gandalf") {
    price = price - price * discountPercentageForElderly;
  }
  return price.toFixed(2);
};

const onButtonClicked = (event) => {
  const calculatedPrice = calculatePrice(
    inputKmElement.value,
    inputAgeElement.value,
  );

  ticketPriceElement.innerHTML = calculatedPrice;

  event.preventDefault();
};

inputBtnElement.addEventListener("click", onButtonClicked);

// :(
