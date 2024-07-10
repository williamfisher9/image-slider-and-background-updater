let container = document.querySelector(".container");

window.addEventListener("load", () => {
  let sliderDiv = document.createElement("div");
  sliderDiv.classList.add("slider");

  for (let i = 1; i < 7; i++) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.classList.add("card" + i);
    cardDiv.style.setProperty("--position", `${i}`)

    let cardInner = document.createElement("div");
    cardInner.classList.add("card-inner");

    let cardImgDiv = document.createElement("div");
    cardImgDiv.classList.add("card-img");
    cardImgDiv.style.background = `url('./assets/${i}.jpg') center/cover no-repeat`;

    let cardInfoDiv = document.createElement("div");
    cardInfoDiv.classList.add("card-info");

    let cardInfo = document.createElement("h3");
    cardInfo.innerText = `Picture ${i}`;

    cardInfoDiv.appendChild(cardInfo);

    cardInner.appendChild(cardImgDiv);
    cardInner.appendChild(cardInfoDiv);

    cardDiv.appendChild(cardInner);

    sliderDiv.appendChild(cardDiv);    
  }

  container.appendChild(sliderDiv);

  let cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
        container.style.backgroundImage = card.childNodes[0].childNodes[0].style.backgroundImage;
        container.style.backgroundSize = "cover";
        container.style.backgroundPosition = "center";
        container.style.backgroundRepeat = "no-repeat";
    })
  })
});

