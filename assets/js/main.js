let zvE = document.getElementById('number')
let married = document.getElementById('married')
let alone = document.getElementById('alone')
let year = document.getElementById('year')
let esteuer = document.getElementById('est')




function berechneEst() {
  let est;
  //////////////////////////////// 2021 /////////////////////
  if (year.value === "2021") {
    // Für Alleinstehende
    if (!married.checked) {
      if (zvE.value <= 9744 && zvE.value >= 0) {
        est = 0
        esteuer.innerHTML = est.toFixed(2)
      } else if (zvE.value >= 9745 && zvE.value <= 14753) {
        let y = (zvE.value - 9744) / 10000
        est = (995.21 * y + 1400) * y
        esteuer.innerHTML = est.toFixed(2)
      } else if (zvE.value >= 14754 && zvE.value <= 57918) {
        let z = (zvE.value - 14753) / 10000
        est = (208.85 * z + 2397) * z + 950.96
        esteuer.innerHTML = est.toFixed(2)
      } else if (zvE.value >= 57919 && zvE.value <= 274612) {
        est = 0.42 * zvE.value - 9136.63
        esteuer.innerHTML = est.toFixed(2)
      } else {
        est = 0.45 * zvE.value - 17374.99
        esteuer.innerHTML = est.toFixed(2)
      }
    } else {
      // Für Verheiratete
      if (zvE.value <= 9744 && zvE.value >= 0) {
        est = 0
        esteuer.innerHTML = est.toFixed(2)
      } else if (zvE.value >= 9745 && zvE.value <= 14753) {
        let y = (zvE.value - 9744) / 10000
        est = (995.21 * y + 1400) * y
        esteuer.innerHTML = est.toFixed(2)
      } else if (zvE.value >= 14754 && zvE.value <= 57918) {
        let z = (zvE.value - 14753) / 10000
        est = (208.85 * z + 2397) * z + 950.96
        esteuer.innerHTML = est.toFixed(2)
      } else if (zvE.value >= 57919 && zvE.value <= 274612) {
        est = 0.42 * zvE.value - 9136.63
        esteuer.innerHTML = est.toFixed(2)
      } else {
        est = 0.45 * zvE.value - 17374.99
        esteuer.innerHTML = est.toFixed(2)
      }
    }
  }
  //////////////////////////////// 2020 /////////////////////
  else {
    // Für Alleinstehende
    if (!married.checked) {
      if (zvE.value <= 9408 && zvE.value >= 0) {
        est = 0
        esteuer.innerHTML = est.toFixed(2)
      } else if (zvE.value >= 9409 && zvE.value <= 14532) {
        let y = (zvE.value - 9408) / 10000
        est = (972.87 * y + 1400) * y
        esteuer.innerHTML = est.toFixed(2)
      } else if (zvE.value >= 14533 && zvE.value <= 57051) {
        let z = (zvE.value - 14532) / 10000
        est = (212.02 * z + 2397) * z + 972.79
        esteuer.innerHTML = est.toFixed(2)
      } else if (zvE.value >= 57052 && zvE.value <= 270500) {
        est = 0.42 * zvE.value - 8963.74
        esteuer.innerHTML = est.toFixed(2)
      } else {
        est = 0.45 * zvE.value - 17078.74
        esteuer.innerHTML = est.toFixed(2)
      }
    } else {
      // Für Verheiratete
      if (zvE.value <= 9744 && zvE.value >= 0) {
        est = 0
        esteuer.innerHTML = est.toFixed(2)
      } else if (zvE.value >= 9745 && zvE.value <= 14753) {
        let y = (zvE.value - 9744) / 10000
        est = (995.21 * y + 1400) * y
        esteuer.innerHTML = est.toFixed(2)
      } else if (zvE.value >= 14754 && zvE.value <= 57918) {
        let z = (zvE.value - 14753) / 10000
        est = (208.85 * z + 2397) * z + 950.96
        esteuer.innerHTML = est.toFixed(2)
      } else if (zvE.value >= 57919 && zvE.value <= 274612) {
        est = 0.42 * zvE.value - 9136.63
        esteuer.innerHTML = est.toFixed(2)
      } else {
        est = 0.45 * zvE.value - 17374.99
        esteuer.innerHTML = est.toFixed(2)
      }
    }
  }
}

berechneEst();

