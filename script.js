let dzielniki = 0;

function CoToZaLiczba(Liczba) {
  document.write(Liczba + "<br>");
  if (Liczba > 0) {
    document.write("Liczba jest naturalna");
  } else {
    document.write("Liczba nie jest naturalna");
  }

  document.write("<br>");

  if (Liczba == Math.round(Liczba)) {
    document.write("Liczba jest całkowita");
  } else {
    document.write("Liczba nie jest całkowita");
  }

  document.write("<br>");

  if (Liczba % 2 == 0) {
    document.write("Liczba jest parzysta");
  } else {
    document.write("Liczba nie jest parzysta");
  }

  document.write("<br>");

  for (let index = 1; index <= Liczba; index++) {
    if (Liczba % index == 0) {
      dzielniki++;
    }
  }
  if (dzielniki == 2) {
    document.write("Liczba jest pierwsza");
  } else {
    document.write("Liczba nie jest pierwsza");
  }

  document.write("<br>");

  //reset wartosci
  dzielniki = 0;
}
