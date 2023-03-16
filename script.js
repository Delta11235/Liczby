let Dzielniki = 0;
let CzyNaturalna = false;
let CzyPierwsza = false;

function CoToZaLiczba(Liczba) {
  document.write(Liczba + "<br>");
  if (Liczba > 0) {
    document.write("Liczba jest naturalna");
    CzyNaturalna = 1;
  } else {
    document.write("Liczba nie jest naturalna");
    CzyNaturalna = 0;
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
      Dzielniki++;
    }
  }
  if (Dzielniki == 2) {
    document.write("Liczba jest pierwsza");
    CzyPierwsza = 1;
  } else {
    document.write("Liczba nie jest pierwsza");
    CzyPierwsza = 0;
  }

  document.write("<br>");

  if (CzyNaturalna == 1 && CzyPierwsza == 0 && Liczba > 1) {
    document.write("Liczba jest złożona");
  } else {
    document.write("Liczba nie jest złożona");
  }

  document.write("<br>");

  Dzielniki = 0;
  CzyNaturalna = 0;
  CzyPierwsza = 0;
}
