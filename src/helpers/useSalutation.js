import { useState } from "react";

const SALUTATIONS = [
  "Ahoy",
  "Hola",
  "Hey",
  "Bonjour",
  "Salve",
  "Konnichiwa",
  "Guten Tag",
  "Olá",
  "Namaste",
  "Namaskaara",
];

const MAX = SALUTATIONS.length;

const getRandomInt = () => parseInt(Math.floor(Math.random() * MAX));

export default function useSalutations() {
  const [salutation, setSalutation] = useState(SALUTATIONS[getRandomInt()]);

  const randomizeSalutation = () => SALUTATIONS[getRandomInt()];

  return [salutation, setSalutation, randomizeSalutation];
}
