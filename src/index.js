const formulario = document.getElementById("formulario");

const cardInfo = document.getElementById("cardInfo");

function handleSubmit(e) {
  e.preventDefault();
  const inputHeigth = Number(e.target[0].value) / 100;
  const inputWeigth = Number(e.target[1].value);
  const imc = (inputWeigth / inputHeigth ** 2).toFixed(1);
  console.log(imc);

  cardInfo.innerHTML = `
    <p class="parrafo__imc" > Su Indice de Masa Corporal es: </p>
    <p class="result__imc" > ${imc} kg/m2 </p>
    `;
  e.target.reset();
}

formulario.addEventListener("submit", handleSubmit);
