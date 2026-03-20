const inputAgeElement = document.getElementById("inputAge");
const inputNameElement = document.getElementById("inputName");
const inputKmElement = document.getElementById("inputKm");
const buttonCalculateElement = document.getElementById("buttonCalculate");

const pricePerKm = 0.21;
const discountPerMinors = 0.2;
const discountPerElders = 0.4;

const calculatePrice = (km, age) => {
  let price = km * pricePerKm;
  if (age < 18) {
    // il nuovo prezzo dovrà essere scontato del 20% se il passeggero è minorenne
    price -= price * discountPerMinors;
  } else if (age > 65) {
    price -= price * discountPerElders;
  }
  return price.toFixed(2);
};
const onButtonClicked = (Event) => {
  const calculatedPrice = calculatePrice(
    inputKmElement.value,
    inputAgeElement.value,
  );
  console.log(calculatedPrice);
  Event.preventDefault();
};
buttonCalculateElement.addEventListener("click", onButtonClicked);
