const alph = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

export default function () {
  let result = '';
  for (let i = 0; i < 10; i += 1) {
    const random = Math.floor(Math.random() * 24);
    if (random % 2 === 0) {
      result += alph[random];
    } else {
      result += random;
    }
  }
  return result;
}

