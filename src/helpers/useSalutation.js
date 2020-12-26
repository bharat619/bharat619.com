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

  const [idx, setIdx] = useState(0);

  const randomizeSalutation = () => {
    setIdx((prev) => {
      const newIdx = getRandomInt();
      if (prev !== newIdx) {
        return newIdx;
      } else {
        return 0;
      }
    });

    return SALUTATIONS[idx];
  };

  return [salutation, setSalutation, randomizeSalutation];
}
