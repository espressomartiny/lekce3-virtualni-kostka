// tady je místo pro náš program

function hazej() {
  let kostka = document.querySelector("#kostka");
  let hod = Math.floor(Math.random() * 6 + 1);
  let zprava = document.querySelector("#zprava");
  kostka.src = "obrazky/" + hod + ".png";
  // console.log(hod)
  if (hod < 6) {
    zprava.textContent = "Padla " + hod + ", házej znovu!";
  } else {
    zprava.textContent = "Jupí! Padla " + hod;
  }
  //   if (hod === 1) {
  //     kostka.src = "obrazky/1.png";
  //   } else if (hod === 2) {
  //     kostka.src = "obrazky/2.png";
  //   } else if (hod === 3) {
  //     kostka.src = "obrazky/3.png";
  //   } else if (hod === 4) {
  //     kostka.src = "obrazky/4.png";
  //   } else if (hod === 5) {
  //     kostka.src = "obrazky/5.png";
  //   } else {
  //     kostka.src = "obrazky/6.png";
  //     zprava.textContent = "Jupí! Padla " + hod;
  //   }
}
