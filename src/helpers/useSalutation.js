import { useState } from "react";

const SALUTATIONS = [
  "Ahoy",
  "Hola",
  "Hey",
  "Bonjour",
  "Zdravstvuyte",
  "Salve",
  "Konnichiwa",
  "Guten Tag",
  "Olá",
  "Anyoung haseyo",
  "Asalaam alaikum",
  "Goddag",
  "Shikamoo",
  "Goedendag",
  "Yassas",
  "Dzień dobry",
  "Selamat siang",
  "Namaste",
  "Namaskaar",
  "Merhaba",
  "Shalom",
  "God dag",
];

const MAX = SALUTATIONS.length;

const getRandomInt = () => parseInt(Math.floor(Math.random() * MAX));

export default function useSalutations() {
  const [salutation, setSalutation] = useState(SALUTATIONS[getRandomInt()]);

  const randomizeSalutation = () => SALUTATIONS[getRandomInt()];

  return [salutation, setSalutation, randomizeSalutation];
}
